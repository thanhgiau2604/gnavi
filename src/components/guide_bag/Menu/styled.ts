import { FONT_SIZES } from '@constants'
import styled from 'styled-components'
import { Variables } from 'styles/styled/app/Variables'

const MenuContainer = styled.div`
  font-size: ${FONT_SIZES.small};
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  li {
    padding: 0.6rem 0;
    border: 1px solid #cccccc;
    text-align: center;
  }

  a {
    font-weight: 400;
  }

  a.active {
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  td {
    border: 1px solid ${Variables.color3};
    text-align: center;
    padding: 0.6rem 0;
    background-color: ${Variables.colorWhite};
    &.active {
      a {
        color: ${Variables.colorBlack};
        font-weight: 700;
      }
      background-color: ${Variables.color6};
    }
  }
`

export { MenuContainer }
