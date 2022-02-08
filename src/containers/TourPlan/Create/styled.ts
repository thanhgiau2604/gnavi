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
`

export { TourPlanCreateContainer }
