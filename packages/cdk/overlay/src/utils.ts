import type { Ref } from 'vue'
import type { EventOptions, OverlayElement, OverlayOptions, OverlayPlacement, OverlayTriggerEvents } from './types'

import domAlign from 'dom-align'
import { isHTMLElement } from '@idux/cdk/utils'

export function mapTriggerEvents(
  events: Array<keyof OverlayTriggerEvents>,
  { state, timer, show, hide, visibility }: EventOptions,
): OverlayTriggerEvents {
  let triggerFocus = false
  function triggerEventsHandler(event: Event): void {
    event.stopPropagation()
    switch (event.type) {
      case 'mouseenter':
        if (timer.value) {
          clearTimeout(timer.value)
          timer.value = null
        }
        show()
        break
      case 'mouseleave':
        hide()
        break
      case 'focus':
        triggerFocus = true
        show()
        break
      case 'blur':
        triggerFocus = false
        hide()
        break
      case 'click':
        if (triggerFocus) {
          triggerFocus = false
        } else {
          visibility.value && state.trigger === 'click' ? hide() : show()
        }
        break
      case 'contextmenu':
        event.preventDefault()
        show()
        break
    }
  }

  return events.reduce((obj, event) => {
    obj[event] = triggerEventsHandler
    return obj
  }, {} as OverlayTriggerEvents)
}

export function toggle(visible: boolean, delay: number, { state, timer }: EventOptions): void {
  const action = () => {
    state.visible = visible
  }
  if (!delay) {
    action()
  } else {
    timer.value = setTimeout(action, delay)
  }
}

export function convertElement(elementRef: Ref<OverlayElement | null>): HTMLElement | null {
  const element = elementRef.value
  if (!element) {
    return null
  }
  return isHTMLElement(element) ? element : element.$el
}

export function initOverlay(source: HTMLElement, target: HTMLElement, { state }: EventOptions): void {
  function getDomAlignOptions({ placement, offset, autoAdjust }: Required<OverlayOptions>): DomAlignConfig {
    function getPoints() {
      const placementMap: Record<OverlayPlacement, DomAlignConfig['points']> = {
        topStart: ['bl', 'tl'],
        top: ['bc', 'tc'],
        topEnd: ['br', 'tr'],
        bottomStart: ['tl', 'bl'],
        bottom: ['tc', 'bc'],
        bottomEnd: ['tr', 'br'],
        leftStart: ['tr', 'tl'],
        left: ['cr', 'cl'],
        leftEnd: ['br', 'bl'],
        rightStart: ['tl', 'tr'],
        right: ['cl', 'cr'],
        rightEnd: ['bl', 'br'],
      }

      return placementMap[placement]
    }

    return {
      points: getPoints(),
      offset,
      overflow: { adjustX: autoAdjust, adjustY: autoAdjust },
      useCssTransform: true,
    }
  }
  domAlign(source, target, getDomAlignOptions(state))
}
