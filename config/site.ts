export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Corte & Cía",
  description: "Plataforma de gestión de eventos profesionales.",
  leftNavItems: [
    {
      label: "Soluciones",
      href: "/solutions",
    },
    {
      label: "Servicios",
      href: "/services",
    },
    {
      label: "Nosotros",
      href: "/about",
    },
  ],
  rightNavItems: [
    {
      label: "FAQ",
      href: "/faq",
    },
    {
      label: "Soporte",
      href: "/support",
    },
  ],
  links: {
    github: "https://github.com/corte-y-cia",
    twitter: "https://twitter.com/corte_y_cia",
    docs: "https://corte-y-cia.com/docs",
    discord: "https://discord.gg/corte-y-cia",
  },
}

