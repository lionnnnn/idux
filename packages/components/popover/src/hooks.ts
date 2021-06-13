import { computed, ComputedRef, getCurrentInstance, WritableComputedRef } from 'vue'
import { PopoverConfig, useGlobalConfig } from '@idux/components/config'
import { PopoverProps } from './types'

export function useConfig(): ComputedRef<PopoverConfig> {
  const config = useGlobalConfig('popover')
  const props = getCurrentInstance()!.props as PopoverProps

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
  const props = getCurrentInstance()!.props as PopoverProps

  return computed({
    get() {
      return props.visible
    },
    set(value: boolean) {
      props['onUpdate:visible'](value)
    },
  })
}

export function useOffset(config: ComputedRef<PopoverConfig>): ComputedRef<[number, number]> {
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
