/* eslint-disable react-hooks/rules-of-hooks */
import ComponentToPrint from '@/components/ComponentToPrint'
import jsPDF from 'jspdf'
import React, { useRef } from 'react'
import { toPng } from 'html-to-image'
export default function Home() {
  // const button = document.getElementById("download-button");
  const refNode = useRef<HTMLDivElement>(null)

  async function generatePDF() {
    if (refNode.current) {
      //default state
      const ratio = 1.4145 // A4 ratio (width:height)
      const width = 1240 // Set a default width for the PDF (in pixels)
      const height = Math.trunc(width * ratio)
      let page = 1
      let footerHeight = 0
      let headerHeight = 0
      let usedHeight = 0
      const pdf = new jsPDF("p", "pt", [width, height], true)

      const header = document.getElementById('header-pdf')
      let headerDataURL = ''
      let footerDataURL = ''
      if (header) {
        headerHeight = getElementHeight(header)
        headerDataURL = await toPng(header as HTMLElement)
        addHeader()
      }

      const footer = document.getElementById('footer-pdf')
      if (footer) {
        footerHeight = getElementHeight(footer)
        footerDataURL = await toPng(footer as HTMLElement)
        addFooter()
      }

      //loop for each children div
      for (let i = 0; i < refNode.current.children.length; i++) {
        const children = refNode.current.children[i]
        const childrenHeight = getElementHeight(children)
        const canvasDataURL = await toPng(children as HTMLElement)
        const isFull = childrenHeight + usedHeight > height
        if (isFull) {

          addPage()
          //reset useHeight
          usedHeight = 0 + footerHeight + headerHeight
        }
        addImage(canvasDataURL, usedHeight - footerHeight, childrenHeight)
      }

      //add footer pages 
      for (let i = 1; i <= pdf.getNumberOfPages(); i++) {
        pdf.setPage(i)
        addFooterPageNumber(i)
      }

      pdf.save('New.pdf')


      function addFooterPageNumber(page: number) {
        const text = `page: ${page}`
        var footerX = pdf.internal.pageSize.getWidth() / 2
        var footerY = pdf.internal.pageSize.getHeight() - 10
        pdf.text(text, footerX, footerY, { align: 'center' })
      }

      function addImage(
        canvasDataURL: string | HTMLImageElement,
        startedHeight: number,
        childrenHeight: number,
      ) {
        pdf.addImage(
          canvasDataURL,
          'PNG',
          0,
          startedHeight,
          width,
          childrenHeight
        )
        usedHeight += childrenHeight
      }

      function addPage() {
        pdf.addPage() //8.5" x 11" in pts (in*72)
        page++
        if (header) {
          addHeader()
        }
        if (footer) {
          addFooter()
        }
      }

      function addFooter() {
        addImage(footerDataURL, height - footerHeight, footerHeight)
      }

      function addHeader() {
        addImage(headerDataURL, 0, headerHeight)
      }
    }
  }

  return (
    <>
      <header></header>
      {/* <div id="header-pdf">This is header</div> */}
      <button onClick={generatePDF}>Print this out!</button>
      <ComponentToPrint ref={refNode} />
      {/* <div id="footer-pdf">This is footer</div> */}
      <footer></footer>
    </>
  )
}


function getElementHeight(children: Element) {
  const height = children.scrollHeight
  return ['border-top-width', 'border-bottom-width', 'margin-top', 'margin-bottom']
    // get array of margin and border
    .map(side => parseFloat(window.getComputedStyle(children)
      .getPropertyValue(side)
      .replace('px', '')
    ))
    //sum it with height
    .reduce((total, side) => total + side, height)
}
