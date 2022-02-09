import React from 'react'
import { ButtonUploadProps } from 'interfaces/ButtonUpload'
import { BUTTON_UPLOAD_COLORS, FONT_SIZES } from '@constants'
import { UploadContainer } from './styled'

const ButtonUpload: React.FC<ButtonUploadProps> = ({ title, ...rest }) => {
  const fileChangedHandler = () => {}
  const { buttonUploadColor, fontWeight, _fontSize } = rest
  return (
    <UploadContainer
      buttonUploadColor={buttonUploadColor}
      fontSize={_fontSize}
      fontWeight={fontWeight}
      {...rest}
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

ButtonUpload.defaultProps = {
  buttonUploadColor: BUTTON_UPLOAD_COLORS.style01,
  fontWeight: 400,
  _fontSize: FONT_SIZES.medium,
}

export default ButtonUpload
