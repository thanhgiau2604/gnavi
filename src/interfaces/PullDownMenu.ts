interface PullDownMeunProps {
  hr?: boolean
  title: string
  children: React.ReactNode
}

interface PullDownMeunItemProps {
  tag: string
  info: string | number
}

export type { PullDownMeunProps, PullDownMeunItemProps }
