import styled from 'styled-components'
import { ButtonUploadColor } from 'interfaces/ButtonUpload'

export interface ButtonUploadProps {
  buttonUploadColor?: ButtonUploadColor
  fontSize?: string
  fontWeight?: number
  margin?: string
}

const UploadContainer = styled.div<ButtonUploadProps>`
  width: 100%;
  .btn {
    margin: ${({ margin }) => margin && margin};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 15px;
    cursor: pointer;
    color: ${({ buttonUploadColor }) => buttonUploadColor && buttonUploadColor.color};
    &-upload {
      background: ${({ buttonUploadColor }) => buttonUploadColor && buttonUploadColor.bgColor};
      border: ${({ buttonUploadColor }) => buttonUploadColor && buttonUploadColor.border};
      box-sizing: border-box;
      border-radius: 4px;
      font-size: ${({ fontSize }) => fontSize};
      font-weight: ${({ fontWeight }) => fontWeight};
      letter-spacing: 1.5px;
    }
  }
`

export { UploadContainer }
