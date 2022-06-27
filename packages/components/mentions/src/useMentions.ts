import { computed, ComputedRef, Ref, ref, watch, useSlots } from 'vue'
import { useValueAccessor } from '@idux/cdk/forms'
import { MentionsConfig } from '@idux/components/config'
import { callEmit } from '@idux/cdk/utils'
import { findLastIndex, findIndex, isString, replace, isFunction } from 'lodash-es'
import { MentionsOption, MentionsProps } from './types'

export const useMentionsOptions = (props: MentionsProps): ComputedRef<MentionsOption[]> => {
  return computed(() => {
    // support a string array or an object array
    if (props.options) {
      return props.options.map(item => ({
        disabled: (item as MentionsOption).disabled ?? false,
        value: isString(item) ? item : (item as MentionsOption).value,
      }))
    }

    if (useSlots().default) {
      return (
        useSlots()
          .default?.()
          .map(item => ({
            ...item.props,
            value: item.props?.value || '',
            disabled: item.props?.disabled ?? false,
            children: item,
          })) || []
      )
    }

    return []
  })
}

interface MentionsBindings {
  text: Ref<string>
  visible: Ref<boolean>
  selectedIds: Ref<string[]>
  currentOptions: Ref<MentionsOption[]>
  blur: () => void
  focus: () => void
  handleClickOutside: () => void
  handleInput: (evt: Event) => void
  handleMenuKeyDown: (evt: KeyboardEvent) => void
  handleMenuKeyUp: (evt: KeyboardEvent) => void
  setActiveValue: (value?: string) => void
  clickMentionsOption: (value: string) => void
}

interface MentionsOptionMap {
  value: string
  disabled?: boolean
  children?: any
  index: number
}

