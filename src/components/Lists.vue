<template>
  <ul class="lists">
    <li
      class="list"
      v-for="list in lists"
      :key="list.id"
    >
      <List :list="list" />
    </li>
  </ul>
</template>

<script setup>
  import List from './List.vue';

  const props = defineProps({
    lists: Array,
  });
</script>

<style lang="scss" scoped>
  .list {
    margin-bottom: 24px;

    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
