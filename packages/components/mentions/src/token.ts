/* eslint-disable @typescript-eslint/no-explicit-any */
import type { InjectionKey } from 'vue'
export interface MentionsInjection {
  setActiveValue: (value?: string) => void
  clickMentionsOption: (value: string) => void
}

export const mentionsToken: InjectionKey<MentionsInjection> = Symbol('mentionsToken')
