import styled from 'styled-components'
import { Variables } from 'styles/styled/app/Variables'

interface HeaderProps {
  shadow?: boolean
}

const HeaderContainer = styled.header<HeaderProps>`
  width: 100%;
  height: 48px;
  padding: 0 5px;
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
  }

  .authen-btn {
    margin-left: auto;
    display: flex;
    gap: 0 11px;
  }
`

const HeaderTitle = styled.h1`
  font-family: ${Variables.fontSecondary};
  font-size: 16px;
  font-weight: 700;
  color: inherit;
  margin: 0 auto;
`

export { HeaderContainer, HeaderTitle }
