interface PullDownMenuProps {
  hr?: boolean
  margin?: string
  title: string
  children: React.ReactNode
}

interface PullDownMenuItemProps {
  tag: string
  info: string | number
}

export type { PullDownMenuProps, PullDownMenuItemProps }
