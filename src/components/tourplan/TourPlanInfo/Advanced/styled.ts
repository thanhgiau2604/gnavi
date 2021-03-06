import { FONT_SIZES, FIELD_LABEL_WEIGHT } from '@constants'
import styled from 'styled-components'
import { Variables } from 'styles/styled/app/Variables'

const TourPlanAdvancedInfoContainer = styled.div`
  font-size: ${FONT_SIZES.medium};
  position: relative;
  .title {
    font-size: ${FONT_SIZES.large};
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
      font-size: ${FONT_SIZES.medium};
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
    position: absolute;
    top: 0;
    right: 0;
  }
`

export { TourPlanAdvancedInfoContainer }
