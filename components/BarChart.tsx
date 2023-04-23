
import { memo } from 'react'
import { ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })
const BarChart = () => {
  const options: ApexOptions = {
    chart: {
      type: 'bar'
    },
  }
  const series = [{
    data: [{
      x: 'category A',
      y: 10
    }, {
      x: 'category B',
      y: 18
    }, {
      x: 'category C',
      y: 13
    }]
  }]
  return (
    <Chart options={options} series={series}></Chart>
  )
}
export default memo(BarChart)
