import React from 'react'
import { ColorResult } from 'react-color'
import CustomColorPicker from './CustomPicker'

interface ColorPickerProps {
  colorResult: ColorResult
  onChangeColorHex: (_color: string) => void
  onChangeColorResult: (_colorResult: ColorResult) => void
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  colorResult,
  onChangeColorHex,
  onChangeColorResult,
}) => {
  return (
    <CustomColorPicker
      color={colorResult}
      onChangeColorHex={onChangeColorHex}
      onChangeColorResult={onChangeColorResult}
    />
  )
}

export default ColorPicker
