import React from 'react'
import { ButtonUploadProps } from 'interfaces/ButtonUpload'
import { UploadContainer } from './styled'

const ButtonUpload: React.FC<ButtonUploadProps> = ({
  buttonUploadColor,
  fontSize,
  fontWeight,
  title,
}) => {
  const fileChangedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {}

  return (
    <UploadContainer
      buttonUploadColor={buttonUploadColor}
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
