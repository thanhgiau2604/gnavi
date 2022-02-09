import styled from 'styled-components'
import { Variables } from 'styles/styled/app/Variables'
import { FONT_SIZES, FIELD_LABEL_WEIGHT } from '@constants'

const TourLogContainer = styled.div`
  cursor: pointer;
  position: relative;
  border-radius: 8px;
  background-color: ${Variables.colorWhite};
  margin-bottom: 2.6rem;
  padding: 1.7rem 1.7rem 2.3rem 1.7rem;
  .title {
    width: 80%;
    height: 6.5rem;
    margin-bottom: 1.1rem;
    font-size: ${FONT_SIZES.large};
    font-weight: ${FIELD_LABEL_WEIGHT.bold};
    color: ${Variables.colorPrimary};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    padding: 0;
  }
  .content {
    font-size: ${FONT_SIZES.medium};
    font-weight: ${FIELD_LABEL_WEIGHT.normal};
    color: ${Variables.colorTextCommon};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`

export { TourLogContainer }
