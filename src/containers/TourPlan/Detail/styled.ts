import styled from 'styled-components'
import { fontSize } from 'constants/index'
import { FIELD_LABEL_WEIGHT } from 'constants/custom_field'
import { Variables } from 'styles/styled/app/Variables'

const TourPlanDetailContainer = styled.div`
  margin: 2.4rem auto auto auto;
  font-family: ${Variables.fontSecondary};
  text-align: justify;
  line-height: 2rem;
  .title {
    font-weight: ${FIELD_LABEL_WEIGHT.bold};
    font-size: ${fontSize.XLARGE};
    width: 90%;
    height: 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .text {
    &--large {
      font-size: ${fontSize.LARGE};
    }
    &--medium {
      font-size: ${fontSize.MEDIUM};
    }
  }
  .slider {
    position: relative;
    .slick-slider.slick-initialized {
      margin: 2.2rem auto 7.7rem auto;
    }
    .image-box {
      background: rgba(255, 255, 255, 0.8);
      position: absolute;
      width: 8.8rem;
      height: 3.2rem;
      right: 0;
      bottom: 0;
      transform: translate(-10%, -50%);
      border-radius: 4px;
      .icon {
        margin: 0.6rem auto 0.8rem 1.1rem;
      }
      .counter {
        color: ${Variables.colorPrimary};
        font-weight: ${FIELD_LABEL_WEIGHT.bold};
        margin: 0.6rem auto 0.8rem 1.1rem;
      }
    }
  }
  div[class*='TourInfoContainer']:nth-child(7) {
    margin-bottom: 1rem;
  }
`

export { TourPlanDetailContainer }
