import styled from 'styled-components'

export interface ButtonUploadProps {
  width: number
  height: number
  color: string
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
    color: ${({ color }) => (color === 'green' && '#fff') || (color === 'gradient' && '#000000')};

    &-upload {
      background: ${({ color }) =>
        (color === 'green' && '#59B7C5') ||
        (color === 'gradient' && 'linear-gradient(180deg, #FFFFFF 0%, #EEEEEE 100%);')};
      border: ${({ color }) =>
        (color === 'green' && '1px solid #2ca2ab') ||
        (color === 'gradient' && '1px solid #CCCCCC')};
      box-sizing: border-box;
      border-radius: 4px;
      font-size: ${({ fontSize }) =>
        (fontSize === 'x-small' && '12px') ||
        (fontSize === 'small' && '14px') ||
        (fontSize === 'medium' ? '16px' : '18px')};
      font-weight: ${({ fontWeight }) => fontWeight};
      letter-spacing: 1.5px;
    }
  }
`

export { UploadContainer }
