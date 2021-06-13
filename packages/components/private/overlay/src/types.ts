import type { DefineComponent } from 'vue'
import type { OverlayScrollStrategy, OverlayPlacement, OverlayTrigger } from '@idux/cdk/overlay'

import { IxExtractPropTypes, IxPropTypes } from '@idux/cdk/utils'
import { VueTypeDef } from 'vue-types'

export const overlayScrollStrategyDef = IxPropTypes.oneOf<OverlayScrollStrategy>(['close', 'reposition', 'none'])

export const overlayPlacementDef = IxPropTypes.oneOf<OverlayPlacement>([
  'topStart',
  'top',
  'topEnd',
  'rightStart',
  'right',
  'rightEnd',
  'bottomStart',
  'bottom',
  'bottomEnd',
  'leftStart',
  'left',
  'leftEnd',
])

export const overlayTriggerDef = IxPropTypes.oneOf<OverlayTrigger>(['click', 'hover', 'focus', 'contextmenu', 'manual'])

export const overlayProps = {
  visible: IxPropTypes.bool,
  scrollStrategy: overlayScrollStrategyDef,
  disabled: IxPropTypes.bool,
  placement: overlayPlacementDef,
  trigger: overlayTriggerDef,
  allowEnter: IxPropTypes.bool,
  autoAdjust: IxPropTypes.bool,
  offset: (IxPropTypes.array() as unknown) as VueTypeDef<[number, number]>,
  hideDelay: IxPropTypes.number,
  showDelay: IxPropTypes.number,
  showArrow: IxPropTypes.bool.def(true),
  arrowOffset: IxPropTypes.number.def(0),
  visibleTransition: IxPropTypes.string.def('ix-fade-fast'),
  destroyOnHide: IxPropTypes.bool,
  clsPrefix: IxPropTypes.string.def('ix-overlay'),
  'onUpdate:visible': IxPropTypes.func<(visible: boolean) => void>().def(() => {}),
  'onUpdate:placement': IxPropTypes.func<(placement: OverlayPlacement) => void>().def(() => {}),
}

export type OverlayProps = IxExtractPropTypes<typeof overlayProps>

export type OverlayInstance = InstanceType<DefineComponent<OverlayProps>>
