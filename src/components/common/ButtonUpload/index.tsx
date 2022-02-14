import React from 'react'
import { ButtonUploadProps } from 'interfaces/ButtonUpload'
import { BUTTON_UPLOAD_COLORS, FONT_SIZES } from '@constants'
import { UploadContainer } from './styled'

const ButtonUpload: React.FC<ButtonUploadProps> = ({ title, setImages, ...rest }) => {
  const fileChangedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setImages) setImages('basic_info.images', e.currentTarget.files)
  }

  return (
    <UploadContainer {...rest}>
      <input
        id="upload-file"
        type="file"
        accept="image/*"
        hidden
        multiple
        onChange={fileChangedHandler}
      />
      <label htmlFor="upload-file">
        <div className="btn btn-upload">{title}</div>
      </label>
    </UploadContainer>
  )
}

ButtonUpload.defaultProps = {
  buttonUploadColor: BUTTON_UPLOAD_COLORS.style01,
  fontWeight: 400,
  _fontSize: FONT_SIZES.medium,
  margin: '1.8rem auto auto auto',
}

export default ButtonUpload
