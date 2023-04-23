/* eslint-disable react-hooks/rules-of-hooks */
import ComponentToPrint from '@/components/ComponentToPrint'
import makeData from '@/helpers/makeData'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
// import { applyPlugin } from 'jspdf-autotable'
import React, { useEffect, useMemo, useRef } from 'react'
import { toPng } from 'html-to-image'
export default function Home() {
  // const button = document.getElementById("download-button");
  const refNode = useRef<HTMLDivElement>(null)
  async function generatePDF() {
    // const element = document.getElementById("invoice")
    // const opt = {
    //   pagebreak: {
    //     mode: ["avoid-all", "css", "legacy"]
    //   }
    // }
    // html2pdf().from(element).set(opt).save()
    // console.log("generate it !")
    // const doc = new jsPDF({
    //   orientation: "landscape",
    //   unit: "in",
    //   format: [4, 2]
    // })
    // applyPlugin(jsPDF)

    function getChildrenHeight(children: Element) {
      const height = children.scrollHeight
      return ['border-top-width', 'border-bottom-width', 'margin-top', 'margin-bottom']
        // get array of margin and border
        .map(side => parseFloat(window.getComputedStyle(children)
          .getPropertyValue(`${side}`)
          .replace('px', '')
        ))
        //sum it with height
        .reduce((total, side) => total + side, height)
    }

    if (refNode.current) {

      //default state

      const ratio = 1.4142 // A4 ratio (width:height)
      const ratioWidth = 0.821 // canvas to pdf
      const width = 1240 // Set a default width for the PDF (in pixels)
      const height = 1754

      let sX = 0

      let dX = 0
      let dY = 0

      let usedHeight = 0
      const tableClassName = 'pdf-table'
      //create PDF
      const pdf = new jsPDF("p", "pt", [width, height], true)


      //loop for each children div
      for (let i = 0; i < refNode.current.children.length; i++) {
        const children = refNode.current.children[i]
        const childrenHeight = getChildrenHeight(children)
        console.log('🚀 ~ file: index.tsx:63 ~ childrenHeight:', childrenHeight)
        await toPng(children as HTMLElement).then((canvasDataURL) => {

          // const canvasHeight = canvas.height

          if (childrenHeight + usedHeight > height) {
            pdf.addPage() //8.5" x 11" in pts (in*72)
            //reset useHeight
            usedHeight = 0
            pdf.addImage(canvasDataURL, 'PNG', 0, usedHeight, (width), childrenHeight, `alias-${i}`)
            usedHeight += childrenHeight
          } else {
            pdf.addImage(canvasDataURL, 'PNG', 0, usedHeight, (width), childrenHeight, `alias-${i}`)
            usedHeight += childrenHeight
          }
        })


        // //more method when use table
        // if (children.className.search(tableClassName) === -1) {
        //   console.log('use table')
        //   continue
        // }
        //height include margin and border




        //   html2canvas(quotes).then((canvas) => {
        //     if (typeof window !== 'undefined') {


        //       //! MAKE YOUR PDF
        //       var pdf = new jsPDF('p', 'pt', 'letter', true)

        //       for (var i = 0; i <= quotes.clientHeight / 980; i++) {

        //         //! This is all just html2canvas stuff



        //         var ctx = onePageCanvas.getContext('2d')
        //         // details on this usage of this function: 
        //         // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images#Slicing
        //         ctx.drawImage(srcImg, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight)

        //         // document.body.appendChild(canvas);
        //         var canvasDataURL = onePageCanvas.toDataURL("image/png", 1.0)

        //         var width = onePageCanvas.width
        //         var height = onePageCanvas.clientHeight

        //         //! If we're on anything other than the first page,
        //         // add another page
        //         if (i > 0) {
        //           pdf.addPage([612, 791]) //8.5" x 11" in pts (in*72)
        //         }
        //         //! now we declare that we're working on that page
        //         pdf.setPage(i + 1)
        //         //! now we add content to that page!
        //         pdf.addImage(canvasDataURL, 'PNG', 20, 40, (width * .62), (height * .62))

        //       }
        //       //! after the for loop is finished running, we save the pdf.
        //       pdf.save('Test.pdf')
        //     }
        //   })

      }

      pdf.save('New.pdf')
    }

    // if (quotes) {
    //   html2canvas(quotes).then((canvas) => {
    //     if (typeof window !== 'undefined') {


    //       //! MAKE YOUR PDF
    //       var pdf = new jsPDF('p', 'pt', 'letter', true)

    //       for (var i = 0; i <= quotes.clientHeight / 980; i++) {

    //         //! This is all just html2canvas stuff
    //         var srcImg = canvas
    //         var sX = 0
    //         var sY = 980 * i // start 980 pixels down for every new page
    //         var sWidth = 900
    //         var sHeight = 980
    //         var dX = 0
    //         var dY = 0
    //         var dWidth = 900
    //         var dHeight = 980

    //         window.onePageCanvas = document.createElement("canvas")
    //         onePageCanvas.setAttribute('width', 900)
    //         onePageCanvas.setAttribute('height', 980)
    //         var ctx = onePageCanvas.getContext('2d')
    //         // details on this usage of this function: 
    //         // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images#Slicing
    //         ctx.drawImage(srcImg, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight)

    //         // document.body.appendChild(canvas);
    //         var canvasDataURL = onePageCanvas.toDataURL("image/png", 1.0)

    //         var width = onePageCanvas.width
    //         var height = onePageCanvas.clientHeight

    //         //! If we're on anything other than the first page,
    //         // add another page
    //         if (i > 0) {
    //           pdf.addPage([612, 791]) //8.5" x 11" in pts (in*72)
    //         }
    //         //! now we declare that we're working on that page
    //         pdf.setPage(i + 1)
    //         //! now we add content to that page!
    //         pdf.addImage(canvasDataURL, 'PNG', 20, 40, (width * .62), (height * .62))

    //       }
    //       //! after the for loop is finished running, we save the pdf.
    //       pdf.save('Test.pdf')
    //     }
    //   })
    // }
  }




  return (
    <>
      <button onClick={generatePDF}>Print this out!</button>
      <ComponentToPrint ref={refNode} />
    </>
  )
}
