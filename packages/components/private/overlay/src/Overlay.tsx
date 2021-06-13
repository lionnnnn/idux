import type { Slots } from 'vue'
import type { OverlayElement } from '@idux/cdk/overlay'
import type { OverlayProps } from './types'

import { cloneVNode, defineComponent, onMounted, ref, resolveDirective, Transition, withDirectives } from 'vue'
import { kebabCase } from 'lodash'
import { clickOutside } from '@idux/cdk/click-outside'
import { useOverlay } from '@idux/cdk/overlay'
import { getFirstValidNode, getSlotNodes } from '@idux/cdk/utils'
import { IxPortal } from '@idux/cdk/portal'
import { overlayProps } from './types'
import { useLogger, useRenderValid, useWatch } from './hooks'
import { getOverlayOptions } from './utils'
import { convertElement } from '@idux/cdk/overlay/src/utils'

export default defineComponent({
  name: 'IxOverlay',
  components: { IxPortal },
  directives: { clickOutside },
  props: overlayProps,
  setup(props) {
    useLogger()

    const {
      initialize,
      overlayRef,
      overlayEvents,
      triggerRef,
      triggerEvents,
      visibility,
      placement,
      update,
      hide,
    } = useOverlay(getOverlayOptions(props))
    const renderValid = useRenderValid()

    useWatch(visibility, placement, update)

    onMounted(initialize)

    return { triggerEvents, hide, overlayRef, overlayEvents, triggerRef, visibility, renderValid, placement }
  },
  render() {
    const {
      overlayRef,
      triggerEvents,
      hide,
      renderValid,
      $slots,
      overlayEvents,
      clsPrefix,
      visibility,
      visibleTransition,
      showArrow,
      placement,
      destroyOnHide,
      $props,
    } = this

    if (!renderValid) {
      return null
    }

    const trigger = getTrigger($props, $slots, { ref: 'triggerRef', ...triggerEvents }, hide, overlayRef)
    const overlay = getFirstValidNode(getSlotNodes($slots, 'overlay'))!

    return (
      <>
        {trigger}
        <IxPortal target={`${clsPrefix}-container`}>
          <Transition name={visibleTransition}>
            {destroyOnHide ? (
              visibility && (
                <div
                  ref="overlayRef"
                  class={[clsPrefix, 'ix-overlay', `ix-overlay-${kebabCase(placement)}`]}
                  {...overlayEvents}
                >
                  {showArrow && <div class={['ix-overlay-arrow', `${clsPrefix}-arrow`]} />}
                  <div class={`${clsPrefix}-content`}>{overlay}</div>
                </div>
              )
            ) : (
              <div
                ref="overlayRef"
                v-show={visibility}
                class={[clsPrefix, 'ix-overlay', `ix-overlay-${kebabCase(placement)}`]}
                {...overlayEvents}
              >
                {showArrow && <div class={['ix-overlay-arrow', `${clsPrefix}-arrow`]} />}
                <div class={`${clsPrefix}-content`}>{overlay}</div>
              </div>
            )}
          </Transition>
        </IxPortal>
      </>
    )
  },
})

function getTrigger(
  props: OverlayProps,
  slots: Slots,
  extraProps: Record<string, any>,
  hide: () => void,
  overlay: OverlayElement | null,
) {
  const overlayElement = convertElement(ref(overlay))
  const element = cloneVNode(getFirstValidNode(getSlotNodes(slots, 'trigger'))!, extraProps)
  if (props.trigger === 'click') {
    return withDirectives(element, [
      [
        resolveDirective('click-outside')!,
        {
          exclude: [overlayElement],
          handler: () => hide(),
        },
      ],
    ])
  }
  return element
}
