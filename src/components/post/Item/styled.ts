import styled, { css } from 'styled-components'
import { Variables } from 'styles/styled/app/Variables'

interface PostItemStyleProps {
  withBoxWrapper?: boolean
}
const PostItemContainer = styled.div<PostItemStyleProps>`
  margin-top: 3.1rem;
  ${({ withBoxWrapper }) =>
    withBoxWrapper &&
    css`
      border-radius: 8px;
      background-color: ${Variables.colorWhite};
      padding: 1.2rem 1.6rem;
    `}

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

    &-comment-form {
      padding-top: 2.9rem;
    }
  }

  .post-reaction {
    &-heart {
      padding-left: 2rem;
    }
  }
`

export { PostItemContainer }
