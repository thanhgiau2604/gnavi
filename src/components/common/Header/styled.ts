import styled from 'styled-components'
import { FONT_SIZES } from '@constants'
import { Variables } from 'styles/styled/app/Variables'

interface HeaderProps {
  shadow?: boolean
}

const HeaderContainer = styled.header<HeaderProps>`
  width: 100%;
  height: 4.8rem;
  padding: 0 0.5rem;
  background-color: ${Variables.colorWhite};
  display: flex;
  align-items: center;
  position: relative;
  ${({ shadow }) =>
    shadow
      ? `box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);`
      : `border-bottom: 1px solid ${Variables.color3};`}
  .back-btn {
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    &-title {
      font-size: ${FONT_SIZES.small};
      color: ${Variables.colorPrimary};
      font-weight: ${Variables.fontWeightNormal};
    }
  }
  .authen-btn {
    margin-left: auto;
    display: flex;
    button:not(:first-child) {
      margin-left: 1.1rem;
    }
  }
`

const HeaderTitle = styled.h1`
  font-family: ${Variables.fontSecondary};
  font-size: 1.6rem;
  font-weight: ${Variables.fontWeightBold};
  color: inherit;
  margin: 0 auto;
`

export { HeaderContainer, HeaderTitle }
