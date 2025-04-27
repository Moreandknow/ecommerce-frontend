<template>
  <header class="header-orange">
    <div class="header-top">
      <UContainer class="header-top-container">
        <UButton
          variant="link"
          color="white"
          :padded="false"
          class="header-top-containter-text"
        >
          Daftar
        </UButton>
        <UButton
          variant="link"
          color="white"
          :padded="false"
          class="header-top-containter-text"
        >
          Login
        </UButton>
      </UContainer>
    </div>
    <div class="header-bottom">
      <UContainer class="header-bottom-containter">
        <BaseLogo></BaseLogo>
        <LayoutsSearchBar class="flex-1" />
        <UButton variant="link">
          <IconCart />
        </UButton>
      </UContainer>
    </div>
  </header>
</template>

<script setup></script>

<style scoped>
.header-orange {
  @apply text-white;
  @apply flex flex-col;
  height: 120px;
}

.header-orange .header-top {
  @apply bg-primary;
  @apply py-2;
}

.header-top-container {
  @apply flex justify-end;
  @apply divide-x divide-green-50/50;
}

.header-orange .header-bottom {
  @apply bg-gradient-to-b from-primary to-[#FF6633];
  @apply flex-1;
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
