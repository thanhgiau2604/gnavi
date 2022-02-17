import { FIELD_LABEL_WEIGHT, FONT_SIZES } from '@constants'
import styled from 'styled-components'
import { Variables } from 'styles/styled/app/Variables'

const PullDownMenuContainer = styled.div`
  .field {
    font-weight: ${FIELD_LABEL_WEIGHT.normal};
    font-size: ${FONT_SIZES.large};
  }
  hr {
    border: 0;
    height: 1px;
    background-color: ${Variables.color1};
  }
  .icon {
    &-expand {
      transform: rotate(180deg);
    }
    &-collapse {
      transform: rotate(0deg);
    }
  }
`

export { PullDownMenuContainer }
