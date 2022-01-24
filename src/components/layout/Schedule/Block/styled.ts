import styled from 'styled-components'
import { Variables } from 'styles/styled/app/Variables'
import { fontSize } from 'constants/index'
import { FIELD_LABEL_WEIGHT } from 'constants/customField'

const ScheduleBlockContainer = styled.div`
  border-radius: 8px;
  background-color: ${Variables.colorWhite};
  margin-bottom: 2.6rem;
  .title {
    width: 80%;
    height: 6.5rem;
    margin-bottom: 1.1rem;
    font-size: ${fontSize.LARGE};
    font-weight: ${FIELD_LABEL_WEIGHT.bold};
    color: ${Variables.colorPrimary};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    padding: 1.7rem;
  }
  .content {
    font-size: ${fontSize.MEDIUM};
    font-weight: ${FIELD_LABEL_WEIGHT.normal};
    color: ${Variables.colorTextCommon};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    margin-bottom: 3.5rem;
    padding: 0 1.5rem;
  }
  .btn {
    width: 2.2rem;
    height: 2rem;
    margin-left: auto;
    &-icon {
      position: relative;
      right: 0;
      top: 0;
      transform: translate(-50%, -50%);
    }
    &-more {
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 150%);
    }
  }
  .image-container {
    position: relative;
    width: 100%;
    height: 20rem;
    margin: 1.1rem auto 2rem auto;
  }
`

export { ScheduleBlockContainer }
