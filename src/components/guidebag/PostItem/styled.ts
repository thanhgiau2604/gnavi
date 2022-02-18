import { FONT_SIZES } from '@constants'
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
    &-title {
      color: ${Variables.colorPrimary};
      font-size: 1.7rem;
      font-weight: ${Variables.fontWeightBold};
      padding-top: 1.5rem;
    }

    &-content {
      padding-top: 0.8rem;
      font-size: 1.6rem;
    }

    &-categories {
      background-color: ${Variables.color6};
      margin-top: 3rem;
      padding: 5px;
      h4 {
        font-weight: ${Variables.fontWeightNormal};
      }
    }

    &-category-item {
      font-size: ${FONT_SIZES.small};
      color: ${Variables.colorPrimary};
      font-weight: ${Variables.fontWeightBold};
      &:not(:first-of-type) {
        padding-left: 8px;
      }
    }
  }
`

export { PostItemContainer }
