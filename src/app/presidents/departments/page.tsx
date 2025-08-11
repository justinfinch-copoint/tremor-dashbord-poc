import { Card } from "@/components/Card"
import { Badge } from "@/components/Badge"
import { ProgressCircle } from "@/components/ProgressCircle"

const departments = [
  {
    name: "Sales & Marketing",
    head: "Sarah Johnson",
    employees: 145,
    budget: "$8.2M",
    budgetUsed: 62,
    kpis: {
      primary: "Revenue: $28.2M",
      secondary: "Leads: 3,421",
      status: "on-track",
    },
  },
  {
    name: "Engineering",
    head: "Michael Chen",
    employees: 232,
    budget: "$12.5M",
    budgetUsed: 71,
    kpis: {
      primary: "Projects: 18/24",
      secondary: "On-time: 94%",
      status: "on-track",
    },
  },
  {
    name: "Operations",
    head: "Lisa Martinez",
    employees: 178,
    budget: "$6.8M",
    budgetUsed: 58,
    kpis: {
      primary: "Efficiency: 87%",
      secondary: "Downtime: 2.1%",
      status: "attention",
    },
  },
  {
    name: "Human Resources",
    head: "David Wilson",
    employees: 42,
    budget: "$2.4M",
    budgetUsed: 45,
    kpis: {
      primary: "Retention: 92%",
      secondary: "Hiring: 23/30",
      status: "on-track",
    },
  },
  {
    name: "Finance",
    head: "Jennifer Taylor",
    employees: 38,
    budget: "$1.8M",
    budgetUsed: 52,
    kpis: {
      primary: "Cash Flow: +$4.2M",
      secondary: "DSO: 32 days",
      status: "excellent",
    },
  },
  {
    name: "Customer Success",
    head: "Robert Brown",
    employees: 67,
    budget: "$3.2M",
    budgetUsed: 68,
    kpis: {
      primary: "NPS: 72",
      secondary: "Churn: 3.2%",
      status: "excellent",
    },
  },
]

export default function DepartmentsPage() {

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
          Department Performance
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Overview of all departments and their current performance metrics
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {departments.map((dept) => (
          <Card key={dept.name}>
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{dept.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{dept.head}</p>
                </div>
                <Badge
                  variant={
                    dept.kpis.status === "excellent"
                      ? "success"
                      : dept.kpis.status === "on-track"
                      ? "default"
                      : "warning"
                  }
                >
                  {dept.kpis.status === "excellent"
                    ? "Excellent"
                    : dept.kpis.status === "on-track"
                    ? "On Track"
                    : "Needs Attention"}
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Budget</p>
                  <p className="text-lg font-semibold">{dept.budget}</p>
                </div>
                <ProgressCircle value={dept.budgetUsed} radius={24}>
                  <span className="text-xs font-medium">{dept.budgetUsed}%</span>
                </ProgressCircle>
              </div>

              <div className="border-t pt-3 dark:border-gray-800">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Employees</span>
                    <span className="font-medium">{dept.employees}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Primary KPI</span>
                    <span className="font-medium">{dept.kpis.primary}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Secondary KPI</span>
                    <span className="font-medium">{dept.kpis.secondary}</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Department Summary</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Overall organizational health metrics</p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Employees</p>
              <p className="text-2xl font-bold">702</p>
              <p className="text-xs text-emerald-600">+8% from last quarter</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Budget</p>
              <p className="text-2xl font-bold">$34.9M</p>
              <p className="text-xs text-gray-600">61% utilized</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Departments On Track</p>
              <p className="text-2xl font-bold">5/6</p>
              <p className="text-xs text-emerald-600">83% performance rate</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Avg. Employee Satisfaction</p>
              <p className="text-2xl font-bold">4.2/5.0</p>
              <p className="text-xs text-emerald-600">+0.3 from last survey</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}