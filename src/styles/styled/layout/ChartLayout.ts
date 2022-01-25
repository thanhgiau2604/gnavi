import { FONT_SIZES } from 'constants/index'
import styled from 'styled-components'

const ChartContainer = styled.div`
  .title {
    width: fit-content;
    font-size: ${FONT_SIZES.large};
    margin: 1.8rem auto 2.7rem auto;
    font-weight: 400;
  }
  .note {
    width: fit-content;
    font-size: ${FONT_SIZES.small};
    font-weight: 700;
    text-align: justify;
    margin: auto;
  }
`

export { ChartContainer }
