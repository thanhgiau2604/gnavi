import { Variables } from 'styles/styled/app/Variables'

const RADAR_CHART_LABELS = {
  all: ['Mindset', 'Basic Capabilities', 'Communication', 'Technique', 'Knowledge'],
  current_result: '今回',
  last_result: '前回',
}

const RADAR_CHART_STYLES = {
  style01: {
    backgroundColor: 'rgba(255, 177, 193, 0.65)',
    borderColor: 'rgba(255, 138, 162, 255)',
    borderWidth: 1.5,
    pointBackgroundColor: 'rgba(255, 138, 162, 255)',
    pointBorderColor: 'rgba(255, 138, 162, 255)',
    pointBorderWidth: 0.25,
    pointRadius: 1.5,
    pointHoverBackgroundColor: Variables.colorWhite,
    pointHoverBorderColor: 'rgb(255, 99, 132)',
  },
  style02: {
    backgroundColor: 'rgba(177, 209, 255, 0.65)',
    borderColor: 'rgba(150, 194, 255, 255)',
    borderWidth: 1.5,
    pointBackgroundColor: 'rgba(99, 142, 201, 255)',
    pointBorderColor: 'rgba(99, 142, 201, 255)',
    pointBorderWidth: 0.25,
    pointRadius: 1.5,
    pointHoverBackgroundColor: Variables.colorWhite,
    pointHoverBorderColor: 'rgb(255, 99, 132)',
  },
}

export { RADAR_CHART_STYLES, RADAR_CHART_LABELS }
