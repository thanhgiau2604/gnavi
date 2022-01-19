import React from 'react'
import 'chart.js/auto' // required
import { Radar } from 'react-chartjs-2'
import { ChartContainer } from './styled'

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
        data: [8, 6, 10, 7, 9], // indicators
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
      <ChartContainer>
        <p className="title">2021/11/06 18:24</p>
        <Radar data={data} options={options} />
        <h5 className="note">自身の強 みや今後伸ばしていける部分を把握しましょう。</h5>
      </ChartContainer>
    </div>
  )
}

export default RadarChart
