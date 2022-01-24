import { FIELD_LABEL_WEIGHT } from 'constants/customField'
import styled from 'styled-components'
import { Variables } from 'styles/styled/app/Variables'

const TourPlanDetailBlockContainer = styled.div`
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
`

export { TourPlanDetailBlockContainer }
