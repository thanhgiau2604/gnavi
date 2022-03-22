import styled from 'styled-components'
import { FONT_SIZES } from '@constants'
import { Variables } from 'styles/styled/app/Variables'

const HomeMainSection = styled.div`
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
      margin-bottom: 0.5rem;
      h2 {
        font-size: ${FONT_SIZES.xlarge};
      }
      a {
        display: inline-block;
        margin-top: 1rem;
        font-weight: ${Variables.fontWeightNormal};
      }
    }
  }

  .home-logout {
    background: ${Variables.colorWhite};
    font-size: 1.6rem;
    margin-top: 4.1rem;
    a {
      color: ${Variables.colorTextCommon};
      font-weight: ${Variables.fontWeightNormal};
      height: 4.8rem;
      padding-top: 1.3rem;
    }
  }
`

export { HomeMainSection }
