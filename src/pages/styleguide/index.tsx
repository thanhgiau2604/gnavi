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
        fontSize={fontSize.XSMALL}
        fontWeight={700}
        title="編集する"
      />
      <ButtonUpload
        width={320}
        buttonUploadColor={buttonUploadColors.STYLE02}
        fontSize={fontSize.SMALL}
        fontWeight={400}
        title="画像を選択する"
      />
    </div>
  )
}

export default StyleGuide
