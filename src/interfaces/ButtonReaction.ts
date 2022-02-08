export interface ButtonReactionTheme {
  src: string
  activeSrc: string
}

export interface ButtonReactionProps {
  id: string | number
  theme: ButtonReactionTheme
  position?: string
  top?: string
  left?: string
  right?: string
  bottom?: string
  transform?: string
  margin?: string
  padding?: string
}
