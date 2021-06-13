<template>
  <ul :class="className">
    <slot />
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { menuProps } from './types'
import { useClassName, useOpenProvider, useSelectProvider, useState, useStateProvider } from './hooks'

export default defineComponent({
  name: 'IxMenu',
  props: menuProps,
  setup() {
    const state = useState()
    const className = useClassName(state)

    useStateProvider(state)
    useOpenProvider(state)
    useSelectProvider(state)

    return { className }
  },
})
</script>
