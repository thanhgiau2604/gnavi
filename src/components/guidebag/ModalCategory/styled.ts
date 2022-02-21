import styled from 'styled-components'
import { FONT_SIZES } from '@constants'

const ModalCategoryContainer = styled.div`
  .category-selected {
    font-size: ${FONT_SIZES.medium};
    padding-top: 2rem;
  }

  .category-selection-cancel {
    margin: 2.8rem 0;
    display: block;
    text-align: center;
    font-size: ${FONT_SIZES.medium};
  }
`

export { ModalCategoryContainer }
