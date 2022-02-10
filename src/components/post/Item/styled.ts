import styled from 'styled-components'
import { Variables } from 'styles/styled/app/Variables'

const PostItemContainer = styled.div`
  padding: 1.2rem 1.6rem;
  margin-top: 3.1rem;
  border-radius: 8px;
  background-color: ${Variables.colorWhite};

  .post {
    &-info {
      font-size: 1.5rem;
    }

    &-content {
      padding-top: 1.8rem;
      font-size: 1.6rem;
    }

    &-action {
      padding-top: 1.2rem;
    }

    &-comment-link {
      font-size: 1.5rem;
      font-weight: 400;
    }
  }

  .post-user {
    &-detail {
      margin-left: 1rem;
    }
    &-name {
      color: ${Variables.colorPrimary};
      span {
        color: ${Variables.colorTextCommon};
        padding-left: 5px;
      }
    }
  }
`

export { PostItemContainer }
