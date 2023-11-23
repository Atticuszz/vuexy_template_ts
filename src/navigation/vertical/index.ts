import dashboard from './dashboard'
import type { VerticalNavItems } from '@/@layouts/types'

export default [
  ...dashboard,
  {
    title: 'test-page',
    to: { name: 'test-page' },
    icon: { icon: 'tabler-file' },
  },
] as VerticalNavItems
// vertical navigation your page entrances
