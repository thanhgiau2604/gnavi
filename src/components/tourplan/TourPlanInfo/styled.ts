import { FONT_SIZES, FIELD_LABEL_WEIGHT } from '@constants'
import styled from 'styled-components'
import { Variables } from 'styles/styled/app/Variables'

const TourPlanInfoContainer = styled.div`
  position: relative;
  /* margin: 6.1rem auto; */
  /* Pull down menu */
  .field {
    font-weight: ${FIELD_LABEL_WEIGHT.normal};
  }
  hr {
    border: 0;
    height: 1px;
    background-color: ${Variables.color1};
  }
  .icon {
    &-expand {
      transform: rotate(180deg);
    }
    &-collapse {
      transform: rotate(0deg);
    }
  }
  .tag {
    font-weight: ${FIELD_LABEL_WEIGHT.bold};
    line-height: 1.5;
    border-left: ${`4px solid ${Variables.color1}`};
    padding: 0 1rem;
    margin-top: 2.3rem;
  }
  .information {
    font-weight: ${FIELD_LABEL_WEIGHT.normal};
    line-height: 1.5;
    padding: 0 1.4rem;
    margin-top: 1.5rem;
  }
  /* Pull down menu */
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
