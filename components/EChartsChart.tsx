import ReactECharts, { EChartsOption } from '@/lib/ReactECharts'

import { memo } from 'react'

const EChartsChart = () => {

  if (typeof window !== 'undefined') {
    document.addEventListener("click", function () {
      // Do what you want with click event

    }, false)
  }

  // const myChart = Echarts.init(chartDom);
  let xAxisData = []
  let data1 = []
  let data2 = []
  let data3 = []
  let data4 = []
  for (let i = 0; i < 10; i++) {
    xAxisData.push('Class' + i)
    data1.push(+(Math.random() * 2).toFixed(2))
    data2.push(+(Math.random() * 5).toFixed(2))
    data3.push(+(Math.random() + 0.3).toFixed(2))
    data4.push(+Math.random().toFixed(2))
  }
  const emphasisStyle = {
    itemStyle: {
      shadowBlur: 10,
      shadowColor: 'rgba(0,0,0,0.3)'
    }
  }

  const data = [
    {
      name: 'Solicitados',
      value: 18203,
    },
    {
      name: 'Aprobados',
      value: 12000,
    },
    {
      name: 'Aceptados',
      value: 13203,
    },
    {
      name: 'Cerrados',
      value: 8203,
    },
    {
      name: 'Negados',
      value: 1203,
    },
    {
      name: 'En revision',
      value: 6203,
    },
    {
      name: 'En mora',
      value: 2203,
    },
  ]
  const progressData = [
    { percent: 30, name: 'test1', color: 'red' },
    { percent: 20, name: 'test2', color: 'blue' },
    { percent: 50, name: 'test3', color: 'green' }
  ]

  const option: EChartsOption = {

    series: [
      {
        animation: false,
        name: '',
        type: 'pie',
        radius: ['78%', '100%'],
        label: {
          show: false,
        },
        emphasis: {
          scale: false,
        },
        data: progressData.map((progress) => ({
          value: progress.percent,
          name: progress.name,
          itemStyle: { color: progress.color },
        })),
      },
    ],
  }



  return (
    <ReactECharts option={option} height={160} width={160}>

    </ReactECharts>
  )
}

export default memo(EChartsChart)
