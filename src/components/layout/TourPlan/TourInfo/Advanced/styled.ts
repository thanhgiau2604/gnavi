import { fontSize } from 'constants/index'
import { FIELD_LABEL_WEIGHT } from 'constants/custom_field'
import styled from 'styled-components'
import { Variables } from 'styles/styled/app/Variables'

const AdvancedInfoContainer = styled.div`
  font-size: ${fontSize.MEDIUM};
  position: relative;
  .title {
    font-size: ${fontSize.LARGE};
    font-weight: ${FIELD_LABEL_WEIGHT.bold};
  }
  .fm-noto {
    font-family: ${Variables.fontPrimary};
    font-weight: ${FIELD_LABEL_WEIGHT.normal};
    line-height: 1.5;
    margin: 1.7rem auto;
  }
  .transportation {
    margin: 1.7rem auto 1.6rem auto;
    line-height: 1;
    .title {
      font-size: ${fontSize.MEDIUM};
    }
    .content {
      margin-top: 0.5rem;
      &:not(:last-child) {
        &::after {
          content: ' / ';
        }
      }
    }
  }
  .icon {
    &-doc {
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(0, 10%);
    }
  }
`

export { AdvancedInfoContainer }
