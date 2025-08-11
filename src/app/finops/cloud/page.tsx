"use client"
import { Card } from "@/components/Card"
import { Badge } from "@/components/Badge"
import { LineChart } from "@/components/LineChart"
import { ProgressBar } from "@/components/ProgressBar"

const cloudCostData = [
  { month: "Jan", aws: 145000, azure: 82000, gcp: 34000 },
  { month: "Feb", aws: 152000, azure: 85000, gcp: 36000 },
  { month: "Mar", aws: 148000, azure: 88000, gcp: 38000 },
  { month: "Apr", aws: 156000, azure: 91000, gcp: 41000 },
  { month: "May", aws: 162000, azure: 94000, gcp: 43000 },
  { month: "Jun", aws: 168000, azure: 97000, gcp: 45000 },
]

const services = [
  {
    name: "Compute (EC2/VMs)",
    cost: 142000,
    percentage: 35,
    trend: "up",
    change: "+12%",
  },
  {
    name: "Storage (S3/Blob)",
    cost: 89000,
    percentage: 22,
    trend: "stable",
    change: "+2%",
  },
  {
    name: "Database (RDS/SQL)",
    cost: 73000,
    percentage: 18,
    trend: "up",
    change: "+8%",
  },
  {
    name: "Networking (CDN/LB)",
    cost: 52000,
    percentage: 13,
    trend: "down",
    change: "-5%",
  },
  {
    name: "Analytics",
    cost: 32000,
    percentage: 8,
    trend: "up",
    change: "+18%",
  },
  {
    name: "Other Services",
    cost: 16000,
    percentage: 4,
    trend: "stable",
    change: "+1%",
  },
]

const environments = [
  {
    name: "Production",
    cost: 198000,
    instances: 342,
    status: "optimized",
  },
  {
    name: "Staging",
    cost: 54000,
    instances: 89,
    status: "review",
  },
  {
    name: "Development",
    cost: 38000,
    instances: 156,
    status: "warning",
  },
  {
    name: "QA/Testing",
    cost: 20000,
    instances: 67,
    status: "optimized",
  },
]

export default function CloudPage() {

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
          Cloud Costs Analysis
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Monitor and optimize cloud infrastructure spending across all providers
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <div className="pb-2">
            <p>Monthly Spend</p>
          </div>
          <div>
            <p className="text-2xl font-bold">$310K</p>
            <p className="text-xs text-red-600">+8% from last month</p>
          </div>
        </Card>
        <Card>
          <div className="pb-2">
            <p>YTD Total</p>
          </div>
          <div>
            <p className="text-2xl font-bold">$1.73M</p>
            <p className="text-xs text-gray-500">6 months</p>
          </div>
        </Card>
        <Card>
          <div className="pb-2">
            <p>Savings Identified</p>
          </div>
          <div>
            <p className="text-2xl font-bold">$42K</p>
            <p className="text-xs text-emerald-600">Monthly potential</p>
          </div>
        </Card>
        <Card>
          <div className="pb-2">
            <p>Active Resources</p>
          </div>
          <div>
            <p className="text-2xl font-bold">654</p>
            <p className="text-xs text-gray-500">Across all clouds</p>
          </div>
        </Card>
      </div>

      <Card>
        <div>
          <h3>Cloud Provider Costs</h3>
          <p>Monthly spending trends by provider</p>
        </div>
        <div>
          <LineChart
            data={cloudCostData}
            index="month"
            categories={["aws", "azure", "gcp"]}
            colors={["amber", "blue", "emerald"]}
            valueFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
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
            <h3>Cost by Service Type</h3>
            <p>Current month breakdown</p>
          </div>
          <div>
            <div className="space-y-4">
              {services.map((service) => (
                <div key={service.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{service.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        ${(service.cost / 1000).toFixed(0)}K
                      </span>
                      <Badge
                        variant={
                          service.trend === "up"
                            ? "error"
                            : service.trend === "down"
                            ? "success"
                            : "neutral"
                        }
                      >
                        {service.change}
                      </Badge>
                    </div>
                  </div>
                  <ProgressBar value={service.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card>
          <div>
            <h3>Environment Costs</h3>
            <p>Resource allocation by environment</p>
          </div>
          <div>
            <div className="space-y-4">
              {environments.map((env) => (
                <div
                  key={env.name}
                  className="flex items-center justify-between rounded-lg border p-3 dark:border-gray-800"
                >
                  <div>
                    <p className="font-medium">{env.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {env.instances} instances
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">${(env.cost / 1000).toFixed(0)}K</p>
                    <Badge
                      variant={
                        env.status === "optimized"
                          ? "success"
                          : env.status === "review"
                          ? "warning"
                          : "error"
                      }
                    >
                      {env.status === "optimized"
                        ? "Optimized"
                        : env.status === "review"
                        ? "Review"
                        : "Action Needed"}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      <Card>
        <div>
          <h3>Optimization Recommendations</h3>
          <p>Identified cost-saving opportunities</p>
        </div>
        <div>
          <div className="space-y-3">
            <div className="flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-3 dark:border-emerald-900 dark:bg-emerald-950">
              <Badge variant="success">High Impact</Badge>
              <div>
                <p className="text-sm font-medium">Rightsizing Opportunity</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  17 oversized instances in production can be downsized, saving ~$18K/month
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-yellow-200 bg-yellow-50 p-3 dark:border-yellow-900 dark:bg-yellow-950">
              <Badge variant="warning">Medium Impact</Badge>
              <div>
                <p className="text-sm font-medium">Unused Resources</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  23 unattached volumes and 8 idle load balancers detected, costing ~$8K/month
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-blue-200 bg-blue-50 p-3 dark:border-blue-900 dark:bg-blue-950">
              <Badge variant="default">Review</Badge>
              <div>
                <p className="text-sm font-medium">Reserved Instance Coverage</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Current RI coverage at 62%. Increasing to 80% could save ~$16K/month
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}