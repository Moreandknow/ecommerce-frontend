<template>
  <div class="header-profile">
    <UContainer class="header-profile-container">
      <UButton
        variant="link"
        color="white"
        :padded="false"
        class="header-profile-containter-text"
      >
        Daftar
      </UButton>
      <UButton
        variant="link"
        color="white"
        :padded="false"
        class="header-profile-containter-text"
      >
        Login
      </UButton>
    </UContainer>
  </div>
</template>

<script setup></script>

<style scoped>
.header-profile {
  @apply bg-primary;
  @apply py-2;
  @apply text-white;
}

.header-profile-container {
  @apply flex justify-end;
  @apply divide-x divide-green-50/50;
}

.header-profile-containter-text {
  @apply no-underline;
  @apply px-3;
  @apply flex justify-end;
  @apply hover:text-white/50;
}
</style>
