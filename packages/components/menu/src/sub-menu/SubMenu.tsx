import type { ComputedRef, SetupContext } from 'vue'

import { defineComponent } from 'vue'
import { subMenuProps } from './types'
import { useClassName, useIsInline, useSlots, useState, useStatus, useSubMenuStateProvider, useValue } from './hooks'

import SubMenuContent from './components/SubMenuContent'
import SubMenuInlineContent from './components/SubMenuInlineContent'

export default defineComponent({
  name: 'IxSubMenu',
  props: subMenuProps,
  setup(_, { slots }: SetupContext) {
    const value = useValue()
    const state = useState(value)
    const status = useStatus(value)
    const className = useClassName(state, status)
    const isInline = useIsInline()
    const content = useContent(isInline)

    useSubMenuStateProvider(state)
    useSlots(slots)

    return { className, content }
  },
  render() {
    const { className, content } = this

    return <li class={className}>{content}</li>
  },
})

function useContent(isInline: ComputedRef<boolean>) {
  const Component = isInline.value ? SubMenuInlineContent : SubMenuContent
  return <Component />
}
