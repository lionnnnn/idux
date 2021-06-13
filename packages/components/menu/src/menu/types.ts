import type { DefineComponent } from 'vue'
import type { MenuTheme } from '@idux/components/config'

import { IxExtractPropTypes, IxPropTypes } from '@idux/cdk/utils'

export type MenuMode = 'vertical' | 'horizontal' | 'inline'

export const menuProps = {
  collapsed: IxPropTypes.bool.def(false),
  indent: IxPropTypes.number,
  mode: IxPropTypes.oneOf<MenuMode>(['vertical', 'horizontal', 'inline']).def('vertical'),
  multiple: IxPropTypes.bool.def(false),
  singleOpen: IxPropTypes.bool.def(false),
  selectable: IxPropTypes.bool.def(true),
  closeAfterClick: IxPropTypes.bool.def(false),
  theme: IxPropTypes.oneOf<MenuTheme>(['light', 'dark']),
  selected: IxPropTypes.arrayOf(IxPropTypes.oneOfType([IxPropTypes.string, IxPropTypes.number])).def(() => []),
  'onUpdate:selected': IxPropTypes.func<(selected: (number | string)[]) => void>().def(() => {}),
  opened: IxPropTypes.arrayOf(IxPropTypes.oneOfType([IxPropTypes.string, IxPropTypes.number])).def(() => []),
  'onUpdate:opened': IxPropTypes.func<(opened: (number | string)[]) => void>().def(() => {}),
  onClick: IxPropTypes.func<(event: MouseEvent, value: number | string) => void>().def(() => {}),
}

export type MenuProps = IxExtractPropTypes<typeof menuProps>
export type MenuInstance = InstanceType<DefineComponent<MenuProps>>
