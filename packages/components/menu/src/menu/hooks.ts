import type { ComputedRef } from 'vue'
import type { MenuProps } from './types'
import type { MenuOpenProvider, MenuSelectProvider, MenuStateProvider } from './providers'

import { computed, getCurrentInstance, inject, provide, ref, watch } from 'vue'
import { useGlobalConfig } from '@idux/components/config'
import { xor } from 'lodash'
import { menuOpenProvider, menuSelectProvider, menuStateProvider } from './providers'

export type MenuState = ComputedRef<Required<MenuProps>>

export function useState(): MenuState {
  const props = getCurrentInstance()!.props as MenuProps
  const config = useGlobalConfig('menu')

  return computed(() => Object.assign({}, props, config))
}

export function useClassName(state: MenuState): ComputedRef<string[]> {
  return computed(() => ['ix-menu', `ix-menu-${state.value.mode}`, `ix-menu-${state.value.theme}`])
}

export function useStateProvider(state: MenuState): void
export function useStateProvider(): MenuStateProvider
export function useStateProvider(state?: MenuState): MenuStateProvider | void {
  if (!state) {
    return inject(
      menuStateProvider,
      computed(() => ({
        collapsed: false,
        indent: 12,
        mode: 'vertical',
        theme: 'light',
        onClick: () => {},
      })),
    )
  }

  provide(
    menuStateProvider,
    computed(() => ({
      collapsed: state.value.collapsed,
      indent: state.value.indent,
      mode: state.value.mode,
      theme: state.value.theme,
      onClick: state.value.onClick,
    })),
  )
}

export function useSelectProvider(state: MenuState): void
export function useSelectProvider(): MenuSelectProvider
export function useSelectProvider(state?: MenuState): MenuSelectProvider | void {
  if (!state) {
    return inject(
      menuSelectProvider,
      computed(() => ({
        selected: [],
        onSelect: () => {},
      })),
    )
  }

  const selected = ref(state.value.selected)

  watch(
    () => state.value.selected,
    value => {
      if (!state.value.selectable) {
        return
      }
      selected.value = value
    },
  )

  const handleSelect = (select: number | string): void => {
    if (!state.value.selectable) {
      return
    }
    if (state.value.multiple) {
      selected.value = xor(selected.value, [select])
    } else {
      selected.value = [select]
    }
    state.value['onUpdate:selected'](selected.value)
  }

  provide(
    menuSelectProvider,
    computed(() => ({ selected: selected.value, onSelect: handleSelect })),
  )
}

export function useOpenProvider(state: MenuState): void
export function useOpenProvider(): MenuOpenProvider
export function useOpenProvider(state?: MenuState): MenuOpenProvider | void {
  if (!state) {
    return inject(
      menuOpenProvider,
      computed(() => ({
        opened: [],
        onOpen: () => {},
      })),
    )
  }

  const opened = ref(state.value.opened)

  watch(
    () => state.value.opened,
    value => {
      opened.value = value
    },
  )

  const handleOpen = (value: string | number): void => {
    if (state.value.singleOpen) {
      opened.value = [value]
    } else {
      opened.value = xor(opened.value, [value])
    }
    state.value['onUpdate:opened'](opened.value)
  }

  provide(
    menuOpenProvider,
    computed(() => ({ opened: opened.value, onOpen: handleOpen })),
  )
}
