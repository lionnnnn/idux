<template>
  <ix-overlay
    v-model:visible="visibility"
    cls-prefix="ix-tooltip"
    allow-enter
    scroll-strategy="close"
    v-bind="config"
    :offset="offset"
  >
    <template #trigger>
      <slot />
    </template>
    <template #overlay>
      <slot name="title">{{ title }}</slot>
    </template>
  </ix-overlay>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IxOverlay } from '@idux/components/private/overlay'
import { tooltipProps } from './types'
import { useConfig, useOffset, useVisibility } from './hooks'

export default defineComponent({
  name: 'IxTooltip',
  components: { IxOverlay },
  props: tooltipProps,
  setup() {
    const config = useConfig()
    const visibility = useVisibility()
    const offset = useOffset(config)

    return { config, visibility, offset }
  },
})
</script>
