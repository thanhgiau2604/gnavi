import styled, { css } from 'styled-components'
import { Variables } from 'styles/styled/app/Variables'
import { fontSize } from 'constants/index'
import { CheckboxTheme } from 'interfaces/CustomField'
import { FIELD_LABEL_WEIGHT } from 'constants/field'
import { FieldStyleProps } from '../styled'

interface FieldCheckboxStyleProps extends FieldStyleProps {
  cbTheme: CheckboxTheme
}

const FieldCheckboxContainer = styled.div<FieldCheckboxStyleProps>`
  padding-bottom: ${({ pb }) => (pb ? `calc( ${pb}rem / 10)` : `2.5rem`)};

  .check-mark {
    width: ${({ width }) => (width ? `calc( ${width}rem / 10)` : `2.4rem`)};
    height: ${({ height }) => (height ? `calc( ${height}rem / 10)` : `2.4rem`)};
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${Variables.colorWhite};
    border: ${({ showError }) =>
      showError ? `0.2rem solid ${Variables.colorSecondary}` : `0.2rem solid ${Variables.color3}`};
    border-radius: 4px;
    &:after {
      content: '';
      position: absolute;
      display: none;

      left: 0.7rem;
      bottom: 0.3rem;
      width: ${({ cbTheme }) => cbTheme.checkedWidth};
      height: ${({ cbTheme }) => cbTheme.checkedHeight};
      border-style: solid;
      border-color: ${({ cbTheme }) => cbTheme.checkedColor};
      border-width: ${({ cbTheme }) => `0px ${cbTheme.checkedWeight} ${cbTheme.checkedWeight} 0px`};
      transform: rotate(45deg);
    }
  }
`
const FieldCheckboxLabel = styled.label<FieldCheckboxStyleProps>`
  position: relative;
  padding-left: 3.8rem;
  cursor: pointer;
  font-size: ${fontSize.MEDIUM};
  user-select: none;
  height: ${({ height }) => (height ? `calc( ${height}rem / 10)` : `2.4rem`)};
  display: flex;
  align-items: center;
  width: fit-content;
  font-weight: ${({ lbweight }) => lbweight && FIELD_LABEL_WEIGHT[lbweight]};

  input[type='checkbox'] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    &:checked ~ .check-mark:after {
      display: block;
    }
    &:checked ~ .check-mark {
      border: ${({ cbTheme }) => cbTheme.border};
      ${({ cbTheme }) => {
        if (cbTheme.checkedBg === 'check_circle') {
          return css`
            background-image: url('images/check_circle.png');
            background-repeat: no-repeat;
            background-size: cover;
          `
        }
        return cbTheme.checkedBg
      }}
    }
  }
`

export { FieldCheckboxContainer, FieldCheckboxLabel }
