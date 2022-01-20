import React from 'react'

export interface ButtonColor {
  BGCOLOR: string
  COLOR: string
  BORDER: string
}

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  title: string
}
