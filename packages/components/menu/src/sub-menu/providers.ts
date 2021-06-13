import type { ComputedRef, InjectionKey, Slot } from 'vue'
import type { SubMenuState, TimerProcessing } from './hooks'

export type SubMenuStateProvider = SubMenuState
export const subMenuStateProvider: InjectionKey<SubMenuStateProvider> = Symbol('subMenuState')

export type SubMenuSlotsProvider = ComputedRef<Record<'default' | 'title' | 'icon' | 'suffix', Slot>>
export const subMenuSlotsProvider: InjectionKey<SubMenuSlotsProvider> = Symbol('subMenuSlots')

export const subMenuTimerProvider: InjectionKey<TimerProcessing> = Symbol('subMenuTimer')
