import type { EventOptions, OverlayElement, OverlayInstance, OverlayOptions } from './types'

import {
  useElement,
  useOverlayEvents,
  usePlacement,
  usePlacementWatcher,
  useState,
  useTimer,
  useTriggerEvents,
  useVisibility,
  useVisibilityWatcher,
} from './hooks'
import { convertElement, initOverlay, toggle } from './utils'

export function useOverlay<TE extends OverlayElement = OverlayElement, OE extends OverlayElement = OverlayElement>(
  options: OverlayOptions = {},
): OverlayInstance<TE, OE> {
  const state = useState(options)
  const timer = useTimer()

  const visibility = useVisibility(state)
  const placement = usePlacement(state)
  const triggerRef = useElement<TE>()
  const overlayRef = useElement<OE>()

  const eventOptions: EventOptions = { visibility, timer, show, hide, state }

  const triggerEvents = useTriggerEvents(state, eventOptions)
  const overlayEvents = useOverlayEvents(state, eventOptions)

  const visibilityWatcher = useVisibilityWatcher(visibility, initialize)
  const placementWatcher = usePlacementWatcher(placement, initialize)

  // todo scroll watcher

  function initialize(): void {
    const triggerElement = convertElement(triggerRef)
    const overlayElement = convertElement(overlayRef)
    if (!triggerElement || !overlayElement) {
      return
    }
    if (!visibility.value) {
      return
    }
    initOverlay(overlayElement, triggerElement, eventOptions)
  }

  function show(showDelay = state.showDelay): void {
    toggle(true, showDelay, eventOptions)
  }

  function hide(hideDelay = state.hideDelay): void {
    toggle(false, hideDelay, eventOptions)
  }

  function update(options: Partial<OverlayOptions> = {}): void {
    Object.assign(state, options)
  }

  function destroy() {
    visibilityWatcher()
    placementWatcher()
  }

  return {
    initialize,
    show,
    hide,
    update,
    destroy,
    triggerRef,
    triggerEvents,
    overlayRef,
    overlayEvents,
    visibility,
    placement,
  }
}
