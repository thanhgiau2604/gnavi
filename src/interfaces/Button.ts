import React from 'react'

export interface ButtonColor {
  BGCOLOR: string
  COLOR: string
  BORDER: string
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

export interface ItemGroupButtonProps {
  borderFull?: boolean
  borderTop?: boolean
  borderRight?: boolean
  borderBottom?: boolean
  borderLeft?: boolean
  active?: boolean
}
