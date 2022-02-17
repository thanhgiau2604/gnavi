import { FONT_SIZES } from '@constants'
import styled from 'styled-components'

const CategorySelectContainer = styled.div`
  padding-bottom: 2.5rem;
  label {
    font-weight: 700;
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
