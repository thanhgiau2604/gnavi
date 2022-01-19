import styled from 'styled-components'
import { ButtonUploadColor } from 'interfaces/ButtonUpload'

export interface ButtonUploadProps {
  buttonUploadColor: ButtonUploadColor
  fontSize: string
  fontWeight: number
}

const UploadContainer = styled.div<ButtonUploadProps>`
  width: 100%;
  .btn {
    margin: 1.8rem auto auto auto;
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
