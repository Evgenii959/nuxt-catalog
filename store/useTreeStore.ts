import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { TreeData } from '../types/TreeData';

export const useTreeStore = defineStore('tree', () => {
  const selectedLanguage = ref<string>('ru');
  const treeData = ref<TreeData[]>([]);

  async function fetchTreeData() {
    try {
      const response = await fetch('/task_json.txt');
      if (!response.ok) {
        throw new Error(`Ошибка загрузки: ${response.statusText}`);
      }
      const data = await response.json();
      treeData.value = data;
    } catch (error) {
      console.error('Ошибка при загрузке данных дерева:', error);
    }
  }

  return { selectedLanguage, treeData, fetchTreeData };
});
