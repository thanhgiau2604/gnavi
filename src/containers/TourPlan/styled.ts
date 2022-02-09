import styled from 'styled-components'
import { FIELD_LABEL_WEIGHT, FONT_SIZES } from '@constants'

const TourPlanContainer = styled.div`
  text-align: justify;
  margin: 2.4rem auto;
  .title {
    font-size: ${FONT_SIZES.xlarge};
    font-weight: ${FIELD_LABEL_WEIGHT.bold};
    margin-bottom: 1.2rem;
    padding: 0 0.6rem;
  }
  .datetime {
    font-size: ${FONT_SIZES.small};
    font-weight: ${FIELD_LABEL_WEIGHT.normal};
    margin-bottom: 1.2rem;
    padding: 0 0.6rem;
  }
`

export { TourPlanContainer }
