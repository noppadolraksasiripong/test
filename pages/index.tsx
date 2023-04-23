/* eslint-disable react-hooks/rules-of-hooks */
import ComponentToPrint from '@/components/ComponentToPrint'
import jsPDF from 'jspdf'
// import { applyPlugin } from 'jspdf-autotable'
import React, { useRef } from 'react'
import { toPng } from 'html-to-image'
export default function Home() {
  // const button = document.getElementById("download-button");
  const refNode = useRef<HTMLDivElement>(null)
  async function generatePDF() {

    function getChildrenHeight(children: Element) {
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

    if (refNode.current) {

      //default state
      const ratio = 1.4145 // A4 ratio (width:height)
      // const ratioWidth = 0.821 // canvas to pdf
      const width = 1240 // Set a default width for the PDF (in pixels)
      const height = Math.trunc(width * ratio) // relate to width
      const tableClassName = 'pdf-table'
      let usedHeight = 0
      //create PDF
      const pdf = new jsPDF("p", "pt", [width, height], true)
      //more method when use table
      if (refNode.current.className.search(tableClassName) === -1) {
        console.log('use table')

      }

      //loop for each children div
      for (let i = 0; i < refNode.current.children.length; i++) {
        const children = refNode.current.children[i]
        const childrenHeight = getChildrenHeight(children)
        const canvasDataURL = await toPng(children as HTMLElement)

        const canInsert = childrenHeight + usedHeight > height
        if (canInsert) {
          pdf.addPage() //8.5" x 11" in pts (in*72)
          //reset useHeight
          usedHeight = 0
          pdf.addImage(canvasDataURL, 'PNG', 0, usedHeight, (width), childrenHeight)
          usedHeight += childrenHeight
        } else {
          pdf.addImage(canvasDataURL, 'PNG', 0, usedHeight, (width), childrenHeight)
          usedHeight += childrenHeight
        }
      }
      pdf.save('New.pdf')
    }
  }




  return (
    <>
      <button onClick={generatePDF}>Print this out!</button>
      <ComponentToPrint ref={refNode} />
    </>
  )
}
