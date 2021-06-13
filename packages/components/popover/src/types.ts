import type { DefineComponent } from 'vue'

import { IxExtractPropTypes, IxPropTypes } from '@idux/cdk/utils'
import { overlayPlacementDef, overlayTriggerDef } from '@idux/components/private/overlay/src/types'

export const popoverProps = {
  title: IxPropTypes.string,
  content: IxPropTypes.string.isRequired,
  placement: overlayPlacementDef,
  visible: IxPropTypes.bool.def(false),
  trigger: overlayTriggerDef,
  showDelay: IxPropTypes.number,
  hideDelay: IxPropTypes.number,
  destroyOnHide: IxPropTypes.bool,
  autoAdjust: IxPropTypes.bool,
  'onUpdate:visible': IxPropTypes.func<(visible: boolean) => void>().def(() => {}),
}

export type PopoverProps = IxExtractPropTypes<typeof popoverProps>

export type PopoverInstance = InstanceType<DefineComponent<PopoverProps>>
