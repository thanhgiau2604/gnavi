export interface ButtonUploadColor {
  BGCOLOR: string
  COLOR: string
  BORDER: string
}

export interface ButtonUploadProps {
  width?: number
  height?: number
  buttonUploadColor: ButtonUploadColor
  fontSize: string
  fontWeight: number
  title: string
}
