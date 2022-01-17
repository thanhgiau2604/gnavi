import React from 'react'
import { ButtonUploadProps } from 'interfaces/ButtonUpload'
import { UploadContainer } from './styled'

const ButtonUpload: React.FC<ButtonUploadProps> = ({
  width,
  height,
  color,
  fontSize,
  fontWeight,
  title,
}) => {
  const fileChangedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {}

  return (
    <UploadContainer
      width={width}
      height={height}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      <input
        id="upload-file"
        type="file"
        accept="image/*"
        hidden
        multiple={false}
        onChange={fileChangedHandler}
      />
      <label htmlFor="upload-file">
        <div className="btn btn-upload">{title}</div>
      </label>
    </UploadContainer>
  )
}

export default ButtonUpload
