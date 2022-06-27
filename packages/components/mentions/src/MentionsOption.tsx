import { defineComponent, inject } from 'vue'
import { mentionsToken } from './token'
import { mentionsOptionProps } from './types'

export default defineComponent({
  name: 'IxMentionsOption',
  components: {},
  props: mentionsOptionProps,
  setup(props, { slots }) {
    const { setActiveValue, clickMentionsOption } = inject(mentionsToken) || {}

    const clickOption = () => {
      !props.disabled && clickMentionsOption?.(props.value)
    }

    const setActiveId = (value?: string) => {
      !props.disabled && setActiveValue?.(value)
    }
    return () => (
      <ix-menu-item
        cid={props.value}
        disabled={props.disabled}
        onMouseenter={() => {
          setActiveId(props.value)
        }}
        onClick={() => {
          clickOption()
        }}
        onMouseleave={() => {
          setActiveId()
        }}
      >
        {slots.default?.() ?? props.value}
      </ix-menu-item>
    )
  },
})
