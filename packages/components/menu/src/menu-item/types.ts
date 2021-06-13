import type { DefineComponent } from 'vue'

import { IxExtractPropTypes, IxPropTypes } from '@idux/cdk/utils'

export const menuItemProps = {
  value: IxPropTypes.oneOfType([IxPropTypes.string, IxPropTypes.number]),
  disabled: IxPropTypes.bool.def(false),
  icon: IxPropTypes.string,
  title: IxPropTypes.string.def(''),
}

export type MenuItemProps = IxExtractPropTypes<typeof menuItemProps>

export type MenuItemInstance = InstanceType<DefineComponent<MenuItemProps>>
