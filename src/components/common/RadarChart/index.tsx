import React from 'react'
import 'chart.js/auto' // required
import { Radar } from 'react-chartjs-2'
import { RadarChartProps } from 'interfaces/RadarChart'

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
    labels: ['Communication', 'Basic Capabilities', 'Technique', 'Knowledge', 'Mindset'],
    datasets: [
      {
        label: 'ガイドスキル',
        data: indicators, // indicators
        /* styles */
        backgroundColor: 'rgba(255, 177, 193, 0.5)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)',
        /* styles */
      },
    ],
  }
  return (
    <div className="wrapper">
      <Radar data={data} options={options} />
    </div>
  )
}

export default RadarChart
