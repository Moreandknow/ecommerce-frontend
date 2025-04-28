<template>
  <header class="header-orange">
    <LayoutsHeaderProfile v-if="defaultMeta.showProfile" />
    <div class="header-bottom">
      <UContainer class="header-bottom-containter">
        <BaseLogo />
        <LayoutsSearchBar v-if="defaultMeta.showSearch" class="flex-1" />
        <UButton v-if="defaultMeta.showCart" variant="link">
          <IconCart />
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
      route.meta?.header && "showSeacrh" in route.meta.header
        ? route.meta.header.showSeacrh
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
  @apply py-6;
}

.header-bottom-containter {
  @apply flex justify-between items-center gap-12;
  @apply h-full;
}

.header-top-containter-text {
  @apply no-underline;
  @apply px-3;
  @apply flex justify-end;
  @apply hover:text-white/50;
}
</style>
