interface PullDownMeunProps {
  hr?: boolean
  margin?: string
  title: string
  children: React.ReactNode
}

interface PullDownMeunItemProps {
  tag: string
  info: string | number
}

export type { PullDownMeunProps, PullDownMeunItemProps }
