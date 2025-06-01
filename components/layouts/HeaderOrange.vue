<template>
  <header class="header-orange bg-orange-500 text-white shadow-md">
    <LayoutsHeaderProfile v-if="defaultMeta.showProfile" />

    <div class="header-bottom">
      <UContainer
        class="flex items-center justify-between h-14 sm:h-16 gap-2 sm:gap-3 md:gap-4"
      >
        <div class="shrink-0 p-1 sm:p-2 md:px-4 lg:ml-[45px] lg:px-7">
          <NuxtLink to="/" aria-label="Go to Homepage"> <BaseLogo /> </NuxtLink>
        </div>

        <LayoutsSearchBar
          v-if="defaultMeta.showSearch"
          class="flex-1 min-w-0"
        />

        <UButton
          v-if="defaultMeta.showCart"
          variant="link"
          to="/Cart"
          class="p-1 text-white hover:text-orange-100 shrink-0"
          aria-label="View Shopping Cart"
        >
          <IconCart class="w-6 h-6" />
        </UButton>
      </UContainer>
    </div>
  </header>
</template>

<script setup>
const route = useRoute();

// const meta = {
//   showProfile: false,
//   showSearch: false,
//   showCart: false,
// };

const defaultMeta = computed(() => {
  return {
    showProfile:
      route.meta?.header && "showProfile" in route.meta.header
        ? route.meta.header.showProfile
        : true,
    showSearch:
      route.meta?.header && "showSearch" in route.meta.header
        ? route.meta.header.showSearch
        : true,
    showCart:
      route.meta?.header && "showCart" in route.meta.header
        ? route.meta.header.showCart
        : true,
  };
});
</script>

<style scoped>
.header-orange {
  @apply text-white;
  @apply flex flex-col;
}

.header-orange .header-bottom {
  @apply bg-gradient-to-b from-primary to-[#FF6633];
  @apply flex-1;
  @apply py-4 pt-1;
}

.header-bottom-container {
  @apply flex justify-between items-center gap-12;
  @apply h-full;
}
</style>
