<template>
  <div class="flex flex-col items-center mt-10 min-h-screen px-10">
    <h2 class="text-3xl font-semibold mb-6 text-gray-800">Категории</h2>
    <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <li
        v-for="category in visibleCategories"
        :key="category.id"
        class="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105"
      >
        <NuxtLink :to="getCategoryLink(category)" class="block p-4">
          <img
            v-if="category.category_image"
            :src="category.category_image"
            alt=""
            class="w-full h-40 object-contain mb-4 rounded-md"
          />
          <h3 class="text-xl font-bold text-gray-800 mb-2">
            {{ category.locale[treeStore.selectedLanguage]?.cg_name }}
          </h3>
          <p class="text-sm text-gray-600">
            {{ category.locale[treeStore.selectedLanguage]?.cg_description }}
          </p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useTreeStore } from '../store/useTreeStore';
import type { TreeData, Child } from '../types/TreeData';

const treeStore = useTreeStore();
const selectedCategories = ref<Child[]>([]);
const selectedSubCategory = ref<Child | null>(null);
const categoryVisible = ref<boolean>(false);
const subCategoryVisible = ref<boolean>(false);

type Language = 'en' | 'ru' | 'fr';
const language = treeStore.selectedLanguage as Language;

onMounted(async () => {
  await treeStore.fetchTreeData();
});

const visibleCategories = computed<TreeData[]>(() => {
  return treeStore.treeData.filter(
    (category: TreeData) =>
      category.locale[language]?.cg_name &&
      category.locale[language]?.cg_description
  );
});

watch(visibleCategories, (newCategories: TreeData[]) => {
  if (newCategories.length > 0 && !selectedCategories.value.length) {
    selectCategory(newCategories[0]);
  }
});

function selectCategory(category: TreeData) {
  selectedCategories.value = category.childs || [];
  selectedSubCategory.value = null;
  categoryVisible.value = true;
  subCategoryVisible.value = selectedCategories.value.length > 0;
}

function getCategoryLink(category: TreeData): string {
  const link = category.locale[language]?.link;
  return link ? `/${link}` : `/${category.id}`;
}
</script>
