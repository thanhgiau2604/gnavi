import React from 'react'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'
import { Radar } from 'react-chartjs-2'
import { RADAR_CHART_LABELS, RADAR_CHART_STYLES } from '@constants'
import { RadarChartProps } from 'interfaces/RadarChart'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

const RadarChart: React.FC<RadarChartProps> = ({ indicators }) => {
  const options = {
    responsive: true,
    legend: {
      position: 'top',
    },
    scale: {
      reverse: false,
      max: 10,
      min: 0,
      stepSize: 1,
      ticks: {
        font: {
          size: 8,
        }, // styles
      },
    }, // number of levels of the chart
    scales: {
      r: {
        pointLabels: {
          font: {
            size: 8,
          }, // styles
        },
      },
    },
  }
  const data = {
    labels: RADAR_CHART_LABELS.all,
    datasets: [
      {
        label: RADAR_CHART_LABELS.current_result,
        data: indicators[0], // indicators
        ...RADAR_CHART_STYLES.style01, // styles
      },
      {
        label: RADAR_CHART_LABELS.last_result,
        data: indicators[1], // indicators
        ...RADAR_CHART_STYLES.style02, // styles
      },
    ],
  }
  return <Radar data={data} options={options} />
}

export default RadarChart
