import type { OverlayOptions } from '@idux/cdk/overlay'
import type { OverlayProps } from './types'

export function getOverlayOptions(props: OverlayProps): OverlayOptions {
  return {
    visible: props.visible,
    scrollStrategy: props.scrollStrategy,
    disabled: props.disabled,
    placement: props.placement,
    trigger: props.trigger,
    allowEnter: props.allowEnter,
    autoAdjust: props.autoAdjust,
    offset: props.offset,
    hideDelay: props.hideDelay,
    showDelay: props.showDelay,
  }
}
