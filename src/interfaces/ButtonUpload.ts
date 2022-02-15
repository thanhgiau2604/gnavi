export interface ButtonUploadColor {
  bgColor: string
  color: string
  border: string
}

export interface ButtonUploadProps {
  title: string
  buttonUploadColor?: ButtonUploadColor
  _fontSize?: string
  fontWeight?: number
  margin?: string
  images?: File[]
  setImages?: (field: string, value: any) => void
}
