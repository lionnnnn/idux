import type { ComputedRef, InjectionKey, UnwrapRef } from 'vue'
import type { MenuState } from './hooks'

export type MenuStateProvider = ComputedRef<
  Pick<UnwrapRef<MenuState>, 'collapsed' | 'indent' | 'mode' | 'onClick' | 'theme'>
>

export const menuStateProvider: InjectionKey<MenuStateProvider> = Symbol('menuState')

export type MenuSelectProvider = ComputedRef<{
  selected: (string | number)[]
  onSelect(select: string | number): void
}>

export const menuSelectProvider: InjectionKey<MenuSelectProvider> = Symbol('menuSelect')

export type MenuOpenProvider = ComputedRef<{
  opened: (string | number)[]
  onOpen(open: string | number): void
}>

export const menuOpenProvider: InjectionKey<MenuOpenProvider> = Symbol('menuOpen')
