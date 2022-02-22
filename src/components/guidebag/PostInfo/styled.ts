import styled from 'styled-components'
import { FONT_SIZES } from '@constants'
import { Variables } from 'styles/styled/app/Variables'

const PostInfoContainer = styled.div`
  font-size: 1.5rem;
  .post-user {
    &-info {
      margin-left: 1rem;
    }
    &-detail {
      color: ${Variables.colorTextCommon};
    }
    &-name {
      color: ${Variables.colorPrimary};
      padding-left: 5px;
    }
    &-tag {
      font-size: ${FONT_SIZES.xsmall};
      border: 1px solid ${Variables.colorPrimary};
      padding: 1px 2px;
    }
    &-title {
      padding-left: 5px;
    }
    &-more,
    &-time {
      padding-top: 1.6rem;
    }

    &-answer-num {
      font-weight: ${Variables.fontWeightBold};
    }
  }

  button {
    padding: 0;
  }
`

export { PostInfoContainer }
