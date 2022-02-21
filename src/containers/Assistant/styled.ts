import { FONT_SIZES } from '@constants'
import styled from 'styled-components'
import { Variables } from 'styles/styled/app/Variables'

const AssistantContainer = styled.div`
  .assistant-main {
    padding-top: 2.4rem;
  }
  h2 {
    font-size: ${FONT_SIZES.large};
    font-weight: ${Variables.fontWeightNormal};
  }

  .assistant-call-btn {
    position: relative;
    margin-top: 10rem;
    img {
      width: 2.4rem;
      height: 2.4rem;
      position: absolute;
      top: 50%;
      left: calc(50% - 8rem);
      transform: translateY(-50%);
    }
  }
`

export { AssistantContainer }