export const useMentionsBindings = (
  props: MentionsProps,
  config: MentionsConfig,
  options: ComputedRef<MentionsOption[]>,
  textareaRef: Ref<HTMLTextAreaElement>,
): MentionsBindings => {
  const valueAccessor = useValueAccessor()

  const text = ref('')
  const currentOptions = ref(options.value)
  const optionsMap = computed(() => {
    const map: Record<string, MentionsOptionMap> = {}
    options.value.forEach((item, index) => {
      map[item.value] = { ...item, index }
    })
    return map
  })

  watch(
    () => valueAccessor.value,
    () => {
      text.value = valueAccessor.value || ''
    },
    { immediate: true },
  )

  const visible = ref(false)
  const show = () => {
    visible.value = true
  }

  const hide = () => {
    visible.value = false
  }

  const handleClickOutside = () => {
    hide()
  }

  const selectedIds = ref<string[]>([])
  const setActiveValue = (value?: string) => {
    if (!value || optionsMap.value[value]?.disabled || !currentOptions.value.length) {
      return
    }
    selectedIds.value = [value]
  }

  const getFirstOptionValue = () => {
    const firstIndex = findIndex(currentOptions.value, item => !item.disabled)
    return firstIndex === -1 ? '' : currentOptions.value[firstIndex].value
  }
  setActiveValue(getFirstOptionValue())

  const currentPrefix = computed(() => props.prefix ?? config.prefix)
  const handleInput = (evt: Event) => {
    const { value: allText } = evt.target as HTMLInputElement
    callEmit(props.onChange, allText)
    valueAccessor.setValue?.(allText)

    const lastCharacter = allText.charAt(allText.length - 1)
    if (lastCharacter === currentPrefix.value) {
      // The first option needs to be selected by default
      setActiveValue(getFirstOptionValue())
      show()
    } else if (lastCharacter === currentSplit.value) {
      hide()
    }
  }

  const getSearchingOptions = (searchText: string): MentionsOption[] => {
    return options.value.filter(item => {
      if (isFunction(props.filterOption)) {
        return searchText ? props.filterOption(searchText, item.value) : true
      }
      return true
    })
  }

  const handleMenuKeyDown = (evt: KeyboardEvent) => {
    if (!visible.value) {
      if (evt.code === 'Backspace') {
        const restText = text.value.split('').slice(0, text.value.length - 1)
        const lastPrefixIndex = findLastIndex(restText, item => item === currentPrefix.value)
        const lastSplitIndex = findLastIndex(restText, item => item === currentSplit.value)
        if (lastPrefixIndex > lastSplitIndex) {
          show()
        }
      }
      return
    }

    const isAllDisabled = currentOptions.value.every(item => !!item.disabled)
    evt.stopPropagation()
    switch (evt.code) {
      case 'Escape': {
        hide()
        break
      }
      case 'Enter': {
        evt.preventDefault()
        if (isAllDisabled) {
          hide()
          return
        }

        const inputText = (evt.target as HTMLTextAreaElement)?.value || ''

        // stop select when inputting
        if (inputText.length > text.value.length) {
          return
        }

        // select the highlighted option
        const currentOptionValue = selectedIds.value[0]
        clickMentionsOption(currentOptionValue)
        hide()
        break
      }
      case 'ArrowDown': {
        evt.preventDefault()
        if (isAllDisabled) {
          return
        }
        const nextValue = currentOptions.value[getIndex(selectedIds.value[0], 1)]?.value
        nextValue && setActiveValue(nextValue)
        break
      }
      case 'ArrowUp': {
        evt.preventDefault()
        if (isAllDisabled) {
          return
        }
        const lastValue = currentOptions.value[getIndex(selectedIds.value[0], -1)]?.value
        lastValue && setActiveValue(lastValue)
        break
      }
      case 'Backspace': {
        if (text.value[text.value.length - 1] === currentPrefix.value) {
          hide()
        }
      }
    }
  }

  const getSearchingInfo = (allText: string = text.value): { text: string; reg: RegExp } => {
    const isTyped = allText.charAt(allText.length - 1) !== currentPrefix.value
    const reg = isTyped
      ? new RegExp('([^' + currentPrefix.value + ']+)$', 'g')
      : new RegExp('([^' + currentPrefix.value + ']*)$', 'g')

    return {
      text: allText.match(reg)?.[0] ?? '',
      reg,
    }
  }

  const handleMenuKeyUp = (evt: KeyboardEvent) => {
    if (!visible.value) {
      return
    }

    evt.stopPropagation()
    const inputText = (evt.target as HTMLTextAreaElement)?.value || ''
    switch (evt.code) {
      case 'Escape':
      case 'Enter':
      case 'ArrowDown':
      case 'ArrowUp':
        break
      default: {
        // search options
        const searchText = getSearchingInfo(inputText).text
        callEmit(props.onSearch, searchText)
        debugger
        currentOptions.value = getSearchingOptions(searchText)
        const firstValue = getFirstOptionValue()
        setActiveValue(firstValue)
      }
    }
  }

  const getIndex = (value: string, moveNumber: number): number => {
    let currentIndex = findIndex(currentOptions.value, item => item.value === value)
    // if failed to find the value selected now, select the first option
    if (currentIndex === -1) {
      return 0
    }

    do {
      currentIndex += moveNumber
      if (currentIndex === -1) {
        // less than 0, change to the last one
        currentIndex = currentOptions.value.length - 1
      } else if (currentIndex === currentOptions.value.length) {
        // greater than the biggest index, change to the first one
        currentIndex = 0
      }
    } while (currentOptions.value[currentIndex].disabled)
    return currentIndex
  }

  const currentSplit = computed(() => props.split ?? config.split)
  const clickMentionsOption = (value: string) => {
    if (!value || optionsMap.value[value]?.disabled || !currentOptions.value.length) {
      return
    }

    callEmit(props.onSelect, value)

    text.value = replace(text.value, getSearchingInfo().reg, value).concat(currentSplit.value)
    valueAccessor.setValue?.(text.value)
    focus()
  }

  const blur = () => {
    textareaRef.value.blur()
  }

  const focus = () => {
    textareaRef.value.focus()
  }

  return {
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
  }
}
