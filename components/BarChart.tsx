
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
        type: "xy",
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
          console.log(chart, e)
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
    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
  }]
  return (
    <Chart options={options} series={series} width={500} height={400}></Chart>
  )
}
export default memo(BarChart)
