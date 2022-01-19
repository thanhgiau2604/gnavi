import { fontSize } from 'constants/index'
import styled from 'styled-components'

const ChartContainer = styled.div`
  .title {
    width: fit-content;
    font-size: ${fontSize.LARGE};
    margin: 1.8rem auto 2.7rem auto;
    font-weight: 400;
  }
  .note {
    width: fit-content;
    font-size: ${fontSize.SMALL};
    font-weight: 700;
    text-align: justify;
    margin: auto;
  }
`

export { ChartContainer }
