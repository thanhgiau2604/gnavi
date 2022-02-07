import styled from 'styled-components'
import { Variables } from 'styles/styled/app/Variables'

const HomeContainer = styled.div`
  .home-main {
    background-color: ${Variables.color6};
    padding-bottom: 3rem;
  }

  .home-info {
    margin-bottom: 2.5rem;
    height: 13.3rem;
    &-wrapper {
      background: ${Variables.colorWhite};
    }

    &-name {
      margin-left: 3rem;
      a {
        display: inline-block;
        margin-top: 1rem;
        font-weight: 400;
      }
    }
  }

  .home-logout {
    background: ${Variables.colorWhite};
    font-size: 1.6rem;
    margin-top: 2rem;
    a {
      color: ${Variables.colorTextCommon};
      font-weight: 400;
      height: 4.8rem;
      padding-top: 1.3rem;
    }
  }
`

export { HomeContainer }
