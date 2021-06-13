import type { ComputedRef, WritableComputedRef } from 'vue'
import type { TooltipConfig } from '@idux/components/config'
import type { TooltipProps } from './types'

import { useGlobalConfig } from '@idux/components/config'
import { computed, getCurrentInstance } from 'vue'

export function useConfig(): ComputedRef<TooltipConfig> {
  const config = useGlobalConfig('tooltip')
  const props = getCurrentInstance()!.props as TooltipProps

  return computed(() => {
    return {
      placement: props.placement ?? config.placement,
      trigger: props.trigger ?? config.trigger,
      showDelay: props.showDelay ?? config.showDelay,
      hideDelay: props.hideDelay ?? config.hideDelay,
      destroyOnHide: props.destroyOnHide ?? config.destroyOnHide,
      autoAdjust: props.autoAdjust ?? config.autoAdjust,
    }
  })
}
export function useVisibility(): WritableComputedRef<boolean> {
  const props = getCurrentInstance()!.props as TooltipProps

  return computed({
    get() {
      return props.visible
    },
    set(value: boolean) {
      props['onUpdate:visible'](value)
    },
  })
}

export function useOffset(config: ComputedRef<TooltipConfig>): ComputedRef<[number, number]> {
  return computed(() => {
    if (config.value.placement.startsWith('top')) {
      return [0, -5]
    } else if (config.value.placement.startsWith('bottom')) {
      return [0, 5]
    } else if (config.value.placement.startsWith('left')) {
      return [-5, 0]
    } else {
      return [5, 0]
    }
  })
}
