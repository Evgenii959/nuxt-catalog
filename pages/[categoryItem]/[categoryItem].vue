<template>
  <div
    v-if="selectedCategories"
    class="flex flex-col items-center mt-10 min-h-screen"
  >
    <h2 class="text-3xl font-semibold mb-4 text-gray-800">
      {{ selectedCategories.locale[treeStore.selectedLanguage]?.cg_name }}
    </h2>
    <p class="text-sm text-gray-600">
      {{
        selectedCategories.locale[treeStore.selectedLanguage]?.cg_description
      }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useTreeStore } from '../../store/useTreeStore';
import { useRoute } from 'vue-router';

const route = useRoute();
const treeStore = useTreeStore();

type Language = 'en' | 'ru' | 'fr';

onMounted(async () => {
  await treeStore.fetchTreeData();
});

const selectedCategories = computed(() => {
  const categoryPath = route.path;

  const categoryChild = treeStore.treeData.find((item) => {
    return item.childs.some((child) => {
      const childLink =
        '/' + child.locale[treeStore.selectedLanguage as Language]?.link;
      return childLink === categoryPath;
    });
  });

  if (categoryChild) {
    const childItem = categoryChild.childs.find((child) => {
      const childLink =
        '/' + child.locale[treeStore.selectedLanguage as Language]?.link;
      return childLink === categoryPath;
    });

    return childItem || null;
  }

  return null;
});
</script>
