<template>
  <header
    class="header-white bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    :class="route.meta?.header?.class"
  >
    <LayoutsHeaderProfile v-if="route.meta?.header?.showProfile" />
    <div class="header-bottom border-b border-gray-200 dark:border-gray-700">
      <UContainer class="header-bottom-container">
        <div class="flex items-center gap-2 sm:gap-3 shrink-0">
          <BaseLogo color="orange" />
          <template v-if="route.meta.header?.title">
            <hr
              class="hidden sm:block w-[1px] h-5 bg-primary dark:bg-primary-400"
            />
            <p
              class="hidden sm:block text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 truncate"
            >
              {{ route.meta.header.title }}
            </p>
          </template>
        </div>

        <LayoutsSearchBar
          v-if="route.meta?.header?.showSearch"
          class="flex-1 min-w-0 max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-md"
          :padded="false"
        />
      </UContainer>
    </div>
  </header>
</template>

<script setup>
const route = useRoute();

// const meta = {
//     showProfile: false,
//     title: 'Keranjang',
//     showSearch: false
// }
</script>

<style scoped>
.header-bottom-container {
  @apply flex justify-between items-center gap-10;
  @apply py-10;
  @apply sm:gap-4 h-14 sm:h-16;
}
</style>
