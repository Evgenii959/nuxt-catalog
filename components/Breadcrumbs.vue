<template>
  <p class="breadcrumbs">
    <span v-for="(crumb, index) in breadcrumbs" :key="index">
      {{ crumb }}
      <span v-if="index < breadcrumbs.length - 1"> / </span>
    </span>
  </p>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';
import { useTreeStore } from '../store/useTreeStore';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const treeStore = useTreeStore();
const selectedLanguage = computed(() => treeStore.selectedLanguage);

// Функция для получения данных с fallback
const getLocalizedData = (data, language, fallbackLang = 'en') => {
  if (!data) return {}; 
  return data[language] || data[fallbackLang] || Object.values(data)[0];
};

const currentCategory = computed(() => {
  const categoryName = `${route.params.categoryName}/`;
  const categoryItemName = `${route.params.categoryItem}`;
  const foundCategory = treeStore.treeData.find(category =>
    category.locale[selectedLanguage.value]?.link === categoryName
  );

 if (!foundCategory) {
    const foundInChild = treeStore.treeData.find(category => {
      const child = category.childs?.find(child => {
       return child.locale[selectedLanguage.value]?.cg_slug === categoryItemName
        }
      );
      return child !== undefined;
    });
    return foundInChild ? foundInChild : null;
  }

  return foundCategory || 'Категория не найдена';
});

const categoryName = computed(() => {
  return currentCategory.value && currentCategory.value.locale
    ? getLocalizedData(currentCategory.value.locale, selectedLanguage.value)?.cg_name || 'Категория'
    : 'Категория';
});

const currentCategoryItem = computed(() => {
  const parentCategory = currentCategory.value;

  if (parentCategory && parentCategory.childs) {
    return parentCategory.childs.find(child =>
      child.locale[selectedLanguage.value]?.cg_slug === `${route.params.categoryItem}`
    );
  }
  
  return null;
});

const categoryItemName = computed(() => {
  return currentCategoryItem.value
    ? getLocalizedData(currentCategoryItem.value.locale, selectedLanguage.value)?.cg_name
    : null;
});

const breadcrumbs = computed(() => {
  const pathToTop = currentCategory.value?.path_to_top || [];
  const currentCategoryName = categoryName.value;
  const currentCategoryItemName = categoryItemName.value;

  const breadcrumbNames = pathToTop.map((item) => {
    return getLocalizedData(item, selectedLanguage.value)?.cg_name || 'Категория';
  });

  return [...breadcrumbNames, currentCategoryName, currentCategoryItemName]; 
});

watch(selectedLanguage, () => {
  router.push('/'); 
});
</script>

<style scoped>
.breadcrumbs {
  margin: 20px;
  font-size: 0.875rem;
  color: gray;
}

.external-link {
  display: block;
  margin-top: 10px;
  color: blue;
  text-decoration: underline;
  font-size: 0.875rem;
}
</style>
