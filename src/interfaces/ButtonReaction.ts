export interface ButtonReactionTheme {
  src: string
  activeSrc: string
}

export interface ButtonReactionProps extends React.ComponentPropsWithoutRef<'button'> {
  theme: ButtonReactionTheme
  active?: boolean
  position?: string
  top?: string
  left?: string
  right?: string
  bottom?: string
  transform?: string
  margin?: string
  padding?: string
}
