<template>
  <div
    :class="[
      'searchbar',
      {
        'no-padded': !padded,
      },
    ]"
  >
    <input
      placeholder="CEK: Flash Sale Rp17 Lokal!"
      class="searchbar-input text-xs sm:text-sm"
    />
    <UButton
      icon="i-heroicons:magnifying-glass"
      class="px-3 sm:px-4 md:px-6"
      v-bind="attribute"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  padded: {
    type: Boolean,
    default: true,
  },
});

const attribute = computed(() => {
  if (!props.padded) {
    return {
      ui: {
        rounded: "rounded-none",
      },
    };
  }
  return {};
});
</script>

<style scoped>
.searchbar {
  @apply bg-white;
  @apply flex items-center;
  @apply rounded-sm;
  @apply text-black;
}

.searchbar:not(.no-padded) {
  @apply p-1;
}

.searchbar.no-padded {
  @apply border-2 border-primary;
}

.searchbar input {
  @apply outline-none pl-3;
  @apply flex-1;
  @apply min-w-0;
}
</style>
