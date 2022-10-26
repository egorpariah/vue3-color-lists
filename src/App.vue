<template>
  <div class="app">
    <div class="container">
      <Lists
        class="lists"
        :lists="data"
      />
      <ColorLists
        class="color-lists"
        :lists="data"
      />
    </div>
  </div>
</template>

<script setup>
  import { useListsStore } from './stores/lists';
  import { storeToRefs } from 'pinia';
  import Lists from './components/Lists.vue';
  import ColorLists from './components/ColorLists.vue';

  const store = useListsStore();

  const { data } = storeToRefs(store);
</script>

<style lang="scss" scoped>
  .container {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .lists {
    margin-bottom: 32px;
    margin-right: 4%;
    width: 48%;
  }

  .color-lists {
    width: 48%;
  }

  @media screen and (max-width: 767px) {
    .lists {
      width: 100%;
      margin-right: 0;
    }

    .color-lists {
      width: 100%;
    }
  }
</style>
