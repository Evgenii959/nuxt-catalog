<template>
  <div class="flex flex-col items-center mt-10 min-h-screen">
    <h2 class="text-3xl font-semibold mb-4 text-gray-800">{{ title }}</h2>
    <ul
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
      v-if="selectedCategories.length"
    >
      <li
        v-for="subCategory in selectedCategories"
        :key="subCategory.id"
        class="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105"
      >
        <NuxtLink :to="getSubCategoryLink(subCategory)" class="block p-4">
          <h3 class="text-xl font-bold text-gray-800 mb-2">
            {{ subCategory.locale[treeStore.selectedLanguage]?.cg_name }}
          </h3>
          <p class="text-sm text-gray-600">
            {{ subCategory.locale[treeStore.selectedLanguage]?.cg_description }}
          </p>
        </NuxtLink>
      </li>
    </ul>
    <p
      v-else-if="selectedCategories && selectedCategories.length === 0"
      class="text-gray-500"
    >
      Подкатегорий нет.
    </p>
    <p v-else class="text-gray-500">Загрузка подкатегорий...</p>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useTreeStore } from '../store/useTreeStore';
import type { Child } from '../types/TreeData';

const treeStore = useTreeStore();
const route = useRoute();

type Language = 'en' | 'ru' | 'fr';

onMounted(async () => {
  await treeStore.fetchTreeData();
});

const title = computed(() => treeStore.selectedLanguage === 'ru' ? 'Подкатегории' : 'Subcategories');

const selectedCategories = computed<Child[]>(() => {
  const categoryPath = route.path;

  const category = treeStore.treeData.find(
    (cat) => '/' + cat.locale[treeStore.selectedLanguage as Language]?.link === categoryPath
  );
  return category?.childs || [];
});

function getSubCategoryLink(subCategory: Child) {
  const link = subCategory.locale[treeStore.selectedLanguage as Language]?.link;
  return link ? `/${link}` : `/${subCategory.id}`;
}
</script>
