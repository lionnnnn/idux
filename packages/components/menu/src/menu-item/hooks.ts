import type { ComputedRef, UnwrapRef } from 'vue'
import type { MenuItemProps } from './types'

import { computed, getCurrentInstance } from 'vue'
import { useSelectProvider } from '../menu/hooks'

export type MenuItemValue = ComputedRef<string | number>

export function useValue(): MenuItemValue {
  const { props, uid } = getCurrentInstance()!

  return computed(() => (props as MenuItemProps).value ?? uid)
}

export function useSelected(
  value: MenuItemValue,
): { selected: ComputedRef<boolean>; onSelect(value: UnwrapRef<MenuItemValue>): void } {
  const selectProvider = useSelectProvider()

  const selected = computed(() => selectProvider.value.selected.includes(value.value))

  const onSelect = selectProvider.value.onSelect

  return { selected, onSelect }
}

export function useClassName(selected: ComputedRef<boolean>): ComputedRef<(string | Record<string, boolean>)[]> {
  const props = getCurrentInstance()!.props as MenuItemProps

  return computed(() => [
    'ix-menu-item',
    {
      'ix-menu-item-disabled': props.disabled,
      'ix-menu-item-selected': selected.value,
    },
  ])
}
