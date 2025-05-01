<template>
  <header class="header-white">
    <LayoutsHeaderProfile v-if="route.meta?.header?.showProfile" />
    <div class="header-bottom">
      <UContainer class="header-bottom-container">
        <div class="flex gap-4 items-center">
          <BaseLogo color="orange" />
          <tempalte v-if="route.meta.header?.title"></tempalte>
          <hr class="w-[1px] h-6 bg-primary" />
          <p class="text-xl">{{ route.meta.header.title }}</p>
        </div>
        <LayoutsSearchBar
          v-if="route.meta?.header?.showSearch"
          class="w-1/2"
          :padded="false"
        />
      </UContainer>
    </div>
  </header>
</template>

<script setup>
const route = useRoute();
</script>

<style scoped>
.header-bottom-container {
  @apply flex justify-between items-center gap-10;
  @apply py-7;
}
</style>
