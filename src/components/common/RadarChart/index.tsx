import React from 'react'
import ReactECharts from 'echarts-for-react'
import { Variables } from 'styles/styled/app/Variables'

const RadarChart = () => {
  const option = {
    legend: {
      data: ['ガイドスキル'],
      itemStyle: {
        color: '#ffb1c1',
        borderColor: '#ee94a6',
      },
    },
    radar: {
      axisName: {
        color: '#666666',
        fontSize: 8,
      }, // style of label
      // center: ['50%', '50%'], // center chart
      splitArea: {
        areaStyle: {
          color: [
            Variables.colorWhite,
            Variables.colorWhite,
            Variables.colorWhite,
            Variables.colorWhite,
            Variables.colorWhite,
            Variables.colorWhite,
            Variables.colorWhite,
            Variables.colorWhite,
            Variables.colorWhite,
            Variables.colorWhite,
          ],
        },
      }, // style of background chart area
      nameGap: 5, // distance between the indicator's name and axis
      splitNumber: 10, // number of levels of the chart
      indicator: [
        { name: 'Communication', max: 6500 },
        { name: 'Mindset', max: 16000 },
        { name: 'Knowledge', max: 30000 },
        { name: 'Technique', max: 38000 },
        { name: 'Basic Capabilities', max: 52000 },
      ], // label and value of each data
    },
    series: [
      {
        type: 'radar',
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000],
            name: 'ガイドスキル',
            areaStyle: {
              color: '#ffb1c1', // color of area charts
            },
            lineStyle: {
              color: '#ee94a6', // color of lines
              width: 1.5,
            },
            itemStyle: {
              color: 'transparent', // color of data points
              borderWidth: 1.5,
            },
          },
        ],
      },
    ],
  }
  return <ReactECharts option={option} />
}

export default RadarChart
