<template>
  <Header />
  <Breadcrumbs />
  <RouterView />
</template>

<script setup lang="ts">
/* import { ref, onMounted } from 'vue';
import { useTreeStore } from './store/useTreeStore';
import { useRoute } from 'vue-router';

const treeStore = useTreeStore();
const route = useRoute();
const selectedCategory = ref(null);

onMounted(async () => {
  await treeStore.fetchTreeData();
  const categoryName = route.params.categoryName + '/';
  const categoryItem = route.params.categoryItem + '/';
  console.log('Checking name:', categoryItem);

  const category =
    treeStore.treeData.find((category) => {
      const mainLinkMatch =
        category.locale[treeStore.selectedLanguage]?.link === categoryName;
      const childLinkMatch = category.childs?.some((child) => {
        return (
          child.locale[treeStore.selectedLanguage]?.cg_slug + '/' ===
          categoryItem
        );
      });

      console.log(childLinkMatch);

      return mainLinkMatch || childLinkMatch;
    }) || null;

  console.log('Selected category:', category);
  selectedCategory.value = category;
}); */
</script>
