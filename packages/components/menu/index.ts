import type { App, DefineComponent } from 'vue'

import { IxMenu, IxMenuItem, IxMenuDivider, IxMenuGroup, IxSubMenu } from './src'

const components = [IxMenu, IxMenuItem, IxMenuDivider, IxMenuGroup, IxSubMenu]

components.forEach(component => {
  component.install = (app: App & DefineComponent): void => {
    app.component(app.name, app)
  }
})

export { IxMenu, IxMenuItem, IxMenuDivider, IxMenuGroup, IxSubMenu }

export type {
  MenuInstance,
  MenuProps,
  MenuItemInstance,
  MenuItemProps,
  MenuGroupInstance,
  MenuGroupProps,
  SubMenuInstance,
  SubMenuProps,
} from './src'
