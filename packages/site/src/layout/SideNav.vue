<template>
  <ix-menu class="side-nav" mode="inline" :indent="48" :selectedIds="selectedIds">
    <template v-if="page === 'docs'">
      <ix-menu-item v-for="docs in config.docs" v-show="docs.lang === lang" :key="docs.path" :value="docs.path">
        <router-link :to="docs.path">
          <span>{{ docs.title }}</span>
        </router-link>
      </ix-menu-item>
    </template>
    <template v-if="page === 'components'">
      <ix-menu-group
        v-for="group in config.components"
        v-show="group.lang === lang"
        :key="group.name"
        :title="group.name"
      >
        <ix-menu-item v-for="component in group.children" :key="component.path" :value="component.path">
          <router-link :to="component.path">
            <ix-space>
              <span>{{ component.title }}</span>
              <span>{{ component.subtitle }}</span>
            </ix-space>
          </router-link>
        </ix-menu-item>
      </ix-menu-group>
    </template>
    <template v-if="page === 'cdk'">
      <ix-menu-item v-for="cdk in config.cdk" v-show="cdk.lang === lang" :key="cdk.path" :value="cdk.path">
        <router-link :to="cdk.path">
          <ix-space>
            <span>{{ cdk.title }}</span>
            <span>{{ cdk.subtitle }}</span>
          </ix-space>
        </router-link>
      </ix-menu-item>
    </template>
  </ix-menu>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from 'vue'
import { appContextToken } from '../context'
import { config } from '../sideNav'

export default defineComponent({
  setup() {
    const { lang, page, path } = inject(appContextToken)!
    const selectedIds = computed(() => [path.value])
    return { lang, page, selectedIds, config }
  },
})
</script>
