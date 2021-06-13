<template>
  <ix-menu v-model:selected="selected" style="width: 256px">
    <ix-menu-item value="item1" icon="home">Item 1</ix-menu-item>
    <ix-menu-item value="item2" icon="mail">Item 2</ix-menu-item>
    <ix-menu-item value="item3" disabled icon="appstore">Item 3</ix-menu-item>
    <ix-menu-divider />
    <ix-sub-menu title="Sub Menu 1" icon="setting" value="subMenu1">
      <ix-menu-group title="Item Group 1">
        <ix-menu-item value="item4">Item 4</ix-menu-item>
        <ix-menu-item value="item5">Item 5</ix-menu-item>
      </ix-menu-group>
      <ix-menu-divider />
      <ix-sub-menu value="subMenu2">
        <template #title><span>Sub Menu 2</span></template>
        <ix-menu-item value="item6">Item 6</ix-menu-item>
        <ix-menu-item value="item7">Item 7</ix-menu-item>
      </ix-sub-menu>
      <ix-sub-menu title="Sub Menu 3" value="subMenu3">
        <ix-menu-item value="item8">Item 8</ix-menu-item>
        <ix-menu-item value="item9">Item 9</ix-menu-item>
      </ix-sub-menu>
    </ix-sub-menu>
    <ix-sub-menu title="SubMenu 4" icon="github" value="subMenu4">
      <ix-menu-item value="item10">Item 10</ix-menu-item>
      <ix-menu-item value="11">Item 11</ix-menu-item>
    </ix-sub-menu>
  </ix-menu>
</template>

<script>
export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      selected: [],
    }
  },
}
</script>
