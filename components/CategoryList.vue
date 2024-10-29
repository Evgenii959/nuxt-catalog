<template>
  <aside v-if="visibleCategories.length" class="bg-gray-800 text-white w-64 min-h-screen px-4 py-6 shadow-lg">
    <h2 class="text-xl font-semibold mb-4">Категории</h2>
    <ul class="space-y-4">
      <li v-for="category in visibleCategories" :key="category.id">
        <NuxtLink :to="getCategoryLink(category)" class="block p-4 rounded-lg hover:bg-indigo-600 hover:text-white">
          <img v-if="category.category_image" :src="category.category_image" alt="" class="w-full h-32 object-cover mb-2 rounded-md" />
          <h3 class="text-lg font-bold">{{ category.locale[selectedLanguage]?.cg_name }}</h3>
          <p class="text-sm text-gray-300">{{ category.locale[selectedLanguage]?.cg_description }}</p>
        </NuxtLink>
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useTreeStore } from '../store/useTreeStore';

const treeStore = useTreeStore();
const selectedLanguage = computed(() => treeStore.selectedLanguage);

const visibleCategories = computed(() => {
  return treeStore.treeData.filter(category => category.locale[selectedLanguage.value]?.cg_name);
});

function getCategoryLink(category) {
  return `/categories/${category.id}`;
}
</script>

<style scoped>
/* Стили для списка категорий */
</style>