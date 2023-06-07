import { memo, useEffect, useState } from 'react'
import Table from './Table'

import AntdComponent from './AntdComponent'
import EChartsChart from './EChartsChart'
import { containerId, tablePDFId } from '@/pages'

type Props = {
  setIsLoading: (val: boolean) => void
  isLoadingPDF: boolean
}
const ComponentToPrint = ({ setIsLoading, isLoadingPDF }: Props) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
    setIsLoading(false)
  }, [setIsLoading])
  if (!mounted) return <></>

  return (
    <div className={isLoadingPDF ? 'loading-pdf' : ''} id={containerId}>
      <div className="page">
        <div>
          <h2>Invoice #</h2>
        </div>
        <div className="intro-table">
          <div className="intro-form intro-form-item">
            <p className="intro-table-title">Billed To:</p>
            <p>
              Company Ltd.<br />
              Address<br />
              Country<br />
              VAT ID: ATU12345678
            </p>
          </div>

          <div className="intro-form">
            <div className="intro-form-item-border">
              <p className="intro-table-title">Payment Date:</p>
              <p>November 22nd 2021</p>
            </div>

            <div className="intro-form-item-border">
              <p className="intro-table-title">Payment Method:</p>
              <p>Bank Transfer</p>
            </div>
          </div>
        </div>
        <div className="table-box" table-box="table-box">
          <Table />
        </div>
      </div>
      <div className={tablePDFId}>
      </div>
      <div>
        <EChartsChart />
      </div>
      <div>
        <AntdComponent />
      </div>
    </div>
  )
}

export default memo(ComponentToPrint)
