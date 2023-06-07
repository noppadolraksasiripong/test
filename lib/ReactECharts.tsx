import { BarChart, BarSeriesOption, LineChart, LineSeriesOption, PieChart, PieSeriesOption } from 'echarts/charts'
import {
  BrushComponentOption,
  GridComponentOption,
  TitleComponentOption,
  TooltipComponent
} from 'echarts/components'
import { getInstanceByDom, init, Payload, use } from 'echarts/core'
import { SVGRenderer } from 'echarts/renderers'
import { CSSProperties, memo, PropsWithChildren, useEffect, useRef, useState } from 'react'

import type { ECharts, ComposeOption, SetOptionOpts } from 'echarts/core'
// Register the required components
use([
  // LegendComponent,
  LineChart,
  BarChart,
  PieChart,
  // GridComponent,
  TooltipComponent,
  // TitleComponent,
  // ToolboxComponent,
  SVGRenderer,
  // BrushComponent,
  // GraphicComponent,
])

// Combine an Option type with only required components and charts via ComposeOption
export type EChartsOption = ComposeOption<
  | BarSeriesOption
  | TitleComponentOption
  | GridComponentOption
  | BrushComponentOption
  | LineSeriesOption
  | PieSeriesOption
>

export interface ReactEChartsProps {
  option: EChartsOption
  style?: CSSProperties
  settings?: SetOptionOpts
  loading?: boolean
  theme?: 'light' | 'dark'
  onEvents?: Record<string, (...args: unknown[]) => boolean | void>
  dispatchAction?: Record<string, Payload>
  height?: number
  width?: number | string
}

function ReactECharts({
  option,
  style,
  settings,
  loading,
  theme,
  onEvents,
  height,
  width,
  dispatchAction,
  children
}: PropsWithChildren<ReactEChartsProps>): JSX.Element {
  const chartRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Initialize chart
    let chart: ECharts | undefined
    if (chartRef.current !== null) {
      chart = init(chartRef.current, theme, {
        ssr: false,
      })
    }

    // Add chart resize listener
    function resizeChart() {
      chart?.resize()
    }
    window.addEventListener('resize', resizeChart)

    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current)
    }

    // Return cleanup function
    return () => {
      chart?.dispose()
      window.removeEventListener('resize', resizeChart)
    }
  }, [height, theme, width])

  useEffect(() => {
    // Update chart
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current)
      chart?.setOption(option, settings)
      //  more info about onEvents and dispatchAction 
      // https://apache.github.io/echarts-handbook/en/concepts/event/ 
      if (!mounted && setMounted) {
        if (onEvents) {
          Object.entries(onEvents).forEach(([key, val]) => {
            chart?.on(key, val)
            if (key === 'brushSelected') {
              chart?.on('brushEnd', () => {
                // clear brush selection after stop dragging
                const dispatchRemoveBrush = {
                  type: 'brush',
                  command: 'clear',
                  areas: [],
                }
                chart?.dispatchAction(dispatchRemoveBrush)
              })
            }
          })
        }

        if (!!dispatchAction) {
          Object.entries(dispatchAction).forEach(([key, val]) => {
            chart?.dispatchAction(val)
          })
        }
        setMounted(true)
      }
    }
  }, [dispatchAction, mounted, onEvents, option, setMounted, settings, theme])

  useEffect(() => {
    // if chart loading
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current)
      loading === true ? chart?.showLoading() : chart?.hideLoading()
    }
  }, [loading, theme])

  return (
    <div className={"echarts-container"} >
      <div
        ref={chartRef}
        style={{
          width: width ?? '100%',
          minWidth: width ?? '100%',
          height: height ?? 300,
          minHeight: height ?? 300,
          ...style,
        }}
      />
      {
        children
        &&
        <>
          {children}
        </>
      }
    </div>
  )
}

export default ReactECharts
