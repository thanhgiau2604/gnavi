import { FONT_SIZES } from '@constants'
import styled from 'styled-components'
import { Variables } from 'styles/styled/app/Variables'

const CategorySelectContainer = styled.div`
  padding-bottom: 2.5rem;
  label {
    font-weight: ${Variables.fontWeightBold};
    font-size: ${FONT_SIZES.medium};
  }

  .category-selected {
    font-size: ${FONT_SIZES.medium};
    padding-top: 2rem;
  }

  .category-selection-cancel {
    margin-bottom: 2rem;
    display: block;
    text-align: center;
  }
`

export { CategorySelectContainer }
