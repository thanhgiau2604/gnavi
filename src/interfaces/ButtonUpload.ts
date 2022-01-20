export interface ButtonUploadColor {
  BGCOLOR: string
  COLOR: string
  BORDER: string
}

export interface ButtonUploadProps {
  buttonUploadColor?: ButtonUploadColor
  _fontSize?: string
  fontWeight?: number
  title: string
}
