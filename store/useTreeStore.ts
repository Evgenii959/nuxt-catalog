import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
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
      treeData.value = data.map((category) => ({
        ...category,
        path_to_top: buildPathToTop(category.id, data), // Генерируем путь для каждой категории
      }));
    } catch (error) {
      console.error('Ошибка при загрузке данных дерева:', error);
    }
  }

  function buildPathToTop(
    categoryId: number,
    allCategories: TreeData[]
  ): TreeData[] {
    const path: TreeData[] = [];
    let currentCategory = allCategories.find((cat) => cat.id === categoryId);

    while (currentCategory) {
      path.unshift(currentCategory); // Добавляем категорию в начало пути
      currentCategory = allCategories.find(
        (cat) => cat.id === currentCategory.parentId
      ); // Находим родительскую категорию
    }

    return path;
  }

  const getCategoryById = (categoryId: number) => {
    return treeData.value.find((category) => category.id === categoryId);
  };

  return {
    selectedLanguage,
    treeData,
    fetchTreeData,
    getCategoryById,
  };
});
