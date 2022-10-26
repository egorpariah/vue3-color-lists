<template>
  <li class="item">
    <BasicCheckbox
      :id="`list-${listId}-item-${item.id}`"
      :label="`Item ${item.id}`"
      :modelValue="isItemChecked"
      @update:modelValue="checked => changeSelected(checked, listId, item.id)"
    />

    <div class="color-controls">
      <input
        class="counter"
        type="number"
        min="0"
        :value="item.count"
        @input="
          $event => changeCount(Number($event.target.value), listId, item.id)
        "
      />

      <input
        class="color"
        type="color"
        :value="item.color"
        @input="$event => changeColor($event.target.value, listId, item.id)"
      />
    </div>
  </li>
</template>

<script setup>
  import { computed } from 'vue';
  import { useListsStore } from '../stores/lists';
  import BasicCheckbox from './UI/BasicCheckbox.vue';

  const store = useListsStore();
  const { changeSelected, changeCount, changeColor } = store;

  const props = defineProps({
    item: Object,
    listId: Number,
  });
  const isItemChecked = computed(() => {
    return store.data[props.listId - 1].items[props.item.id - 1].selected;
  });
</script>

<style lang="scss" scoped>
  .item {
    padding: 8px;
    border-radius: 8px;
    background: #f7f7f7;
    display: flex;
    align-items: center;
    list-style: none;
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .color-controls {
    display: flex;
    align-items: center;
    margin-left: auto;
  }

  .counter {
    margin-right: 8px;
    font-family: inherit;
    height: 32px;
    border-radius: 8px;
    border: none;
    background-color: #ffffff;
    padding: 0 16px;
    width: 80px;
  }

  .color {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    width: 32px;
    height: 32px;
  }

  ::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  ::-webkit-color-swatch {
    border: 0;
    border-radius: 8px;
  }

  ::-moz-color-swatch,
  ::-moz-focus-inner {
    border: 0;
  }

  ::-moz-focus-inner {
    padding: 0;
  }

  @media screen and (max-width: 767px) {
    .item {
      flex-direction: column;
      align-items: start;
    }

    .color-controls {
      width: 100%;
      margin-top: 8px;
      margin-left: 0;
    }

    .counter {
      flex-grow: 1;
    }
  }
</style>
