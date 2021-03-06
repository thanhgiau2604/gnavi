import styled from 'styled-components'
import { Variables } from 'styles/styled/app/Variables'

const TestInfoSection = styled.section`
  .container {
    padding: 0 2rem;
  }

  .test-info {
    &-main {
      padding-top: 2.4rem;
      h3 {
        font-size: 1.8rem;
        font-weight: ${Variables.fontWeightNormal};
        line-height: calc(26 / 18);
      }
    }
    &-three-points {
      padding-top: 4rem;
    }
    &-icon {
      flex-shrink: 0;
    }
    &-point-detail {
      margin-left: 1.5rem;
    }
  }
`

export { TestInfoSection }
