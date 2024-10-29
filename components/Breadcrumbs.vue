<template>
  <nav class="flex items-center space-x-2 text-gray-600 text-sm mt-4">
    <router-link
      v-for="(breadcrumb, index) in breadcrumbs"
      :key="breadcrumb.path"
      :to="breadcrumb.path"
      class="hover:text-indigo-600 transition-colors duration-200"
    >
      <span v-if="index > 0">/</span>
      <span :class="{ 'text-gray-500': index === breadcrumbs.length - 1 }" class="text-l px-2">
        {{ breadcrumb.name }}
      </span>
    </router-link>
  </nav>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'Breadcrumbs',
  setup() {
    const route = useRoute();

    const breadcrumbs = computed(() => {
      const pathArray = route.path.split('/').filter(Boolean); // Убираем пустые элементы

      const breadcrumbsArray = [
        { name: 'Главная', path: '/' }, // Добавляем "Главная" как первую крошку
        ...pathArray.map((segment, index) => {
          const path = '/' + pathArray.slice(0, index + 1).join('/');
          const name =
            route.matched.find(
              (r) =>
                r.path
                  .replace('/:categoryName', '')
                  .replace('/:subCategoryId', '') === path
            )?.name || segment;

          return { name: name === 'Index' ? 'Главная' : name, path };
        }),
      ];

      return breadcrumbsArray;
    });

    return { breadcrumbs };
  },
};
</script>

<style scoped>
nav {
  padding-left: 16px;
}
</style>
