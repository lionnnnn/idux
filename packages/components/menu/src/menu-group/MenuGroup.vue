<template>
  <li class="ix-menu-group">
    <div class="ix-menu-group-title">
      <span v-if="$slots.icon || icon" class="ix-menu-group-title-icon">
        <slot name="icon">
          <ix-icon :name="icon" />
        </slot>
      </span>
      <span class="ix-menu-group-title-content">
        <slot name="title">{{ title }}</slot>
      </span>
    </div>
    <ul class="ix-menu-group-content">
      <slot />
    </ul>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IxIcon } from '@idux/components/icon'
import { menuGroupProps } from './types'

export default defineComponent({
  name: 'IxMenuGroup',
  components: { IxIcon },
  props: menuGroupProps,
})
</script>
