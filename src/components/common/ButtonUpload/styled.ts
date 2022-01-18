import { ButtonUploadColor } from 'interfaces/ButtonUpload'
import styled from 'styled-components'

export interface ButtonUploadProps {
  width?: number
  height?: number
  buttonUploadColor: ButtonUploadColor
  fontSize: string
  fontWeight: number
}

const UploadContainer = styled.div<ButtonUploadProps>`
  .btn {
    width: ${({ width }) => `${width}px`};
    height: ${({ height }) => `${height}px`};
    margin: 25px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
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
