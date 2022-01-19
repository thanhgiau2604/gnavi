import React from 'react'
import { buttonColors, buttonUploadColors, fontSize } from 'constants/index'
import Button from 'components/common/Button'
import ButtonUpload from 'components/common/ButtonUpload'

const StyleGuide = () => {
  return (
    <div className="styleGuide-container">
      <Button
        radius={4}
        buttonColor={buttonColors.STYLE01}
        fontSize={fontSize.SMALL}
        fontWeight={700}
        title="上記内容で質問する"
      />
      <Button
        radius={4}
        buttonColor={buttonColors.STYLE02}
        fontSize={fontSize.SMALL}
        fontWeight={700}
        title="上記内容で質問する"
      />
      <Button
        radius={4}
        buttonColor={buttonColors.STYLE03}
        fontSize={fontSize.SMALL}
        fontWeight={700}
        title="上記内容で質問する"
      />
      <Button
        radius={4}
        buttonColor={buttonColors.STYLE04}
        fontSize={fontSize.SMALL}
        fontWeight={700}
        title="上記内容で質問する"
      />
      <ButtonUpload
        buttonUploadColor={buttonUploadColors.STYLE01}
        fontSize={fontSize.SMALL}
        fontWeight={400}
        title="画像を選択する"
      />
      <ButtonUpload
        buttonUploadColor={buttonUploadColors.STYLE02}
        fontSize={fontSize.SMALL}
        fontWeight={400}
        title="画像を選択する"
      />
    </div>
  )
}

export default StyleGuide
