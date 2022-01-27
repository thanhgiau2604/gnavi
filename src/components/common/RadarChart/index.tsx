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
        backgroundColor: 'rgba(255, 177, 193, 0.65)',
        borderColor: 'rgba(255, 138, 162, 255)',
        borderWidth: 1.5,
        pointBackgroundColor: 'rgba(255, 138, 162, 255)',
        pointBorderColor: 'rgba(255, 138, 162, 255)',
        pointBorderWidth: 0.25,
        pointRadius: 1.5,
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)',
        /* styles */
      },
    ],
  }
  return <Radar data={data} options={options} />
}

export default RadarChart
