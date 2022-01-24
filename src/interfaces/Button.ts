import React from 'react'

export interface ButtonColor {
  BGCOLOR: string
  COLOR: string
  BORDER: string
}

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  width?: number | string
  height?: number | string
  radius?: number
  buttonColor?: ButtonColor
  fontWeight?: number
  _fontSize?: string
  title: string
}
