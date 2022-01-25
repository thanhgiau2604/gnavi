import styled from 'styled-components'
import { FIELD_LABEL_WEIGHT } from 'constants/custom_field'
import { fontSize } from 'constants/index'

const TourPlanContainer = styled.div`
  text-align: justify;
  margin: 2.4rem auto;
  .title {
    font-size: ${fontSize.XLARGE};
    font-weight: ${FIELD_LABEL_WEIGHT.bold};
    margin-bottom: 1.2rem;
    padding: 0 0.6rem;
  }
  .datetime {
    font-size: ${fontSize.SMALL};
    font-weight: ${FIELD_LABEL_WEIGHT.normal};
    margin-bottom: 1.2rem;
    padding: 0 0.6rem;
  }
`

export { TourPlanContainer }
