import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../pages/index.vue'),
    name: 'Index',
  },
  {
    path: '/:categoryName',
    component: () => import('../pages/[categoryName].vue'),
    name: 'category',
  },
  {
    path: '/:categoryName/:subCategoryId',
    component: () => import('../pages/[categoryItem]/[categoryItem].vue'),
    name: 'subCategory',
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
