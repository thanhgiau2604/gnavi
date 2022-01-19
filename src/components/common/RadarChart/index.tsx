import React from 'react'
import 'chart.js/auto' // required
import { Radar } from 'react-chartjs-2'

const RadarChart = () => {
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
    }, // number of levels of the chart
  }
  const data = {
    labels: ['Communication', 'Basic Capabilities', 'Technique', 'Knowledge', 'Mindset'],
    datasets: [
      {
        label: 'ガイドスキル',
        data: [8, 6, 10, 7, 9], // indicators
        /* styles */
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
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
    <div>
      <Radar data={data} height={50} width={50} options={options} />
    </div>
  )
}

export default RadarChart
