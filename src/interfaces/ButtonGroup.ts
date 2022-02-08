export interface ButtonGroupItemProps {
  handleClick?: () => void
  active?: boolean
  text: string
}

export interface ButtonGroupProps {
  itemPerRow: number
  children: React.ReactNode
}
