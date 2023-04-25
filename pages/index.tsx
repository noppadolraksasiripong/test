/* eslint-disable react-hooks/rules-of-hooks */
import jsPDF from 'jspdf'
import React, { Suspense, useState } from 'react'
import { toPng } from 'html-to-image'
import dynamic from 'next/dynamic'
const ComponentToPrint = dynamic(() => import('@/components/ComponentToPrint'), {
  loading: () => <></>,
  ssr: false,
})
const ButtonPrint = dynamic(() => import('@/components/ButtonPrint'), {
  loading: () => <div></div>,
  ssr: false,
})
export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const generatePDF = async () => {
    if (typeof window === 'undefined') return
    const refNode: HTMLElement | null = document.getElementById("invoice")
    const footer: HTMLElement | null = document.getElementById('footer-pdf')
    const header: HTMLElement | null = document.getElementById('header-pdf')
    if (refNode && footer && header) {
      setStyle(header)
      setStyle(footer)
      setStyle(refNode)
      //default state
      const ratio = 1.4145 // A4 ratio (width:height)
      const width = 1240 // Set a default width for the PDF (in pixels)
      const height = Math.trunc(width * ratio)

      const pdf = new jsPDF("p", "pt", [width, height], true)

      const headerHeight = getElementHeight(header)
      const footerHeight = getElementHeight(footer)
      const [headerDataURL, footerDataURL] = await Promise.all([
        await toPng(header.children[0] as HTMLElement),
        await toPng(footer.children[0] as HTMLElement),
      ])
      addHeader(headerDataURL, headerHeight)
      addFooter(footerDataURL, footerHeight)

      let usedHeight = 0 + footerHeight + headerHeight

      for (let i = 0; i < refNode.children.length; i++) {
        const children = refNode.children[i] as HTMLElement
        const childrenHeight = getElementHeight(children)
        if (childrenHeight < height) {
          const canvasDataURL = await toPng(children as HTMLElement)
          addImage(canvasDataURL, usedHeight - footerHeight, childrenHeight)
          //last page
          if (refNode.children.length !== i + 1) {
            addPage()
          }
        } else {
          await customizeAddPages(children)
          //last page
          if (refNode.children.length !== i - 1) {
            addPage()
          }
        }
      }

      //add footer pages 
      for (let i = 1; i <= pdf.getNumberOfPages(); i++) {
        pdf.setPage(i)
        addFooterPageNumber(i)
      }
      setStyleBack(refNode)
      setStyleBack(footer)
      setStyleBack(header)

      // window.open(pdf.output('bloburl') as unknown as string, '_blank')
      // window.location.href = pdf.output('bloburl') as unknown as string
      const iframeContainer = document.getElementById('iframe-container')
      if (iframeContainer) {
        iframeContainer.style.display = 'block';
        (iframeContainer.children[0] as HTMLIFrameElement).src = pdf.output('datauristring')
      }


      function addFooterPageNumber(page: number) {
        const text = `page: ${page}`
        var footerX = pdf.internal.pageSize.getWidth() / 2
        var footerY = pdf.internal.pageSize.getHeight() - 10
        pdf.text(text, footerX, footerY, { align: 'center' })
      }

      async function customizeAddPages(node: HTMLElement) {
        for (let i = 0; i < node.children.length; i++) {
          const children = node.children[i]
          const childrenHeight = getElementHeight(children)
          const canvasDataURL = await toPng(children as HTMLElement)
          const isFull = childrenHeight + usedHeight > height
          if (isFull) {
            addPage()
          }
          addImage(canvasDataURL, usedHeight - footerHeight, childrenHeight)
          usedHeight += childrenHeight
        }
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
      }

      function addPage() {
        pdf.addPage() //8.5" x 11" in pts (in*72)
        if (header) {
          addHeader(headerDataURL, headerHeight)
        }
        if (footer) {
          addFooter(footerDataURL, footerHeight)
        }
        //reset useHeight
        usedHeight = 0 + footerHeight + headerHeight
      }

      function addFooter(footerDataURL: string, footerHeight: number) {
        addImage(footerDataURL, height - footerHeight, footerHeight)
      }

      function addHeader(headerDataURL: string, headerHeight: number) {
        addImage(headerDataURL, 0, headerHeight)
      }
      function setStyle(refNode: HTMLElement) {
        refNode.style.display = 'block'
        refNode.style.position = 'fixed'
        refNode.style.left = '9999px'
      }
      function setStyleBack(refNode: HTMLElement) {
        refNode.style.position = 'static'
        refNode.style.bottom = '0px'
        refNode.style.display = 'none'
      }
    }
  }

  return (
    <>
      <div id="header-pdf">
        <div className='header-container' >This is header</div>
      </div>

      {/* <ButtonPrint generatePDF={generatePDF} /> */}
      {
        isLoading
          ? <>loading.....</>
          : <div>
            <button onClick={() => generatePDF()}>Print this out!</button>
          </div>
      }

      <ComponentToPrint setIsLoading={setIsLoading} />
      <div id='iframe-container' className="iframe-container">
        <iframe className="responsive-iframe" src=""></iframe>
      </div>
      <div id="footer-pdf">
        <div className='footer-container'>This is footer</div>
      </div>
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
