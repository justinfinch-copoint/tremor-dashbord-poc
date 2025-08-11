import { Card } from "@/components/Card"
import { Badge } from "@/components/Badge"
import { ProgressBar } from "@/components/ProgressBar"

const initiatives = [
  {
    id: 1,
    name: "Digital Transformation",
    owner: "Michael Chen",
    department: "Engineering",
    status: "in-progress",
    progress: 65,
    startDate: "Jan 2024",
    targetDate: "Dec 2024",
    budget: "$3.2M",
    budgetUsed: "$2.1M",
    impact: "high",
    description: "Modernizing core systems and implementing cloud infrastructure",
    milestones: [
      { name: "Cloud Migration", status: "completed" },
      { name: "API Development", status: "in-progress" },
      { name: "Mobile App Launch", status: "pending" },
      { name: "Data Analytics Platform", status: "pending" },
    ],
  },
  {
    id: 2,
    name: "Market Expansion - APAC",
    owner: "Sarah Johnson",
    department: "Sales & Marketing",
    status: "in-progress",
    progress: 40,
    startDate: "Mar 2024",
    targetDate: "Mar 2025",
    budget: "$5.5M",
    budgetUsed: "$2.2M",
    impact: "high",
    description: "Expanding operations into Asia-Pacific markets",
    milestones: [
      { name: "Market Research", status: "completed" },
      { name: "Partner Selection", status: "completed" },
      { name: "Local Team Hiring", status: "in-progress" },
      { name: "Product Localization", status: "pending" },
    ],
  },
  {
    id: 3,
    name: "Sustainability Program",
    owner: "Lisa Martinez",
    department: "Operations",
    status: "in-progress",
    progress: 75,
    startDate: "Oct 2023",
    targetDate: "Jun 2024",
    budget: "$1.8M",
    budgetUsed: "$1.4M",
    impact: "medium",
    description: "Implementing eco-friendly practices and achieving carbon neutrality",
    milestones: [
      { name: "Energy Audit", status: "completed" },
      { name: "Solar Installation", status: "completed" },
      { name: "Waste Reduction", status: "in-progress" },
      { name: "Carbon Offset Program", status: "pending" },
    ],
  },
  {
    id: 4,
    name: "Customer Experience Overhaul",
    owner: "Robert Brown",
    department: "Customer Success",
    status: "planning",
    progress: 15,
    startDate: "May 2024",
    targetDate: "Feb 2025",
    budget: "$2.4M",
    budgetUsed: "$0.3M",
    impact: "high",
    description: "Redesigning customer journey and implementing new support systems",
    milestones: [
      { name: "Journey Mapping", status: "in-progress" },
      { name: "Platform Selection", status: "pending" },
      { name: "Team Training", status: "pending" },
      { name: "Launch & Rollout", status: "pending" },
    ],
  },
  {
    id: 5,
    name: "Talent Development Program",
    owner: "David Wilson",
    department: "Human Resources",
    status: "in-progress",
    progress: 55,
    startDate: "Feb 2024",
    targetDate: "Nov 2024",
    budget: "$1.2M",
    budgetUsed: "$0.7M",
    impact: "medium",
    description: "Comprehensive leadership and skills development initiative",
    milestones: [
      { name: "Needs Assessment", status: "completed" },
      { name: "Program Design", status: "completed" },
      { name: "Pilot Launch", status: "in-progress" },
      { name: "Full Rollout", status: "pending" },
    ],
  },
]

export default function InitiativesPage() {

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
          Strategic Initiatives
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Track progress on key strategic initiatives and transformation programs
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <div className="pb-2">
            <p>Active Initiatives</p>
          </div>
          <div>
            <p className="text-3xl font-bold">5</p>
          </div>
        </Card>
        <Card>
          <div className="pb-2">
            <p>Total Budget</p>
          </div>
          <div>
            <p className="text-3xl font-bold">$14.1M</p>
          </div>
        </Card>
        <Card>
          <div className="pb-2">
            <p>Budget Utilized</p>
          </div>
          <div>
            <p className="text-3xl font-bold">48%</p>
          </div>
        </Card>
        <Card>
          <div className="pb-2">
            <p>On Schedule</p>
          </div>
          <div>
            <p className="text-3xl font-bold">4/5</p>
          </div>
        </Card>
      </div>

      <div className="space-y-4">
        {initiatives.map((initiative) => (
          <Card key={initiative.id}>
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <h3>{initiative.name}</h3>
                  <p>
                    {initiative.owner} • {initiative.department}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Badge
                    variant={
                      initiative.impact === "high"
                        ? "error"
                        : initiative.impact === "medium"
                        ? "warning"
                        : "default"
                    }
                  >
                    {initiative.impact} impact
                  </Badge>
                  <Badge
                    variant={
                      initiative.status === "completed"
                        ? "success"
                        : initiative.status === "in-progress"
                        ? "default"
                        : "neutral"
                    }
                  >
                    {initiative.status === "in-progress"
                      ? "In Progress"
                      : initiative.status === "planning"
                      ? "Planning"
                      : "Completed"}
                  </Badge>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {initiative.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Progress</span>
                    <span className="font-medium">{initiative.progress}%</span>
                  </div>
                  <ProgressBar value={initiative.progress} className="h-2" />
                </div>

                <div className="grid gap-4 md:grid-cols-4">
                  <div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Start Date</p>
                    <p className="text-sm font-medium">{initiative.startDate}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Target Date</p>
                    <p className="text-sm font-medium">{initiative.targetDate}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Budget</p>
                    <p className="text-sm font-medium">{initiative.budget}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Spent</p>
                    <p className="text-sm font-medium">{initiative.budgetUsed}</p>
                  </div>
                </div>

                <div className="border-t pt-3 dark:border-gray-800">
                  <p className="mb-2 text-xs font-medium text-gray-600 dark:text-gray-400">
                    Key Milestones
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {initiative.milestones.map((milestone) => (
                      <Badge
                        key={milestone.name}
                        variant={
                          milestone.status === "completed"
                            ? "success"
                            : milestone.status === "in-progress"
                            ? "default"
                            : "neutral"
                        }
                      >
                        {milestone.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}