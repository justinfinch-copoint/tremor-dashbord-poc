"use client"
import { Card } from "@/components/Card"
import { ProgressBar } from "@/components/ProgressBar"
import { LineChart } from "@/components/LineChart"

const kpiData = [
  {
    month: "Jan",
    revenue: 4200000,
    profit: 1200000,
    customers: 3200,
  },
  {
    month: "Feb",
    revenue: 4500000,
    profit: 1400000,
    customers: 3400,
  },
  {
    month: "Mar",
    revenue: 4800000,
    profit: 1600000,
    customers: 3600,
  },
  {
    month: "Apr",
    revenue: 5200000,
    profit: 1800000,
    customers: 3900,
  },
  {
    month: "May",
    revenue: 5600000,
    profit: 2000000,
    customers: 4200,
  },
  {
    month: "Jun",
    revenue: 5900000,
    profit: 2100000,
    customers: 4500,
  },
]

export default function KPIsPage() {

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
          Key Performance Indicators
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Track company-wide performance metrics and goals
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <div>
            <h3>Revenue YTD</h3>
            <p>vs. Target: $30M</p>
          </div>
          <div>
            <div className="space-y-2">
              <div className="flex items-baseline justify-between">
                <span className="text-3xl font-bold">$28.2M</span>
                <span className="text-sm font-medium text-emerald-600">+18%</span>
              </div>
              <ProgressBar value={94} className="h-2" />
              <p className="text-xs text-gray-500">94% of annual target</p>
            </div>
          </div>
        </Card>

        <Card>
          <div>
            <h3>Net Profit Margin</h3>
            <p>Current Quarter</p>
          </div>
          <div>
            <div className="space-y-2">
              <div className="flex items-baseline justify-between">
                <span className="text-3xl font-bold">35.6%</span>
                <span className="text-sm font-medium text-emerald-600">+2.3%</span>
              </div>
              <ProgressBar value={89} className="h-2" />
              <p className="text-xs text-gray-500">Above industry average</p>
            </div>
          </div>
        </Card>

        <Card>
          <div>
            <h3>Customer Satisfaction</h3>
            <p>NPS Score</p>
          </div>
          <div>
            <div className="space-y-2">
              <div className="flex items-baseline justify-between">
                <span className="text-3xl font-bold">72</span>
                <span className="text-sm font-medium text-emerald-600">+5</span>
              </div>
              <ProgressBar value={72} className="h-2" />
              <p className="text-xs text-gray-500">Excellent rating</p>
            </div>
          </div>
        </Card>
      </div>

      <Card>
        <div>
          <h3>Revenue & Profit Trends</h3>
          <p>Monthly performance over the last 6 months</p>
        </div>
        <div>
          <LineChart
            data={kpiData}
            index="month"
            categories={["revenue", "profit"]}
            colors={["indigo", "emerald"]}
            valueFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
            yAxisWidth={60}
            showLegend
            showGridLines
            className="h-80"
          />
        </div>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <div>
            <h3>Operational Efficiency</h3>
            <p>Key operational metrics</p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Order Fulfillment Rate</span>
              <span className="text-sm font-medium">98.2%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Average Delivery Time</span>
              <span className="text-sm font-medium">2.3 days</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Inventory Turnover</span>
              <span className="text-sm font-medium">12.5x</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Production Capacity Utilization</span>
              <span className="text-sm font-medium">87%</span>
            </div>
          </div>
        </Card>

        <Card>
          <div>
            <h3>Human Resources</h3>
            <p>Employee metrics</p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Employee Retention Rate</span>
              <span className="text-sm font-medium">92%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Training Hours per Employee</span>
              <span className="text-sm font-medium">40 hrs</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Employee Satisfaction</span>
              <span className="text-sm font-medium">4.2/5.0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Open Positions</span>
              <span className="text-sm font-medium">23</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}