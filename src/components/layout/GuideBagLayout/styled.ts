import styled from 'styled-components'
import { Variables } from 'styles/styled/app/Variables'

const GuideBagLayoutContainer = styled.div`
  --guidebag-footer-height: 5.6rem;
  .guidebag-layout {
    &-main {
      height: calc(100vh - var(--guidebag-footer-height));
      background-color: ${Variables.color6};
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
  }
`

export { GuideBagLayoutContainer }
