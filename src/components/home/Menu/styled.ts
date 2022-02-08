import styled from 'styled-components'
import { Variables } from 'styles/styled/app/Variables'

const HomeMenuContainer = styled.div`
  .menu-group {
    padding-top: 2.5rem;
    &-1 {
      padding-top: 3.2rem;
    }

    &-2 {
      padding-top: 4.1rem;
    }

    &-3 {
      padding-top: 3.2rem;
    }

    &-title {
      padding-bottom: 0.9rem;
      font-size: 1.6rem;
    }
  }
`

const MenuItemContainer = styled.div`
  margin-top: 1px;
  background-color: ${Variables.colorWhite};
  cursor: pointer;
  .flex-container {
    height: 4.8rem;
  }
  p.menu-item-title {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${Variables.colorTextCommon};
  }
`

export { HomeMenuContainer, MenuItemContainer }
