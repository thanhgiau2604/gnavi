interface ListItemStyleProps {
  fontSize?: number
  height?: number
  textColor?: string
  borderTop?: boolean
  borderBottom?: boolean
}

interface ListItemProps extends ListItemStyleProps {
  text: string
  iconWidth?: number
  iconHeight?: number
  handleClick?: () => void
}

export type { ListItemProps, ListItemStyleProps }