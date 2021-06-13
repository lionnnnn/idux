import type { DefineComponent } from 'vue'

import { IxExtractPropTypes, IxPropTypes } from '@idux/cdk/utils'
import { overlayPlacementDef, overlayTriggerDef } from '@idux/components/private/overlay/src/types'

export const tooltipProps = {
  title: IxPropTypes.string,
  placement: overlayPlacementDef,
  visible: IxPropTypes.bool.def(false),
  trigger: overlayTriggerDef,
  hideDelay: IxPropTypes.number,
  showDelay: IxPropTypes.number,
  destroyOnHide: IxPropTypes.bool,
  autoAdjust: IxPropTypes.bool,
  'onUpdate:visible': IxPropTypes.func<(visible: boolean) => void>().def(() => {}),
}

export type TooltipProps = IxExtractPropTypes<typeof tooltipProps>

export type TooltipInstance = InstanceType<DefineComponent<TooltipProps>>
