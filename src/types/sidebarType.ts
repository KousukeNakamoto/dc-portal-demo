export type SideVarType = {
  navigationItems: NavigationItem[]
}

export type NavigationItem = {
  id: number
  label: string
  url: string
  subItem?: NavigationItem[]
}
