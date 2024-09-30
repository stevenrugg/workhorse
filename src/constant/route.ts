export interface AppRoute {
  children: string
  href: string
}

export const APP_ROUTE: Array<AppRoute> = [
  {
    children: 'Home',
    href: '/'
  },
  {
    children: 'Blog',
    href: '/blog'
  },
  {
    children: 'About',
    href: '/about'
  },
  {
    children: 'Projects',
    href: '/projects'
  },
  {
    children: 'Contact',
    href: '/contact'
  },
  {
    children: 'Tags',
    href: '/tags'
  }
]
