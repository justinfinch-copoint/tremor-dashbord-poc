import { Card } from "@/components/Card"
import { Badge } from "@/components/Badge"
import { ProgressBar } from "@/components/ProgressBar"

const costCenters = [
  {
    id: "cc-001",
    name: "Product Development",
    owner: "Michael Chen",
    allocated: 4200000,
    spent: 2310000,
    percentage: 55,
    projects: 12,
    status: "on-track",
  },
  {
    id: "cc-002",
    name: "Customer Acquisition",
    owner: "Sarah Johnson",
    allocated: 3500000,
    spent: 2275000,
    percentage: 65,
    projects: 8,
    status: "on-track",
  },
  {
    id: "cc-003",
    name: "Infrastructure & Operations",
    owner: "Lisa Martinez",
    allocated: 2800000,
    spent: 1624000,
    percentage: 58,
    projects: 6,
    status: "on-track",
  },
  {
    id: "cc-004",
    name: "Research & Innovation",
    owner: "David Kim",
    allocated: 2000000,
    spent: 700000,
    percentage: 35,
    projects: 4,
    status: "under-budget",
  },
  {
    id: "cc-005",
    name: "Corporate Services",
    owner: "Jennifer Taylor",
    allocated: 1500000,
    spent: 945000,
    percentage: 63,
    projects: 5,
    status: "on-track",
  },
]

const projectAllocations = [
  {
    name: "Digital Platform Upgrade",
    costCenter: "Product Development",
    budget: 1200000,
    spent: 780000,
    endDate: "Q4 2024",
    status: "active",
  },
  {
    name: "APAC Market Entry",
    costCenter: "Customer Acquisition",
    budget: 1800000,
    spent: 720000,
    endDate: "Q1 2025",
    status: "active",
  },
  {
    name: "Cloud Migration Phase 2",
    costCenter: "Infrastructure & Operations",
    budget: 950000,
    spent: 617500,
    endDate: "Q3 2024",
    status: "active",
  },
  {
    name: "AI/ML Initiative",
    costCenter: "Research & Innovation",
    budget: 800000,
    spent: 240000,
    endDate: "Q2 2025",
    status: "active",
  },
  {
    name: "ERP Implementation",
    costCenter: "Corporate Services",
    budget: 600000,
    spent: 420000,
    endDate: "Q4 2024",
    status: "at-risk",
  },
]

const allocationBreakdown = [
  { category: "Personnel", amount: 8200000, percentage: 58 },
  { category: "Technology", amount: 2800000, percentage: 20 },
  { category: "Marketing", amount: 1400000, percentage: 10 },
  { category: "Facilities", amount: 980000, percentage: 7 },
  { category: "Other", amount: 700000, percentage: 5 },
]

export default function AllocationPage() {

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
          Cost Allocation
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Track and manage cost allocation across cost centers and projects
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <div className="pb-2">
            <p>Total Allocated</p>
          </div>
          <div>
            <p className="text-2xl font-bold">$14.0M</p>
            <p className="text-xs text-gray-500">Across 5 cost centers</p>
          </div>
        </Card>
        <Card>
          <div className="pb-2">
            <p>Total Spent</p>
          </div>
          <div>
            <p className="text-2xl font-bold">$7.9M</p>
            <p className="text-xs text-emerald-600">56% utilized</p>
          </div>
        </Card>
        <Card>
          <div className="pb-2">
            <p>Active Projects</p>
          </div>
          <div>
            <p className="text-2xl font-bold">35</p>
            <p className="text-xs text-gray-500">Across all centers</p>
          </div>
        </Card>
        <Card>
          <div className="pb-2">
            <p>Unallocated Budget</p>
          </div>
          <div>
            <p className="text-2xl font-bold">$420K</p>
            <p className="text-xs text-amber-600">3% of total</p>
          </div>
        </Card>
      </div>

      <Card>
        <div>
          <h3>Cost Centers</h3>
          <p>Budget allocation and utilization by cost center</p>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-left dark:border-gray-800">
                  <th className="pb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Cost Center
                  </th>
                  <th className="pb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Owner
                  </th>
                  <th className="pb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Budget
                  </th>
                  <th className="pb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Spent
                  </th>
                  <th className="pb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Projects
                  </th>
                  <th className="pb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {costCenters.map((center) => (
                  <tr key={center.id} className="border-b dark:border-gray-800">
                    <td className="py-3">
                      <div>
                        <p className="font-medium">{center.name}</p>
                        <p className="text-xs text-gray-500">{center.id}</p>
                      </div>
                    </td>
                    <td className="py-3 text-sm">{center.owner}</td>
                    <td className="py-3">
                      <p className="text-sm font-medium">
                        ${(center.allocated / 1000000).toFixed(1)}M
                      </p>
                    </td>
                    <td className="py-3">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">
                          ${(center.spent / 1000000).toFixed(1)}M
                        </p>
                        <ProgressBar value={center.percentage} className="h-1.5 w-20" />
                        <p className="text-xs text-gray-500">{center.percentage}%</p>
                      </div>
                    </td>
                    <td className="py-3 text-sm">{center.projects}</td>
                    <td className="py-3">
                      <Badge
                        variant={
                          center.status === "under-budget"
                            ? "success"
                            : center.status === "on-track"
                            ? "default"
                            : "warning"
                        }
                      >
                        {center.status === "under-budget"
                          ? "Under Budget"
                          : center.status === "on-track"
                          ? "On Track"
                          : "Over Budget"}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <div>
            <h3>Major Project Allocations</h3>
            <p>Top projects by budget allocation</p>
          </div>
          <div>
            <div className="space-y-3">
              {projectAllocations.map((project) => (
                <div
                  key={project.name}
                  className="rounded-lg border p-3 dark:border-gray-800"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium">{project.name}</p>
                      <p className="text-xs text-gray-500">{project.costCenter}</p>
                    </div>
                    <Badge
                      variant={project.status === "active" ? "default" : "error"}
                    >
                      {project.status === "active" ? "Active" : "At Risk"}
                    </Badge>
                  </div>
                  <div className="mt-2 space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">
                        ${(project.spent / 1000).toFixed(0)}K / ${(project.budget / 1000).toFixed(0)}K
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {project.endDate}
                      </span>
                    </div>
                    <ProgressBar
                      value={(project.spent / project.budget) * 100}
                      className="h-1.5"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card>
          <div>
            <h3>Allocation by Category</h3>
            <p>Cost breakdown by spending category</p>
          </div>
          <div>
            <div className="space-y-4">
              {allocationBreakdown.map((category) => (
                <div key={category.category}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">{category.category}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      ${(category.amount / 1000000).toFixed(1)}M ({category.percentage}%)
                    </span>
                  </div>
                  <ProgressBar value={category.percentage} className="h-2" />
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 p-3 dark:border-blue-900 dark:bg-blue-950">
              <p className="text-sm font-medium">Reallocation Opportunity</p>
              <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                Research & Innovation is 30% under budget. Consider reallocating $400K to high-priority projects in Q3.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}