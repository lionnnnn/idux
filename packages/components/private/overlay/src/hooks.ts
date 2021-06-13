import type { ComputedRef } from 'vue'
import type { OverlayOptions, OverlayPlacement } from '@idux/cdk/overlay'

import { computed, getCurrentInstance, watch } from 'vue'
import { hasSlot, Logger } from '@idux/cdk/utils'
import { OverlayProps } from './types'

export function useLogger(): void {
  const { slots } = getCurrentInstance()!
  if (!hasSlot(slots, 'trigger')) {
    Logger.error('Component must contain trigger slot.')
  }

  if (!hasSlot(slots, 'overlay')) {
    Logger.error('Component must contain overlay slot.')
  }
}

export function useRenderValid(): ComputedRef<boolean> {
  const { slots } = getCurrentInstance()!
  return computed(() => hasSlot(slots, 'trigger') && hasSlot(slots, 'overlay'))
}

export function useWatch(
  visibility: ComputedRef<boolean>,
  placement: ComputedRef<OverlayPlacement>,
  update: (options?: Partial<OverlayOptions>) => void,
): void {
  const props = getCurrentInstance()!.props as OverlayProps

  watch(visibility, value => {
    props['onUpdate:visible'](value)
  })

  watch(placement, value => {
    props['onUpdate:placement'](value)
  })

  watch(
    () => props.visible,
    visible => {
      update({ visible })
    },
  )

  watch(
    () => props.placement,
    placement => {
      update({ placement })
    },
  )
}
