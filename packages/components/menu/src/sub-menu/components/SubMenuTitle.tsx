import type { UnwrapRef } from 'vue'
import type { SubMenuState } from '../hooks'
import type { SubMenuSlotsProvider } from '../providers'

import { computed, defineComponent, inject, ref } from 'vue'
import { getFirstValidNode, getSlotNodes, hasSlot } from '@idux/cdk/utils'
import { IxIcon } from '@idux/components/icon'
import { useOpened, useRotate, useSlots, useSubMenuStateProvider } from '../hooks'
import { useStateProvider } from '../../menu/hooks'
import { subMenuTimerProvider } from '../providers'

export default defineComponent({
  name: 'IxSubMenuTitle',
  setup() {
    const slots = useSlots()
    const subMenuStateProvider = useSubMenuStateProvider()
    const menuStateProvider = useStateProvider()
    const { opened, onOpen } = useOpened(subMenuStateProvider)
    const rotate = useRotate(opened)

    const hasIcon = useHasElement(subMenuStateProvider, slots, 'icon')
    const hasSuffix = useHasElement(subMenuStateProvider, slots, 'suffix')

    const [timerRef, { onDelay, onCancel }] = inject(subMenuTimerProvider, [
      ref(null),
      { onDelay: () => {}, onCancel: () => {} },
    ])

    const handleClick = (event: MouseEvent) => {
      if (subMenuStateProvider.value.disabled) {
        return
      }
      subMenuStateProvider.value.onClick(event, subMenuStateProvider.value.value)
      if (menuStateProvider.value.mode === 'inline') {
        onOpen(subMenuStateProvider.value.value)
      }
    }

    const handleMouseEnter = () => {
      if (timerRef.value) {
        onCancel()
      } else {
        onDelay(() => {
          if (subMenuStateProvider.value.disabled) {
            return
          }
          onOpen(subMenuStateProvider.value.value)
        }, 100)
      }
    }

    const handleMouseLeave = () => {
      onDelay(() => {
        onOpen(subMenuStateProvider.value.value)
        onCancel()
      }, 30)
    }

    return { slots, hasIcon, hasSuffix, subMenuStateProvider, rotate, handleClick, handleMouseEnter, handleMouseLeave }
  },
  render() {
    const {
      slots,
      hasIcon,
      hasSuffix,
      subMenuStateProvider,
      rotate,
      handleClick,
      handleMouseEnter,
      handleMouseLeave,
    } = this
    const icon = getElement(slots, subMenuStateProvider, 'icon')
    const title = getElement(slots, subMenuStateProvider, 'title')
    const suffix = getElement(slots, subMenuStateProvider, 'suffix', { rotate })

    return (
      <div
        class="ix-menu-sub-title"
        onClick={handleClick}
        onMouseenter={handleMouseEnter}
        onMouseleave={handleMouseLeave}
      >
        {hasIcon && <span class="ix-menu-sub-title-icon">{icon}</span>}
        <span class="ix-menu-sub-title-content">{title}</span>
        {hasSuffix && <span class="ix-menu-sub-title-suffix">{suffix}</span>}
      </div>
    )
  },
})

function useHasElement(
  state: SubMenuState,
  slots: SubMenuSlotsProvider,
  key: Exclude<keyof UnwrapRef<SubMenuSlotsProvider>, 'default'>,
) {
  return computed(() => hasSlot(slots.value, key) || state.value[key])
}

function getElement(
  slots: UnwrapRef<SubMenuSlotsProvider>,
  state: UnwrapRef<SubMenuState>,
  key: Exclude<keyof UnwrapRef<SubMenuSlotsProvider>, 'default'>,
  extraProps: Record<string, any> = {},
) {
  const vNode = getFirstValidNode(getSlotNodes(slots, key))
  if (vNode) {
    return vNode
  }

  return key === 'title' ? state.title : <IxIcon name={state[key]} {...extraProps} />
}
