import styled from 'styled-components'
import { Variables } from 'styles/styled/app/Variables'
import { fontSize } from 'constants/index'

interface FieldStyleProps {
  width?: number
  height?: number
  pb?: number | null // padding-bottom (if null --> common value)
  lbWeight?: 'bold' | 'normal'
  txtAlign?: 'left' | 'right' | 'center'
  showError: boolean
}

const FieldContainer = styled.div<FieldStyleProps>`
  display: flex;
  flex-direction: column;
  padding-bottom: ${({ pb }) => (pb ? `calc( ${pb}rem / 10)` : `2.5rem`)};
  input,
  textarea,
  select {
    width: ${({ width }) => (width ? `calc( ${width}rem / 10)` : `32rem`)};
    height: ${({ height }) => (height ? `calc( ${height}rem / 10)` : `4.8rem`)};
    border: ${({ showError }) =>
      showError ? `1px solid ${Variables.colorSecondary}` : `1px solid ${Variables.color3}`};
    background-color: ${Variables.colorWhite};
    padding: 1.3rem;
    color: ${Variables.colorTextCommon};
    border-radius: 4px;
    font-size: ${fontSize.MEDIUM};
    line-height: calc(23 / ${fontSize.MEDIUM});
    ${({ txtAlign }) => txtAlign && `text-align: ${txtAlign}`};
  }

  textarea {
    resize: none;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url('/images/arrow_down.png');
    background-position: 95% 50%;
    background-repeat: no-repeat;
    background-size: 1.2rem 0.74rem;
  }

  label {
    font-weight: ${({ lbWeight }) => (lbWeight === 'normal' ? 400 : 700)};
    font-size: ${fontSize.MEDIUM};
    padding-bottom: 1.5rem;
  }
`

const FieldLabel = styled.div`
  display: flex;
  .require-mark {
    color: ${Variables.colorSecondary};
    border: 1px solid ${Variables.colorSecondary};
    border-radius: 2px;
    padding: 0.3rem;
    height: fit-content;
    margin-left: 0.5rem;
    font-size: 1.2rem;
  }
`

export { FieldContainer, FieldLabel }
