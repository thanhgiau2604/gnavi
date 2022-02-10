import styled from 'styled-components'
import { Variables } from 'styles/styled/app/Variables'

const PostItemContainer = styled.div`
  padding: 1.2rem 1.6rem;
  margin-top: 3.1rem;
  border-radius: 8px;
  background-color: ${Variables.colorWhite};

  .post {
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

  .post-reaction {
    &-heart {
      padding-left: 2.5rem;
    }

    &-like-num,
    &-heart-num {
      padding-left: 4px;
    }
  }
`

export { PostItemContainer }
