import styled from 'styled-components'
import { FIELD_LABEL_WEIGHT, FONT_SIZES } from '@constants'

const HistoryLogContainer = styled.div`
  margin-top: 4.3rem;
  .title {
    text-align: center;
    font-size: ${FONT_SIZES.medium};
    margin-bottom: 2rem;
  }
  .label {
    font-size: ${FONT_SIZES.medium};
    text-align: justify;
    font-weight: ${FIELD_LABEL_WEIGHT.bold};
    margin-bottom: 2rem;
  }
`

export { HistoryLogContainer }
