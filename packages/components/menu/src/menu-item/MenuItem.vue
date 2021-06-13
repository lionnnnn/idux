<template>
  <li :class="className" @click="handleClick">
    <span v-if="$slots.icon || icon" class="ix-menu-item-icon">
      <slot name="icon"><ix-icon :name="icon" /></slot>
    </span>
    <span class="ix-menu-item-content">
      <slot>{{ title }}</slot>
    </span>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IxIcon } from '@idux/components/icon'
import { menuItemProps } from './types'
import { useClassName, useSelected, useValue } from './hooks'
import { useStateProvider } from '../menu/hooks'

export default defineComponent({
  name: 'IxMenuItem',
  components: { IxIcon },
  props: menuItemProps,
  setup(props) {
    const menuStateProvider = useStateProvider()
    const value = useValue()
    const { selected, onSelect } = useSelected(value)
    const className = useClassName(selected)

    const handleClick = (event: MouseEvent) => {
      if (props.disabled) {
        return
      }
      menuStateProvider.value.onClick(event, value.value)
      onSelect(value.value)
    }

    return { className, handleClick }
  },
})
</script>
