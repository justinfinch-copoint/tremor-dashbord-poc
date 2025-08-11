import { redirect } from "next/navigation"
import { defaultDashboard } from "@/lib/dashboards.config"

export default function HomePage() {
  redirect(defaultDashboard.defaultPage)
}