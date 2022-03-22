import styled from 'styled-components'
import { FONT_SIZES } from '@constants'
import { Variables } from '../app/Variables'

const ChartContainer = styled.div`
  .title {
    width: fit-content;
    font-size: ${FONT_SIZES.large};
    margin: 1.8rem auto 2.7rem auto;
    font-weight: ${Variables.fontWeightNormal};
  }
  .note {
    width: fit-content;
    font-size: ${FONT_SIZES.small};
    font-weight: ${Variables.fontWeightBold};
    text-align: justify;
    margin: auto;
  }
`

export { ChartContainer }
