<template>
  <ix-mentions v-model:value="text" :options="options"></ix-mentions>
  <ix-mentions v-model:value="text1" :options="options1"></ix-mentions>
  <ix-mentions v-model:value="text2">
    <ix-mentions-option value="lion"></ix-mentions-option>
    <ix-mentions-option value="lion1"></ix-mentions-option>
    <ix-mentions-option value="sheep"></ix-mentions-option>
    <ix-mentions-option value="sheep1"></ix-mentions-option>
    <ix-mentions-option value="fish"></ix-mentions-option>
  </ix-mentions>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const text = ref('@lion')
    const text1 = ref('')
    const text2 = ref('')
    const options = ['lion', 'lion1', 'sheep', 'sheep1', 'fish']
    const options1 = [
      {
        value: 'lion',
        disabled: true,
      },
      {
        value: 'lion1',
        disabled: true,
      },
      {
        value: 'sheep',
      },
      {
        value: 'sheep1',
      },
      {
        value: 'fish',
        disabled: true,
      },
    ]
    return {
      options,
      options1,
      text,
      text1,
      text2,
    }
  },
})
</script>
