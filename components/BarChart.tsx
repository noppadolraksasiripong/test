
import { memo } from 'react'
import { ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })
const BarChart = () => {
  const options: ApexOptions = {

    chart: {
      type: 'bar',
      height: 350,
      selection: {
        enabled: true,
        fill: {
          color: "#24292e",
          opacity: 0.1
        }
      },
      zoom: {
        enabled: false,
      },
      events: {
        selection: function (chart, e) {
          console.log(chart)
        }
      }

    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      }
    },
    xaxis: {
      categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
        'United States', 'China', 'Germany'
      ],
    }
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
    <Chart options={options} series={series} width={500} height={400}></Chart>
  )
}
export default memo(BarChart)
