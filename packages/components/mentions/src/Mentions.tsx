import { defineComponent, ref, provide, useAttrs, computed } from 'vue'
import { useGlobalConfig } from '@idux/components/config'
import { clickOutside } from '@idux/cdk/click-outside'
import { isString, omit } from 'lodash'
import { mentionsProp } from './types'
import { mentionsToken } from './token'
import { useMentionsBindings, useMentionsOptions } from './useMentions'

export default defineComponent({
  name: 'IxMentions',
  props: mentionsProp,
  directives: { clickOutside },
  setup(props, { expose }) {
    const normalOptions = useMentionsOptions(props)
    const textareaRef = ref(null as unknown as HTMLTextAreaElement)
    const config = useGlobalConfig('mentions')
    const {
      text,
      visible,
      selectedIds,
      currentOptions,
      blur,
      focus,
      handleClickOutside,
      handleInput,
      handleMenuKeyDown,
      handleMenuKeyUp,
      setActiveValue,
      clickMentionsOption,
    } = useMentionsBindings(props, config, normalOptions, textareaRef)

    provide(mentionsToken, {
      setActiveValue,
      clickMentionsOption,
    })

    expose({ blur, focus })

    const textareaProps = computed(() => {
      const attrs = useAttrs()
      return {
        resize: 'none',
        ...omit(attrs, ['class', 'style']),
        onBlur: props.onBlur,
        onInput: handleInput,
        onFocus: props.onFocus,
        onkeydown: handleMenuKeyDown,
        onkeyup: handleMenuKeyUp,
      }
    })

    const emptyProps = computed(() => (isString(props.empty) ? { description: props.empty } : props.empty || {}))
    const optionsGroupComp = computed(() =>
      props.options?.length
        ? currentOptions.value.map(option => <ix-mentions-option {...option}></ix-mentions-option>)
        : currentOptions.value.map(option => {
            return option.children
          }),
    )

    return () => (
      <div class="ix-mentions" v-click-outside={handleClickOutside}>
        {/* {selectedIds.value} value: {props.value} text: {text.value} */}
        <ix-dropdown
          trigger="manual"
          visible={visible.value}
          overlayClass={props.overlayClass}
          v-slots={{
            default: () => <ix-textarea ref={textareaRef} v-model={[text.value, 'value']} {...textareaProps.value} />,
            overlay: () => (
              <ix-menu class="ix-mentions-menu" selectedIds={selectedIds.value}>
                {optionsGroupComp.value.length ? (
                  optionsGroupComp.value
                ) : (
                  <ix-empty class="ix-option-container-empty" {...emptyProps.value} />
                )}
              </ix-menu>
            ),
          }}
        />
      </div>
    )
  },
})
