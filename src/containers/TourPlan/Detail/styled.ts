import styled from 'styled-components'
import { fontSize } from 'constants/index'
import { FIELD_LABEL_WEIGHT } from 'constants/custom_field'
import { Variables } from 'styles/styled/app/Variables'

const TourPlanDetailContainer = styled.div`
  margin: 2.4rem auto auto auto;
  font-family: ${Variables.fontSecondary};
  text-align: justify;
  line-height: 1;
  .title {
    font-weight: ${FIELD_LABEL_WEIGHT.bold};
    font-size: ${fontSize.XLARGE};
    width: 90%;
    height: 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .text {
    &--large {
      font-size: ${fontSize.LARGE};
    }
    &--medium {
      font-size: ${fontSize.MEDIUM};
    }
  }
  .header {
    position: relative;
  }
  .tour-logs {
    > div[class*='TourInfoContainer']:first-child {
      margin-top: 0;
    }
    > div[class*='TourInfoContainer']:last-child {
      margin-bottom: 3.7rem;
    }
    margin-top: 4.1rem;
  }
`

export { TourPlanDetailContainer }
