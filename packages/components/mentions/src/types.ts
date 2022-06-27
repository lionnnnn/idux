/* eslint-disable @typescript-eslint/no-explicit-any */
import type { DefineComponent, HTMLAttributes } from 'vue'
import type { IxInnerPropTypes, IxPublicPropTypes } from '@idux/cdk/utils'
import type { EmptyProps } from '@idux/components/empty'

import { IxPropTypes } from '@idux/cdk/utils'

export type MentionsFilterFn = (searchValue: string, optionValue: string) => boolean

const defaultFilterOption = (searchValue: string, optionValue: string): boolean => {
  return optionValue.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
}

export const mentionsProp = {
  value: IxPropTypes.string,
  empty: IxPropTypes.oneOfType([String, IxPropTypes.object<EmptyProps>()]),
  options: IxPropTypes.oneOfType([IxPropTypes.array<MentionsOption>(), IxPropTypes.array<string>()]),
  overlayClass: IxPropTypes.string,
  prefix: IxPropTypes.string,
  filterOption: IxPropTypes.oneOfType([IxPropTypes.func<MentionsFilterFn>(), Boolean]).def(defaultFilterOption),
  split: IxPropTypes.string,
  onBlur: IxPropTypes.func<() => void>(),
  onChange: IxPropTypes.func<(value: string) => void>(),
  onFocus: IxPropTypes.func<() => void>(),
  onSelect: IxPropTypes.func<(value: string) => void>(),
  onSearch: IxPropTypes.func<(searchText: string) => void>(),
}

export type MentionsProps = IxInnerPropTypes<typeof mentionsProp>
export type MentionsPublicProps = IxPublicPropTypes<typeof mentionsProp>
export interface MentionsBindings {
  blur: () => void
  focus: () => void
}

export type MentionsComponent = DefineComponent<HTMLAttributes & typeof mentionsProp, MentionsBindings>
export type MentionsInstance = InstanceType<DefineComponent<MentionsProps, MentionsBindings>>

export interface MentionsOption {
  value: string
  disabled?: boolean
  children?: any
}

export const mentionsOptionProps = {
  value: IxPropTypes.string.isRequired,
  disabled: IxPropTypes.bool.def(false),
}

export type MentionsOptionProps = IxInnerPropTypes<typeof mentionsOptionProps>
export type MentionsOptionPublicProps = IxPublicPropTypes<typeof mentionsOptionProps>
export type MentionsOptionComponent = DefineComponent<HTMLAttributes & typeof mentionsOptionProps>
export type MentionsOptionInstance = InstanceType<DefineComponent<MentionsProps>>
