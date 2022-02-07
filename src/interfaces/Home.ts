interface MenuItemProps {
  option: string
  redirectTo: string
}

interface MenuGroup {
  label: string
  option: string[]
  redirectTo: string[]
}

export type { MenuItemProps, MenuGroup }
