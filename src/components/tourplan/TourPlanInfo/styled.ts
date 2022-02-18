import { FONT_SIZES } from '@constants'
import styled from 'styled-components'
import { Variables } from 'styles/styled/app/Variables'

const TourPlanInfoContainer = styled.div`
  position: relative;
  .table-event {
    border-collapse: collapse;
    width: 100%;
    margin-top: 2.3rem;
    color: ${Variables.colorBlack};
    font-size: ${FONT_SIZES.medium};
    td,
    th {
      border: 1px solid ${Variables.color3};
      text-align: left;
      padding: 1.2rem 2rem;
    }
    td:first-child {
      width: 7rem;
      position: relative;
    }
    td:last-child {
      width: 24.5rem;
    }
    p.timeline {
      font-size: ${FONT_SIZES.large};
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, 70%);
    }
    .circle {
      width: 1.6rem;
      height: 1.6rem;
      background-color: ${Variables.color3};
      border-radius: 50%;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(55%, 90%);
    }
  }
`

export { TourPlanInfoContainer }
