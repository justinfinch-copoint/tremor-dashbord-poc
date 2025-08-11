"use client"
import { Card } from "@/components/Card"
import { Badge } from "@/components/Badge"
import { ProgressBar } from "@/components/ProgressBar"
import { LineChart } from "@/components/LineChart"

const budgetData = [
  {
    month: "Jan",
    allocated: 2800000,
    spent: 2450000,
    forecasted: 2700000,
  },
  {
    month: "Feb",
    allocated: 2800000,
    spent: 2620000,
    forecasted: 2750000,
  },
  {
    month: "Mar",
    allocated: 2800000,
    spent: 2580000,
    forecasted: 2800000,
  },
  {
    month: "Apr",
    allocated: 3000000,
    spent: 2890000,
    forecasted: 2950000,
  },
  {
    month: "May",
    allocated: 3000000,
    spent: 2920000,
    forecasted: 3000000,
  },
  {
    month: "Jun",
    allocated: 3000000,
    spent: 2780000,
    forecasted: 2900000,
  },
]

const departmentBudgets = [
  {
    name: "Engineering",
    allocated: 12500000,
    spent: 8875000,
    percentage: 71,
    status: "on-track",
  },
  {
    name: "Sales & Marketing",
    allocated: 8200000,
    spent: 5084000,
    percentage: 62,
    status: "on-track",
  },
  {
    name: "Operations",
    allocated: 6800000,
    spent: 3944000,
    percentage: 58,
    status: "on-track",
  },
  {
    name: "Customer Success",
    allocated: 3200000,
    spent: 2176000,
    percentage: 68,
    status: "on-track",
  },
  {
    name: "Human Resources",
    allocated: 2400000,
    spent: 1080000,
    percentage: 45,
    status: "under-budget",
  },
  {
    name: "Finance",
    allocated: 1800000,
    spent: 936000,
    percentage: 52,
    status: "on-track",
  },
]

export default function BudgetPage() {

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
          Budget Analysis
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Monitor and analyze budget allocation and spending across departments
        </p>
      </div>

      <div id="alerts" className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-900 dark:bg-yellow-950">
        <div className="flex items-start gap-3">
          <Badge variant="warning">Alert</Badge>
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
              Q3 Budget Review Required
            </p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Engineering department is trending 8% over budget for Q3. Review and adjustment recommended.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <div className="pb-2">
            <p>Annual Budget</p>
          </div>
          <div>
            <p className="text-2xl font-bold">$34.9M</p>
            <p className="text-xs text-gray-500">FY 2024</p>
          </div>
        </Card>
        <Card>
          <div className="pb-2">
            <p>YTD Spent</p>
          </div>
          <div>
            <p className="text-2xl font-bold">$16.2M</p>
            <p className="text-xs text-emerald-600">46% utilized</p>
          </div>
        </Card>
        <Card>
          <div className="pb-2">
            <p>Remaining Budget</p>
          </div>
          <div>
            <p className="text-2xl font-bold">$18.7M</p>
            <p className="text-xs text-gray-500">54% available</p>
          </div>
        </Card>
        <Card>
          <div className="pb-2">
            <p>Forecast Variance</p>
          </div>
          <div>
            <p className="text-2xl font-bold">-2.3%</p>
            <p className="text-xs text-emerald-600">Under budget</p>
          </div>
        </Card>
      </div>

      <Card>
        <div>
          <h3>Budget vs Actual vs Forecast</h3>
          <p>Monthly comparison for current year</p>
        </div>
        <div>
          <LineChart
            data={budgetData}
            index="month"
            categories={["allocated", "spent", "forecasted"]}
            colors={["gray", "indigo", "amber"]}
            valueFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
            yAxisWidth={60}
            showLegend
            showGridLines
            className="h-80"
          />
        </div>
      </Card>

      <Card>
        <div>
          <h3>Department Budget Status</h3>
          <p>Current budget utilization by department</p>
        </div>
        <div>
          <div className="space-y-4">
            {departmentBudgets.map((dept) => (
              <div key={dept.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{dept.name}</span>
                    <Badge
                      variant={
                        dept.status === "under-budget"
                          ? "success"
                          : dept.status === "on-track"
                          ? "default"
                          : "warning"
                      }
                    >
                      {dept.status === "under-budget"
                        ? "Under Budget"
                        : dept.status === "on-track"
                        ? "On Track"
                        : "Over Budget"}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">
                      ${(dept.spent / 1000000).toFixed(1)}M / ${(dept.allocated / 1000000).toFixed(1)}M
                    </p>
                    <p className="text-xs text-gray-500">{dept.percentage}% used</p>
                  </div>
                </div>
                <ProgressBar value={dept.percentage} className="h-2" />
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  )
}