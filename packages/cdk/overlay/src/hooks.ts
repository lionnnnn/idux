import type { ComputedRef, Ref, WatchStopHandle } from 'vue'
import type {
  EventOptions,
  OverlayOptions,
  OverlayPlacement,
  OverlayPopperEvents,
  OverlayTrigger,
  OverlayTriggerEvents,
} from './types'

import { computed, reactive, ref, watch } from 'vue'
import { isUndefined } from '@idux/cdk/utils'
import { mapTriggerEvents } from './utils'

export function useTimer(): Ref<number | null> {
  return ref(null) as Ref<number | null>
}

export function useState(options: OverlayOptions): Required<OverlayOptions> {
  const state = reactive<Required<OverlayOptions>>({
    visible: true,
    scrollStrategy: 'none',
    disabled: false,
    placement: 'top',
    trigger: 'manual',
    allowEnter: false,
    autoAdjust: true,
    offset: [0, 0],
    hideDelay: 0,
    showDelay: 0,
  })

  for (const [key, value] of Object.entries(options)) {
    if (isUndefined(value)) {
      continue
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    state[key] = value
  }

  return state
}

export function useVisibility(state: Required<OverlayOptions>): ComputedRef<boolean> {
  return computed(() => !state.disabled && state.visible)
}

export function usePlacement(state: Required<OverlayOptions>): ComputedRef<OverlayPlacement> {
  return computed(() => state.placement)
}

export function useElement<T>(): Ref<T | null> {
  return ref<T | null>(null) as Ref<T | null>
}

export function useTriggerEvents(
  state: Required<OverlayOptions>,
  options: EventOptions,
): ComputedRef<OverlayTriggerEvents> {
  return computed(() => {
    const triggerEventsMap: Record<OverlayTrigger, Array<keyof OverlayTriggerEvents>> = {
      click: ['onClick'],
      focus: ['onFocus', 'onBlur'],
      hover: ['onMouseenter', 'onMouseleave'],
      contextmenu: ['onContextmenu'],
      manual: [],
    }
    return mapTriggerEvents(triggerEventsMap[state.trigger], options)
  })
}

export function useOverlayEvents(
  state: Required<OverlayOptions>,
  { timer, hide }: EventOptions,
): ComputedRef<OverlayPopperEvents> {
  return computed(() => {
    const onMouseenter = () => {
      if (state.trigger === 'hover' && state.allowEnter && timer.value) {
        clearTimeout(timer.value)
        timer.value = null
      }
    }

    const onMouseleave = () => {
      if (state.trigger !== 'hover') {
        return
      }
      hide()
    }

    return { onMouseenter, onMouseleave }
  })
}

export function useVisibilityWatcher(visibility: ComputedRef<boolean>, action: () => void): WatchStopHandle {
  return watch(
    visibility,
    value => {
      if (value) {
        action()
      }
    },
    { flush: 'post' },
  )
}

export function usePlacementWatcher(placement: ComputedRef<OverlayPlacement>, action: () => void): WatchStopHandle {
  return watch(placement, action) // todo flush
}
