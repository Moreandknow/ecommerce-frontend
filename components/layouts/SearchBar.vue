<template>
  <div class="searchbar">
    <input placeholder="CEK: Flash Sale Rp17 Lokal!" />
    <UButton icon="i-heroicons:magnifying-glass" class="px-5" />
  </div>
</template>

<script setup></script>

<style scoped>
.searchbar {
  @apply bg-white;
  @apply p-1;
  @apply flex items-center;
  @apply rounded-sm;
  @apply text-black;
}

.searchbar input {
  @apply outline-none pl-4;
  @apply flex-1;
}
</style>
