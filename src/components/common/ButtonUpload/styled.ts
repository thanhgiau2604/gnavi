import styled from 'styled-components'
import { ButtonUploadColor } from 'interfaces/ButtonUpload'

export interface ButtonUploadProps {
  width?: number
  height?: number
  buttonUploadColor: ButtonUploadColor
  fontSize: string
  fontWeight: number
}

const UploadContainer = styled.div<ButtonUploadProps>`
  font-size: 62.5%;
  width: fit-content;
  .btn {
    ${({ width }) => width && `width: ${width}px`};
    ${({ height }) => height && `width: ${height}px`};
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 15px;
    cursor: pointer;
    color: ${({ buttonUploadColor }) => buttonUploadColor.COLOR};

    &-upload {
      background: ${({ buttonUploadColor }) => buttonUploadColor.BGCOLOR};
      border: ${({ buttonUploadColor }) => buttonUploadColor.BORDER};
      box-sizing: border-box;
      border-radius: 4px;
      font-size: ${({ fontSize }) => fontSize};
      font-weight: ${({ fontWeight }) => fontWeight};
      letter-spacing: 1.5px;
    }
  }
`

export { UploadContainer }
