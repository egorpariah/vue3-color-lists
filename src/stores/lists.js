import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useListsStore = defineStore('lists', () => {
  const data = ref([
    {
      id: 1,
      items: [
        { id: 1, selected: false, count: 8, color: '#3694FF' },
        { id: 2, selected: false, count: 16, color: '#094D9C' },
        { id: 3, selected: false, count: 12, color: '#9C6400' },
        { id: 4, selected: false, count: 4, color: '#E89E1A' },
      ],
    },
    {
      id: 2,
      items: [
        { id: 1, selected: false, count: 12, color: '#E84031' },
        { id: 2, selected: false, count: 8, color: '#094D9C' },
        { id: 3, selected: false, count: 12, color: '#1A7BE9' },
        { id: 4, selected: false, count: 12, color: '#E89E1A' },
        { id: 5, selected: false, count: 16, color: '#E87531' },
        { id: 6, selected: false, count: 8, color: '#3694FF' },
      ],
    },
    {
      id: 3,
      items: [
        { id: 1, selected: false, count: 12, color: '#EBA355' },
        { id: 2, selected: false, count: 8, color: '#094D9C' },
        { id: 3, selected: false, count: 16, color: '#464282' },
      ],
    },
    {
      id: 4,
      items: [
        { id: 1, selected: false, count: 12, color: '#C6E802' },
        { id: 2, selected: false, count: 8, color: '#E831B5' },
        { id: 3, selected: false, count: 12, color: '#1A7BE9' },
        { id: 4, selected: false, count: 12, color: '#E89E1A' },
        { id: 5, selected: false, count: 16, color: '#E87531' },
        { id: 6, selected: false, count: 8, color: '#464282' },
        { id: 7, selected: false, count: 4, color: '#E84031' },
        { id: 8, selected: false, count: 16, color: '#3694FF' },
      ],
    },
    {
      id: 5,
      items: [
        { id: 1, selected: false, count: 12, color: '#0EE7E8' },
        { id: 2, selected: false, count: 8, color: '#094D9C' },
        { id: 3, selected: false, count: 12, color: '#1A7BE9' },
        { id: 4, selected: false, count: 12, color: '#E8C402' },
      ],
    },
  ]);

  function changeSelected(boolean, listId, itemId) {
    data.value[listId - 1].items[itemId - 1].selected = boolean;
  }

  function changeCount(value, listId, itemId) {
    data.value[listId - 1].items[itemId - 1].count = value;
  }

  function changeColor(color, listId, itemId) {
    data.value[listId - 1].items[itemId - 1].color = color;
  }

  function decreaseCount(listId, itemId) {
    data.value[listId - 1].items[itemId - 1].count--;
  }

  return { data, changeSelected, changeColor, changeCount, decreaseCount };
});
