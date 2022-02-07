import styled from 'styled-components'
import { Variables } from 'styles/styled/app/Variables'

const HomeMenuContainer = styled.div`
  .menu-group {
    &-item {
      padding-top: 2.5rem;
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
  .flex-container {
    height: 4.8rem;
  }
  a {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${Variables.colorTextCommon};
  }
`

export { HomeMenuContainer, MenuItemContainer }
