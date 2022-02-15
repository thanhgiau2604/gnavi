import styled from 'styled-components'
import { Variables } from 'styles/styled/app/Variables'

const PostLayoutContainer = styled.div`
  --post-footer-height: 5.6rem;
  .post-layout {
    &-main {
      height: calc(100vh - var(--post-footer-height));
      background-color: ${Variables.color6};
      overflow-y: scroll;
      padding-bottom: 2rem;
    }

    &-btn-create {
      height: var(--post-footer-height);
      display: flex;
      align-items: center;
      a {
        display: block;
        width: 100%;
      }
    }
  }
`

export { PostLayoutContainer }
