import { ColorResult } from 'react-color'

export const onChangeColorHex =
  (setColorHex: React.Dispatch<React.SetStateAction<string>>) => (_color: string) =>
    setColorHex(_color)

export const onChangeColorResult =
  (setColorResult: React.Dispatch<React.SetStateAction<ColorResult>>) =>
  (_colorResult: ColorResult) =>
    setColorResult(_colorResult)
