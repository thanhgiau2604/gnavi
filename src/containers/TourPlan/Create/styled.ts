import { fontSize } from 'constants/index'
import styled from 'styled-components'
import { Variables } from 'styles/styled/app/Variables'

const TourPlanCreateContainer = styled.div`
  .title {
    text-align: center;
    margin: 4rem auto 2.5rem auto;
    font-size: ${fontSize.MEDIUM};
  }
  .btn {
    &-submit {
      text-align: center;
      border: 1px solid ${Variables.color3};
    }
  }
  .unit {
    font-size: ${fontSize.MEDIUM};
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
    font-size: ${fontSize.MEDIUM};
    padding-bottom: 1.5rem;
    margin-bottom: 1rem;
  }
`

export { TourPlanCreateContainer }
