<template>
  <IxUpload v-model:files="files" action="https://run.mocky.io/v3/7564bc4f-780e-43f7-bc58-467959ae3354" dragable>
    <div class="drag-panel">
      <IxIcon name="upload" class="drag-panel-icon"></IxIcon>
      <p>Drag and drop files or click to select files to upload.</p>
    </div>
    <template #list>
      <IxUploadFiles type="text" />
    </template>
  </IxUpload>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const files = ref([])
</script>

<style lang="less" scoped>
.drag-panel {
  width: 600px;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &-icon {
    font-size: 24px;
  }
}
</style>
