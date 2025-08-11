"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { Dashboard, dashboards, defaultDashboard, getDashboardById, getCurrentDashboardFromPath } from "@/lib/dashboards.config"
import { usePathname, useRouter } from "next/navigation"

type DashboardContextType = {
  currentDashboard: Dashboard
  setCurrentDashboard: (dashboard: Dashboard) => void
  availableDashboards: Dashboard[]
  switchDashboard: (dashboardId: string) => void
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined)

const DASHBOARD_STORAGE_KEY = "selected-dashboard"

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  
  // Start with the dashboard from the current path for consistent server/client rendering
  const [currentDashboard, setCurrentDashboardState] = useState<Dashboard>(() => {
    return getCurrentDashboardFromPath(pathname)
  })

  // Load from localStorage after initial render to avoid hydration mismatch
  useEffect(() => {
    const stored = localStorage.getItem(DASHBOARD_STORAGE_KEY)
    if (stored) {
      const dashboard = getDashboardById(stored)
      if (dashboard && pathname.startsWith('/settings')) {
        // Only restore from localStorage if we're on settings page
        setCurrentDashboardState(dashboard)
      }
    }
  }, [])

  useEffect(() => {
    // Only update dashboard state if we're not on settings page
    if (!pathname.startsWith('/settings')) {
      const dashboardFromPath = getCurrentDashboardFromPath(pathname)
      if (dashboardFromPath.id !== currentDashboard.id) {
        setCurrentDashboardState(dashboardFromPath)
        localStorage.setItem(DASHBOARD_STORAGE_KEY, dashboardFromPath.id)
      }
    }
  }, [pathname, currentDashboard.id])

  const setCurrentDashboard = (dashboard: Dashboard) => {
    setCurrentDashboardState(dashboard)
    localStorage.setItem(DASHBOARD_STORAGE_KEY, dashboard.id)
    router.push(dashboard.defaultPage)
  }

  const switchDashboard = (dashboardId: string) => {
    const dashboard = getDashboardById(dashboardId)
    if (dashboard) {
      setCurrentDashboard(dashboard)
    }
  }

  return (
    <DashboardContext.Provider
      value={{
        currentDashboard,
        setCurrentDashboard,
        availableDashboards: dashboards,
        switchDashboard,
      }}
    >
      {children}
    </DashboardContext.Provider>
  )
}

export function useDashboard() {
  const context = useContext(DashboardContext)
  if (context === undefined) {
    throw new Error("useDashboard must be used within a DashboardProvider")
  }
  return context
}