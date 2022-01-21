import React from 'react'

export interface ButtonColor {
  BGCOLOR: string
  COLOR: string
  BORDER: string
}

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  radius?: number
  buttonColor?: ButtonColor
  fontWeight?: number
  _fontSize?: string
  title: string
}
