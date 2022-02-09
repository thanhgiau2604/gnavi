import React from 'react'

export interface ButtonColor {
  bgColor: string
  color: string
  border: string
}

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  width?: number | string
  height?: number | string | 'auto'
  margin?: string
  radius?: number
  buttonColor?: ButtonColor
  fontWeight?: number
  _fontSize?: string
  title: string
}
