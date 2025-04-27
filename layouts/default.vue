<template>
  <div class="default-layout">
    <LayoutsHeaderOrange />
    <main class="main-layout"><slot /></main>
    <LayoutsFooter />
  </div>
</template>

<script setup>
import SearchBar from "~/components/layouts/SearchBar.vue";
</script>

<style scoped>
.default-layout {
  @apply flex flex-col;
  @apply min-h-screen;
}

.main-layout {
  @apply flex-1;
  @apply bg-slate-200;
}
</style>
