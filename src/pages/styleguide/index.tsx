import Button from 'components/common/Button'
import { buttonColors, buttonUploadColors, fontSize } from '../../constants'
import React from 'react'
import ButtonUpload from 'components/common/ButtonUpload'

const StyleGuide = () => {
  return (
    <div className="styleGuide-container">
      <Button
        radius={4}
        buttonColor={buttonColors.STYLE01}
        fontSize={fontSize.LARGE}
        fontWeight={700}
        title="編集する"
      />
      <ButtonUpload
        buttonUploadColor={buttonUploadColors.STYLE02}
        fontSize={fontSize.LARGE}
        fontWeight={700}
        title="編集する"
      />
    </div>
  )
}

export default StyleGuide
