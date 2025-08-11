export const siteConfig = {
  name: "Multi-Dashboard Platform",
  url: "https://dashboard.company.com",
  description: "Executive dashboards for data-driven decision making",
  baseLinks: {
    home: "/",
    settings: {
      general: "/settings/general",
      billing: "/settings/billing",
      users: "/settings/users",
    },
  },
  dashboards: {
    presidents: {
      name: "President's Dashboard",
      description: "Executive overview and company performance",
      defaultPage: "/presidents/overview",
    },
    finops: {
      name: "FinOps Dashboard",
      description: "Financial operations and cost management",
      defaultPage: "/finops/overview",
    },
  },
}

export type siteConfig = typeof siteConfig
