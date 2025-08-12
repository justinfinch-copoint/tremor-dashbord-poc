import {
  RiHome2Line,
  RiLineChartLine,
  RiTeamLine,
  RiFileListLine,
  RiBarChartBoxLine,
  RiMoneyDollarCircleLine,
  RiPieChartLine,
  RiCloudLine,
  RiFolderChartLine,
  RiAlertLine,
} from "@remixicon/react"
import { RemixiconComponentType } from "@remixicon/react"

export type NavigationItem = {
  name: string
  href: string
  icon: RemixiconComponentType
  badge?: string
}

export type DashboardShortcut = {
  name: string
  href: string
  icon: RemixiconComponentType
}

export type Dashboard = {
  id: string
  name: string
  description: string
  initials: string
  color: string
  icon: RemixiconComponentType
  navigation: NavigationItem[]
  shortcuts?: DashboardShortcut[]
  defaultPage: string
}

export const dashboards: Dashboard[] = [
  {
    id: "presidents",
    name: "President's Dashboard",
    description: "Executive overview and company performance metrics",
    initials: "PD",
    color: "bg-indigo-600 dark:bg-indigo-500",
    icon: RiBarChartBoxLine,
    defaultPage: "/presidents/overview",
    navigation: [
      {
        name: "Overview",
        href: "/presidents/overview",
        icon: RiHome2Line,
      },
    ],
    shortcuts: [],
  },
  {
    id: "finops",
    name: "FinOps Dashboard",
    description: "Financial operations and cost management",
    initials: "FO",
    color: "bg-emerald-600 dark:bg-emerald-500",
    icon: RiMoneyDollarCircleLine,
    defaultPage: "/finops/overview",
    navigation: [
      {
        name: "Overview",
        href: "/finops/overview",
        icon: RiHome2Line,
      },
    ],
    shortcuts: [],
  },
]

export function getDashboardById(id: string): Dashboard | undefined {
  return dashboards.find(dashboard => dashboard.id === id)
}

export function getDashboardByPath(pathname: string): Dashboard | undefined {
  // For static routes like /presidents/overview, /finops/budget, etc.
  const segments = pathname.split('/').filter(Boolean)
  if (segments.length === 0) return undefined
  
  const dashboardId = segments[0]
  
  // Only return dashboard if the path is actually a dashboard route (not settings)
  if (dashboardId === 'settings') return undefined
  
  return getDashboardById(dashboardId)
}

export function getCurrentDashboardFromPath(pathname: string): Dashboard {
  const dashboard = getDashboardByPath(pathname)
  return dashboard || defaultDashboard
}

export function isValidDashboard(id: string): boolean {
  return dashboards.some(dashboard => dashboard.id === id)
}

export const defaultDashboard = dashboards[0]