import styled from 'styled-components'
import { FONT_SIZES } from '@constants'
import { Variables } from 'styles/styled/app/Variables'

const PostContainer = styled.div`
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
  .detail-post {
    &-info {
      padding-top: 2.9rem;
    }

    &-answer-title {
      margin-top: 2.7rem;
      height: 4.8rem;
      background-color: ${Variables.color6};
      .container {
        height: 100%;
        display: flex;
        align-items: center;
      }
      h3 {
        font-size: ${FONT_SIZES.large};
      }
    }

    &-answer-item {
      padding-top: 2rem;
    }

    &-comment-form {
      padding-top: 5rem;
    }
  }
`
export { PostContainer, NewPostContainer, DetailPostContainer }
