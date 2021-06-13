<template>
  <ix-menu class="header-menu" mode="horizontal" :selectedIds="selectedIds">
    <ix-menu-item value="docs">
      <router-link :to="'/docs/introduce/' + lang">
        <span>{{ lang == 'zh' ? '文档' : 'Docs' }}</span>
      </router-link>
    </ix-menu-item>
    <ix-menu-item value="components">
      <router-link :to="'/components/button/' + lang">
        <span>{{ lang == 'zh' ? '基础组件' : 'Components' }}</span>
      </router-link>
    </ix-menu-item>
    <ix-menu-item value="cdk">
      <router-link :to="'/cdk/breakpoint/' + lang">
        <span>{{ lang == 'zh' ? '开发套件' : 'CDK' }}</span>
      </router-link>
    </ix-menu-item>
  </ix-menu>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from 'vue'
import { appContextToken } from '../../context'

export default defineComponent({
  setup() {
    const { lang, page } = inject(appContextToken)!
    const selectedIds = computed(() => [page.value])
    return { lang, selectedIds }
  },
})
</script>
