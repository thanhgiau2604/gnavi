import React from 'react'
import { ButtonUploadProps } from 'interfaces/ButtonUpload'
import { buttonUploadColors, fontSize } from 'constants/index'
import { UploadContainer } from './styled'

const ButtonUpload: React.FC<ButtonUploadProps> = ({ title, ...rest }) => {
  const fileChangedHandler = () => {}
  const { buttonUploadColor, fontWeight, _fontSize } = rest
  return (
    <UploadContainer
      buttonUploadColor={buttonUploadColor}
      fontSize={_fontSize}
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

ButtonUpload.defaultProps = {
  buttonUploadColor: buttonUploadColors.STYLE01,
  fontWeight: 400,
  _fontSize: fontSize.MEDIUM,
}

export default ButtonUpload
