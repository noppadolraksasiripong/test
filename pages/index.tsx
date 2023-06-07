/* eslint-disable react-hooks/rules-of-hooks */
import jsPDF from 'jspdf'
import React, { useMemo, useState } from 'react'
import dynamic from 'next/dynamic'
import { PrintPDF, generatePDF, getDatas } from '@/helpers/utils'
// import ComponentToPrint from '@/components/ComponentToPrint'
const ComponentToPrint = dynamic(() => import('@/components/ComponentToPrint'), {
  ssr: false,
})
export const containerId = 'invoice'
export const footerId = 'footer-pdf'
export const headerId = 'header-pdf'
export const ratio = 1.4145 // A4 ratio (width:height)
export const paperWidth = 1240 // Set a default width for the PDF (in pixels)
export const paperHeight = Math.trunc(paperWidth * ratio)
export const tablePDFId = 'table-pdf'


export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [pdfState, setPdfState] = useState<jsPDF | null>(null)
  const [showPreview, setShowPreview] = useState<boolean>(false)
  const [isLoadingPDF, setIsLoadingPDF] = useState<boolean>(false)
  const tablePDFDatas = useMemo(() => ({
    head: [['id', 'name', 'age']],
    body: getDatas([1, 'bright', 10], 100)
  }), [])
  async function handleShowPreview() {
    if (!pdfState) {
      const pdf = await generatePDF({
        containerId,
        footerId,
        headerId,
        paperWidth,
        paperHeight,
        tablePDFId,
        tablePDFDatas,
        setIsLoadingPDF,
        setPdfState,
      })
      //if success
      if (pdf) {
        setShowPreview(true)
      }
    }
    else {
      setShowPreview(!showPreview)
    }
  }

  return (
    <>
      <div id={headerId} className={isLoadingPDF ? 'loading-pdf' : ''}>
        <div className='header-container' >This is header</div>
      </div>
      {
        isLoading
          ? <>loading.....</>
          :
          <>
            <div >
              <button className='button-print' onClick={async () => await PrintPDF(pdfState, {
                containerId,
                footerId,
                headerId,
                paperWidth,
                paperHeight,
                tablePDFId,
                tablePDFDatas,
                setIsLoadingPDF,
                setPdfState,
              })}>Print this out!</button>
            </div>
            <div >
              <button className='button-print' onClick={handleShowPreview}>{showPreview ? 'Hide preview' : 'Show preview'}</button>
            </div>
          </>
      }

      <ComponentToPrint setIsLoading={setIsLoading} isLoadingPDF={isLoadingPDF} />
      {
        isLoadingPDF
        &&
        <div>generating...</div>
      }
      {
        pdfState && showPreview
        &&
        <div className="iframe-container">
          <iframe className="responsive-iframe" src={pdfState.output('datauristring')}></iframe>
        </div>
      }
      <div id={footerId} className={isLoadingPDF ? 'loading-pdf' : ''}>

        <div className='footer-container'>This is footer</div>
      </div>
    </>
  )
}


