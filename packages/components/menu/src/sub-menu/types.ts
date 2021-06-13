import type { DefineComponent } from 'vue'

import { IxExtractPropTypes, IxPropTypes } from '@idux/cdk/utils'

export const subMenuProps = {
  value: IxPropTypes.oneOfType([IxPropTypes.string, IxPropTypes.number]),
  disabled: IxPropTypes.bool.def(false),
  icon: IxPropTypes.string,
  overlayClass: IxPropTypes.string.def(''),
  suffix: IxPropTypes.string,
  suffixRotates: IxPropTypes.arrayOf(IxPropTypes.number),
  title: IxPropTypes.string.def(''),
  onClick: IxPropTypes.func<(event: MouseEvent, value: string | number) => void>().def(() => {}),
}

export type SubMenuProps = IxExtractPropTypes<typeof subMenuProps>

export type SubMenuInstance = InstanceType<DefineComponent<SubMenuProps>>
