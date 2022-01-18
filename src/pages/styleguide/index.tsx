import Button from 'components/common/Button'
import { buttonColors, fontSize } from '../../constants'
import React from 'react'

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
    </div>
  )
}

export default StyleGuide
