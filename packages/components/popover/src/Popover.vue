<template>
  <ix-overlay
    v-model:visible="visibility"
    cls-prefix="ix-popover"
    allow-enter
    scroll-strategy="close"
    v-bind="config"
    :offset="offset"
  >
    <template #trigger>
      <slot />
    </template>
    <template #overlay>
      <div>
        <div class="ix-popover-title">
          <slot name="title">{{ title }}</slot>
        </div>
        <div class="ix-popover-inner-content">
          <slot name="content">{{ content }}</slot>
        </div>
      </div>
    </template>
  </ix-overlay>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IxOverlay } from '@idux/components/private/overlay'
import { popoverProps } from './types'
import { useConfig, useOffset, useVisibility } from './hooks'

export default defineComponent({
  name: 'IxPopover',
  components: { IxOverlay },
  props: popoverProps,
  setup() {
    const config = useConfig()
    const visibility = useVisibility()
    const offset = useOffset(config)

    return { config, visibility, offset }
  },
})
</script>
