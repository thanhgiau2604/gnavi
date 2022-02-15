/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import dynamic from 'next/dynamic'
import { CustomPicker } from 'react-color'
import { Saturation, Hue } from 'react-color/lib/components/common'
import { EditableInputProps } from 'react-color/lib/components/common/EditableInput'
import { InitColorResult } from '@constants'
import Flex from 'styles/styled/layout/FlexLayout'
import { ColorPickerContainer } from './styled'

import { PointerSaturation, PointerHue } from './Pointer'

const EditableInput = dynamic<EditableInputProps>(
  () => import('react-color/lib/components/common').then((mod) => mod.EditableInput),
  { ssr: false }
)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ColorPicker: React.FC<any> = (props) => {
  const { hex, handleChangeColor, handleChangeColorResult } = props

  React.useEffect(() => {
    handleChangeColor(hex ?? InitColorResult.hex)
  }, [hex])

  return (
    <ColorPickerContainer colorPreview={hex}>
      <div className="saturation">
        <Saturation {...props} pointer={PointerSaturation} onChange={handleChangeColorResult} />
      </div>

      <Flex alignItems="center" margin="0 15px">
        <div className="preview">
          <div />
        </div>
        <div className="hue">
          <Hue {...props} pointer={PointerHue} onChange={handleChangeColorResult} />
        </div>
      </Flex>

      <div className="editable-input">
        <div className="editable-input-container">
          <EditableInput value={hex} onChange={handleChangeColorResult} />
          <p>Hex</p>
        </div>
        <div>
          <button type="button">
            <img src="/icons/icon-button-up.svg" alt="" />
          </button>
          <button type="button">
            <img src="/icons/icon-button-dow.svg" alt="" />
          </button>
        </div>
      </div>
    </ColorPickerContainer>
  )
}

export default CustomPicker(ColorPicker)
