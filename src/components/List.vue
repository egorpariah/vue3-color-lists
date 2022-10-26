<template>
  <ul class="list">
    <div class="title-block">
      <button
        :class="['fold', { 'fold--expanded': !isFolded }]"
        @click="isFolded = !isFolded"
      >
        <DropDown class="icon" />
      </button>

      <BasicCheckbox
        :id="`list-${list.id}`"
        :label="`List ${list.id}`"
        v-model="isListChecked"
        :indeterminate="isListIndeterminate"
      />
    </div>

    <Transition>
      <ul
        class="items"
        v-show="!isFolded"
      >
        <Item
          v-for="item in list.items"
          :key="item.id"
          :item="item"
          :listId="list.id"
        />
      </ul>
    </Transition>
  </ul>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import { useListsStore } from '../stores/lists';
  import Item from './Item.vue';
  import DropDown from '../assets/svg/drop-down.svg';
  import BasicCheckbox from './UI/BasicCheckbox.vue';

  const store = useListsStore();
  const { changeSelected } = store;

  const props = defineProps({
    list: Object,
  });

  const isFolded = ref(true);

  const isListChecked = computed({
    get() {
      for (const item of store.data[props.list.id - 1].items) {
        if (item.selected === false) return false;
      }

      return true;
    },
    set(NewValue) {
      if (NewValue === false) {
        for (const item of props.list.items) {
          changeSelected(false, props.list.id, item.id);
        }
        return;
      }

      for (const item of props.list.items) {
        changeSelected(true, props.list.id, item.id);
      }
    },
  });

  const isListIndeterminate = computed(() => {
    const selected = { isHasSelected: false, isHasUnselected: false };

    for (const item of store.data[props.list.id - 1].items) {
      if (item.selected === true) {
        selected.isHasSelected = true;
      } else {
        selected.isHasUnselected = true;
      }
    }

    if (selected.isHasSelected && selected.isHasUnselected) return true;

    return false;
  });
</script>

<style lang="scss" scoped>
  .v-enter-active,
  .v-leave-active {
    transition: all 0.4s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
    transform: translateY(-100%);
  }

  .list {
    overflow: hidden;
    position: relative;
  }

  .title-block {
    z-index: 10;
    margin-left: 48px;
    position: relative;
    padding: 8px;
    border-radius: 8px;
    background: #f7f7f7;
    display: flex;
    align-items: center;
    height: 48px;
  }

  .items {
    margin-left: 96px;
    margin-top: 16px;
    overflow: hidden;
  }

  .fold {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    left: -40px;
    transform: rotate(-90deg);
    transition: transform 0.4s ease;

    &--expanded {
      transform: rotate(0deg);
    }
  }

  .icon {
    fill: #1c1e22;
    width: 24px;
    height: 24px;
  }
</style>
