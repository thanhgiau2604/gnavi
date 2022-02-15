import { Variables } from 'styles/styled/app/Variables'
import styled from 'styled-components'

const PostContainer = styled.div`
  --post-footer-height: 5.6rem;
  .post-main {
    height: calc(100vh - var(--post-footer-height));
    background-color: ${Variables.color6};
    overflow-y: scroll;
    padding-bottom: 2rem;
  }
  .post-menu {
    margin-top: 2.3rem;
    background-color: ${Variables.colorWhite};
  }

  .post-container {
    margin: 2.3rem 0.9rem 0;
    & > :first-child {
      margin-top: 2.3rem;
    }
  }

  .post-btn-create {
    height: var(--post-footer-height);
    display: flex;
    align-items: center;
  }
`

const NewPostContainer = styled.div`
  .new-post {
    &-info {
      padding-top: 1.9rem;
    }
    &-form {
      padding-top: 1.7rem;
    }
  }
`

const DetailPostContainer = styled.div`
  .detail-post-info {
    padding-top: 2.9rem;
  }
`
export { PostContainer, NewPostContainer, DetailPostContainer }
