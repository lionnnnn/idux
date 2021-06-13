import type { ComputedRef, Ref, Slots, UnwrapRef } from 'vue'
import type { SubMenuProps } from './types'
import type { SubMenuSlotsProvider, SubMenuStateProvider } from './providers'

import { computed, getCurrentInstance, inject, provide, ref } from 'vue'
import { useGlobalConfig } from '@idux/components/config'
import { useOpenProvider, useSelectProvider, useStateProvider } from '../menu/hooks'
import { subMenuSlotsProvider, subMenuStateProvider, subMenuTimerProvider } from './providers'

export type SubMenuValue = ComputedRef<string | number>
export type SubMenuState = ComputedRef<Omit<Required<SubMenuProps>, 'icon'> & { icon: SubMenuProps['icon'] }>

export function useValue(): SubMenuValue {
  const { props, uid } = getCurrentInstance()!

  return computed(() => (props as SubMenuProps).value ?? uid)
}

export function useState(value: SubMenuValue): SubMenuState {
  const config = useGlobalConfig('subMenu')
  const props = getCurrentInstance()!.props as SubMenuProps

  return computed(() => Object.assign({}, props, { value: value.value }, config) as UnwrapRef<SubMenuState>)
}

export function useStatus(value: SubMenuValue): { selected: ComputedRef<boolean>; opened: ComputedRef<boolean> } {
  const selectProvider = useSelectProvider()
  const openProvider = useOpenProvider()

  const selected = computed(() => selectProvider.value.selected.includes(value.value))
  const opened = computed(() => openProvider.value.opened.includes(value.value))

  return { selected, opened }
}

export function useClassName(
  state: SubMenuState,
  { selected, opened }: ReturnType<typeof useStatus>,
): ComputedRef<(string | Record<string, boolean>)[]> {
  const menuStateProvider = useStateProvider()

  return computed(() => [
    'ix-menu-sub',
    `ix-menu-sub-${menuStateProvider.value.mode}`,
    {
      'ix-menu-sub-disabled': state.value.disabled,
      'ix-menu-sub-opened': opened.value,
      'ix-menu-sub-selected': selected.value,
    },
  ])
}

export function useIsInline(): ComputedRef<boolean> {
  const menuStateProvider = useStateProvider()
  return computed(() => menuStateProvider.value.mode === 'inline')
}

export function useSubMenuStateProvider(): SubMenuStateProvider
export function useSubMenuStateProvider(state: SubMenuState): void
export function useSubMenuStateProvider(state?: SubMenuState): SubMenuStateProvider | void {
  if (!state) {
    return inject(subMenuStateProvider)
  }
  provide(subMenuStateProvider, state)
}

export function useSlots(): SubMenuSlotsProvider
export function useSlots(slot: Slots): void
export function useSlots(slots?: Slots): SubMenuSlotsProvider | void {
  if (!slots) {
    return inject(subMenuSlotsProvider)
  }
  provide(
    subMenuSlotsProvider,
    computed(() => slots),
  )
}

export function useOpened(
  state: SubMenuStateProvider,
): { opened: ComputedRef<boolean>; onOpen(value: UnwrapRef<SubMenuValue>): void } {
  const openProvider = useOpenProvider()

  const opened = computed(() => openProvider.value.opened.includes(state.value.value))

  const handleOpen = openProvider.value.onOpen

  return { opened, onOpen: handleOpen }
}

export function useRotate(opened: ComputedRef<boolean>): ComputedRef<number> {
  const menuStateProvider = useStateProvider()
  const subMenuStateProvider = useSubMenuStateProvider()

  return computed(() => {
    if (menuStateProvider.value.mode === 'inline' && subMenuStateProvider.value) {
      const [expanded, collapsed] = subMenuStateProvider.value.suffixRotates
      return opened.value ? expanded : collapsed
    }
    return 0
  })
}

export function useVisible(): ComputedRef<boolean> {
  const openProvider = useOpenProvider()
  const subMenuStateProvider = useSubMenuStateProvider()

  return computed(() => {
    return openProvider.value.opened.includes(subMenuStateProvider.value.value)
  })
}

export type TimerProcessing = [
  Ref<number | null>,
  { onDelay: (fn: () => void, delay: number) => void; onCancel: () => void },
]

export function useTimer(): TimerProcessing {
  const timerRef = ref<number | null>(null)

  const onDelay = (fn: () => void, delay: number) => {
    timerRef.value = setTimeout(fn, delay)
  }

  const onCancel = () => {
    clearTimeout(timerRef.value!)
    timerRef.value = null
  }

  provide(subMenuTimerProvider, [timerRef, { onDelay, onCancel }])

  return [timerRef, { onDelay, onCancel }]
}
