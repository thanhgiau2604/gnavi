import styled from 'styled-components'
import { fontSize } from 'constants/index'
import { FIELD_LABEL_WEIGHT } from 'constants/customField'
import { Variables } from 'styles/styled/app/Variables'

const TourPlanDetailContainer = styled.div`
  margin: 2.4rem auto 2.2rem auto;
  font-family: ${Variables.fontSecondary};
  text-align: justify;
  line-height: 2rem;
  .title {
    font-weight: ${FIELD_LABEL_WEIGHT.bold};
    font-size: ${fontSize.XLARGE};
    width: 90%;
    height: 2.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
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
`

export { TourPlanDetailContainer }
