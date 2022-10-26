<template>
  <ul>
    <ColorList
      class="color-list"
      v-for="list in lists"
      :key="list.id"
      :list="list"
    />
  </ul>
</template>

<script setup>
  import ColorList from './ColorList.vue';

  const props = defineProps({
    lists: Array,
  });
</script>

<style lang="scss" scoped>
  .color-list {
    margin-bottom: 24px;

    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
