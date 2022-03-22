import styled from 'styled-components'
import { FONT_SIZES } from '@constants'
import { Variables } from 'styles/styled/app/Variables'

const PlanInfoContainer = styled.div`
  .title {
    text-align: center;
    margin: 4rem auto 2.5rem auto;
    font-size: ${FONT_SIZES.medium};
  }
  .btn {
    &-submit {
      text-align: center;
      border: 1px solid ${Variables.color3};
    }
  }
  .unit {
    font-size: ${FONT_SIZES.medium};
    &-currency {
      margin: 0.25rem 0 0 1.3rem;
    }
    &-people {
      margin: 2rem 2rem 0 1rem;
    }
    &-age {
      margin: 0.25rem 0 0 1.3rem;
    }
  }
  .label {
    font-weight: ${Variables.fontWeightBold};
    font-size: ${FONT_SIZES.medium};
    padding-bottom: 1.5rem;
    margin-bottom: 1rem;
  }
`

export { PlanInfoContainer }
