<template>
  <div class="list">
    <div class="top">
      <h2 class="title">List {{ list.id }}</h2>
      <BasicButton
        v-if="isItemsSelected"
        @click="sorted = !sorted"
        >{{ sorted ? 'Shuffle' : 'Sort' }}</BasicButton
      >
    </div>

    <div v-if="sorted">
      <ul
        v-for="item in selectedItems"
        :key="`item ${item.id}`"
      >
        <li
          class="block"
          v-for="num in item.count"
          :key="`block ${num}`"
          :style="{ background: item.color }"
          @click="store.decreaseCount(list.id, item.id)"
        ></li>
      </ul>
    </div>
    <ul v-else>
      <li
        v-for="(block, index) in shuffledBlocks"
        class="block"
        :key="`block ${index}`"
        :style="{ background: list.items[block - 1].color }"
        @click="store.decreaseCount(list.id, block)"
      ></li>
    </ul>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import BasicButton from './UI/BasicButton.vue';
  import { useListsStore } from '../stores/lists';

  const store = useListsStore();

  const props = defineProps({
    list: Object,
  });

  const sorted = ref(true);

  const selectedItems = computed(() => {
    return [...props.list.items].filter(item => item.selected === true);
  });

  const isItemsSelected = computed(() => {
    if (selectedItems.value.length) return true;
    return false;
  });

  const shuffledBlocks = computed(() => {
    let result = [];

    for (const item of props.list.items) {
      if (item.selected === true) {
        for (let i = 0; i < item.count; i++) {
          result.push(item.id);
        }
      }
    }

    result = result
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    return result;
  });
</script>

<style lang="scss" scoped>
  .list {
    padding: 32px;
    border-radius: 8px;
    background: #f7f7f7;
  }
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .title {
    font-weight: 800;
  }

  .block {
    cursor: pointer;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 4px;
    margin-bottom: 8px;
    border-radius: 4px;
  }
</style>
