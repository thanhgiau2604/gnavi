import type { NextPage } from 'next'
import React from 'react'
import { ColorResult } from 'react-color'
import ColorPicker from 'components/ColorPicker'
import { InitColorResult } from '@constants'

const DemoPage: NextPage = () => {
  const [color, setColor] = React.useState<string>('#fff')
  console.log('color: ', color)
  const handleChangeColor = (_color: string) => setColor(_color)

  const [colorResult, setColorResult] = React.useState<ColorResult>(InitColorResult)
  const handleChangeColorResult = (_colorResult: ColorResult) => setColorResult(_colorResult)

  return (
    <ColorPicker
      color={colorResult}
      handleChangeColor={handleChangeColor}
      handleChangeColorResult={handleChangeColorResult}
    />
  )
}

export default DemoPage
