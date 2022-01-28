import { fontSize } from 'constants/index'
import { FIELD_LABEL_WEIGHT } from 'constants/custom_field'
import styled from 'styled-components'
import { Variables } from 'styles/styled/app/Variables'

const TourInfoContainer = styled.div`
  position: relative;
  margin: 6.1rem auto;
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
      transition: all ease 0.3s;
    }
    &-collapse {
      transform: rotate(0deg);
    }
  }
  .schedules-table {
    border-collapse: collapse;
    width: 100%;
    margin-top: 2.3rem;
    color: ${Variables.colorBlack};
    font-size: ${fontSize.MEDIUM};
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
      font-size: ${fontSize.LARGE};
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

export { TourInfoContainer }
