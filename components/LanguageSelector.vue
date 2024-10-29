<template>
  <select v-model="selectedLanguage">
    <option value="ru">Русский</option>
    <option value="en">English</option>
    <option value="fr">Français</option>
  </select>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useTreeStore } from '../store/useTreeStore';

const treeStore = useTreeStore();

const selectedLanguage = computed({
  get: () => treeStore.selectedLanguage,
  set: (value) => {
    treeStore.selectedLanguage = value;
  },
});
</script>
