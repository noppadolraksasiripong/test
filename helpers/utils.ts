import { toPng } from 'html-to-image'
import jsPDF from 'jspdf'
import autoTable, { RowInput, UserOptions } from 'jspdf-autotable'

interface IGeneratePDF {
  containerId: string
  footerId: string
  headerId: string
  tablePDFId: string
  tablePDFDatas: { head: string[][], body: string[][] }
  paperWidth: number
  paperHeight: number
  setIsLoadingPDF: (val: boolean) => void
  setPdfState: (val: jsPDF) => void
}

function timeout(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export async function generatePDF(props: IGeneratePDF) {
  const {
    containerId,
    footerId,
    headerId,
    tablePDFId,
    tablePDFDatas,
    paperWidth,
    paperHeight,
    setIsLoadingPDF,
    setPdfState,
  } = props
  setIsLoadingPDF(true)
  await timeout(100)
  // if (typeof window === 'undefined') return
  const refNode: HTMLElement | null = document.getElementById(containerId)
  const footer: HTMLElement | null = document.getElementById(footerId)
  const header: HTMLElement | null = document.getElementById(headerId)
  if (refNode && footer && header) {

    //default state
    const pdf = new jsPDF("p", "pt", [paperWidth, paperHeight], true)

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

      //table
      if (children.classList.contains(tablePDFId)) {
        autoTable(pdf, {
          ...tablePDFDatas,
          headStyles: {
            halign: "center",
            valign: "middle",
            lineWidth: 0.25,
            lineColor: 200
          },
          bodyStyles: {
            halign: "center",
            lineWidth: 0.25,
            lineColor: 200
          },
          margin: {
            top: 30
          }
        })
        if (refNode.children.length !== i + 1) {
          const nextChildren = refNode.children[i + 1] ?? undefined as HTMLElement | undefined
          addPage(nextChildren && nextChildren.classList.contains(tablePDFId))
        }
        continue
      }

      const childrenHeight = getElementHeight(children)
      if (childrenHeight < paperHeight) {
        const canvasDataURL = await toPng(children as HTMLElement)
        addImage(canvasDataURL, usedHeight - footerHeight, childrenHeight)
        //not last page
        if (refNode.children.length !== i + 1) {
          const nextChildren = refNode.children[i + 1] ?? undefined as HTMLElement | undefined
          addPage(nextChildren && nextChildren.classList.contains(tablePDFId))
        }
      } else {
        await customizeAddPages(children)
        //not last page
        if (refNode.children.length !== i - 1) {
          const nextChildren = refNode.children[i + 1] ?? undefined as HTMLElement | undefined
          addPage(nextChildren && nextChildren.classList.contains(tablePDFId))
        }
      }
    }

    //add footer pages 
    for (let i = 1; i <= pdf.getNumberOfPages(); i++) {
      pdf.setPage(i)
      addFooterPageNumber(i)
    }
    setPdfState(pdf)
    setIsLoadingPDF(false)

    return pdf

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
        const isFull = childrenHeight + usedHeight > paperHeight
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
      if (childrenHeight === 0) return

      pdf.addImage(
        canvasDataURL,
        'PNG',
        0,
        startedHeight,
        paperWidth,
        childrenHeight
      )

    }

    function addPage(onlyContent?: boolean) {
      pdf.addPage() //8.5" x 11" in pts (in*72)
      if (onlyContent) {
        return
      }
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
      console.log(footerHeight)
      addImage(footerDataURL, paperHeight - footerHeight, footerHeight)
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

export function getElementHeight(children: Element) {
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

export async function PrintPDF(pdfState?: jsPDF | null, generatePDFOption?: IGeneratePDF) {

  if (!pdfState) {
    if (!generatePDFOption) return

    pdfState = await generatePDF(generatePDFOption)
  }
  if (pdfState) {
    pdfState.save()
  }
}


export function getDatas(datas: any[], times: number) {
  let count = 1
  let res = []
  while (count < times) {
    const data = datas.map((data) => {
      return String(data += count)
    })
    res.push(data)
    count++
  }
  return res
}
