import { FONT_SIZES } from '@constants'
import styled from 'styled-components'
import { Variables } from 'styles/styled/app/Variables'

const CategorySelectContainer = styled.div`
  padding-bottom: 2.5rem;
  label {
    font-weight: ${Variables.fontWeightBold};
    font-size: ${FONT_SIZES.medium};
  }
`

export { CategorySelectContainer }
