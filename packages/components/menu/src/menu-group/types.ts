import type { DefineComponent } from 'vue'

import { IxExtractPropTypes, IxPropTypes } from '@idux/cdk/utils'

export const menuGroupProps = {
  icon: IxPropTypes.string,
  title: IxPropTypes.string,
}

export type MenuGroupProps = IxExtractPropTypes<typeof menuGroupProps>

export type MenuGroupInstance = InstanceType<DefineComponent<MenuGroupProps>>
