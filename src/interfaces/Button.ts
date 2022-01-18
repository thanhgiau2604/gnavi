export interface ButtonColor {
  BGCOLOR: string
  COLOR: string
  BORDER: string
}

export interface ButtonProps {
  width?: number
  height?: number
  handleClick?: Function
  radius: number
  buttonColor: ButtonColor
  fontWeight: number
  fontSize: string
  title: string
}
