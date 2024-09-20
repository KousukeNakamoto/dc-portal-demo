import { Sidebar } from '@/components/Sidebar/Sidebar'
import { NavigationItem } from '@/types/sidebarType'
const routes: NavigationItem[] = [
  { id: 1, label: 'Home', url: '/home' },
  {
    id: 2,
    label: 'Sub',
    url: '/home',
    subItem: [
      {
        id: 3,
        label: 'sub',
        url: '/home',
      },
    ],
  },
]
export default function SkillSheetLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen">
      <Sidebar navigationItems={routes} />
      {children}
    </div>
  )
}
