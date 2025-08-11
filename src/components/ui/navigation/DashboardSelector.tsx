"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/Dropdown"
import { cx, focusInput } from "@/lib/utils"
import { RiArrowRightSLine, RiExpandUpDownLine } from "@remixicon/react"
import React from "react"
import { useDashboard } from "@/contexts/DashboardContext"

export const DashboardSelectorDesktop = () => {
  const { currentDashboard, availableDashboards, switchDashboard } = useDashboard()
  const [dropdownOpen, setDropdownOpen] = React.useState(false)

  const handleDashboardSelect = (dashboardId: string) => {
    switchDashboard(dashboardId)
    setDropdownOpen(false)
  }

  return (
    <DropdownMenu
      open={dropdownOpen}
      onOpenChange={setDropdownOpen}
      modal={false}
    >
      <DropdownMenuTrigger asChild>
        <button
          className={cx(
            "flex w-full items-center gap-x-2.5 rounded-md border border-gray-300 bg-white p-2 text-sm shadow-sm transition-all hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-950 hover:dark:bg-gray-900",
            focusInput,
          )}
        >
          <span
            className={cx(
              currentDashboard.color,
              "flex aspect-square size-8 items-center justify-center rounded p-2 text-xs font-medium text-white"
            )}
            aria-hidden="true"
          >
            {currentDashboard.initials}
          </span>
          <div className="flex w-full items-center justify-between gap-x-4 truncate">
            <div className="truncate">
              <p className="truncate whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-50">
                {currentDashboard.name}
              </p>
              <p className="whitespace-nowrap text-left text-xs text-gray-700 dark:text-gray-300">
                {currentDashboard.description}
              </p>
            </div>
            <RiExpandUpDownLine
              className="size-5 shrink-0 text-gray-500"
              aria-hidden="true"
            />
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>
            Available Dashboards ({availableDashboards.length})
          </DropdownMenuLabel>
          {availableDashboards.map((dashboard) => (
            <DropdownMenuItem 
              key={dashboard.id}
              onClick={() => handleDashboardSelect(dashboard.id)}
              className={cx(
                dashboard.id === currentDashboard.id && "bg-gray-100 dark:bg-gray-900"
              )}
            >
              <div className="flex w-full items-center gap-x-2.5">
                <span
                  className={cx(
                    dashboard.color,
                    "flex aspect-square size-8 items-center justify-center rounded p-2 text-xs font-medium text-white",
                  )}
                  aria-hidden="true"
                >
                  {dashboard.initials}
                </span>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                    {dashboard.name}
                  </p>
                  <p className="text-xs text-gray-700 dark:text-gray-400">
                    {dashboard.description}
                  </p>
                </div>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export const DashboardSelectorMobile = () => {
  const { currentDashboard, availableDashboards, switchDashboard } = useDashboard()
  const [dropdownOpen, setDropdownOpen] = React.useState(false)

  const handleDashboardSelect = (dashboardId: string) => {
    switchDashboard(dashboardId)
    setDropdownOpen(false)
  }

  return (
    <DropdownMenu
      open={dropdownOpen}
      onOpenChange={setDropdownOpen}
      modal={false}
    >
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-x-1.5 rounded-md p-2 hover:bg-gray-100 focus:outline-none hover:dark:bg-gray-900">
          <span
            className={cx(
              currentDashboard.color,
              "flex aspect-square size-7 items-center justify-center rounded p-2 text-xs font-medium text-white"
            )}
            aria-hidden="true"
          >
            {currentDashboard.initials}
          </span>
          <RiArrowRightSLine
            className="size-4 shrink-0 text-gray-500"
            aria-hidden="true"
          />
          <div className="flex w-full items-center justify-between gap-x-3 truncate">
            <p className="truncate whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-50">
              {currentDashboard.name}
            </p>
            <RiExpandUpDownLine
              className="size-4 shrink-0 text-gray-500"
              aria-hidden="true"
            />
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="!min-w-72"
      >
        <DropdownMenuGroup>
          <DropdownMenuLabel>
            Available Dashboards ({availableDashboards.length})
          </DropdownMenuLabel>
          {availableDashboards.map((dashboard) => (
            <DropdownMenuItem 
              key={dashboard.id}
              onClick={() => handleDashboardSelect(dashboard.id)}
              className={cx(
                dashboard.id === currentDashboard.id && "bg-gray-100 dark:bg-gray-900"
              )}
            >
              <div className="flex w-full items-center gap-x-2.5">
                <span
                  className={cx(
                    dashboard.color,
                    "flex size-8 items-center justify-center rounded p-2 text-xs font-medium text-white",
                  )}
                  aria-hidden="true"
                >
                  {dashboard.initials}
                </span>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                    {dashboard.name}
                  </p>
                  <p className="text-xs text-gray-700 dark:text-gray-300">
                    {dashboard.description}
                  </p>
                </div>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}