import styled from 'styled-components'
import { Variables } from 'styles/styled/app/Variables'

interface GuideBagLayoutStyle {
  bgColor: string
}
const GuideBagLayoutContainer = styled.div<GuideBagLayoutStyle>`
  --guidebag-footer-height: 5.6rem;
  .guidebag-layout {
    &-main {
      height: calc(100vh - var(--guidebag-footer-height));
      background-color: ${({ bgColor }) => bgColor && `${bgColor}`};
      overflow-y: scroll;
      padding-bottom: 2rem;
    }

    &-btn-create {
      height: var(--guidebag-footer-height);
      display: flex;
      align-items: center;
      a {
        display: block;
        width: 100%;
      }
    }

    &-btn-wrapper {
      border-top: 1px solid ${Variables.color3};
    }
  }
`

export { GuideBagLayoutContainer }
