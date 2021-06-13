<template>
  <ix-popover v-model:visible="visible" title="Title" content="Content">
    <span>Tooltip will show when it's click.</span>
  </ix-popover>
  <ix-button @click.stop="toggle">toggle</ix-button>
</template>

<script lang="ts">
import { ComputedRef, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'VModel',

  setup() {
    const visible = ref(false)

    const toggle = () => {
      visible.value = !visible.value
    }

    const change = (e: ComputedRef<boolean>) => {
      visible.value = e.value
    }

    return { visible, toggle, change }
  },
})
</script>
