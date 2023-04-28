// import * as Echarts from 'Echarts';

import BarChart from '@/components/BarChart'
import EChartsChart from '@/components/EChartsChart'

const graph = () => {




  return (
    <>
      <br />
      <br />
      <h3 style={{ textAlign: 'center' }}>echarts</h3>
      <EChartsChart />
      <h3 style={{ textAlign: 'center' }}>apexCharts</h3>
      <BarChart />
    </>
  )
}
export default graph
