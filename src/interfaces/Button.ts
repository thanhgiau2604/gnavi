export interface ButtonColor {
  BGCOLOR: string
  COLOR: string
  BORDER: string
}

export interface ButtonProps {
  handleClick?: () => any
  radius: number
  buttonColor: ButtonColor
  fontWeight: number
  fontSize: string
  title: string
}
