<template>
  <div class="header-profile">
    <UContainer class="header-profile-container">
      <UButton
        variant="link"
        color="white"
        :padded="false"
        class="header-profile-container-button"
        to="/daftar"
      >
        Daftar
      </UButton>
      <UButton
        variant="link"
        color="white"
        :padded="false"
        class="header-profile-container-button"
        to="/login"
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
  @apply divide-x divide-gray-50/50;
}

.header-profile-container-button {
  @apply px-3;
  @apply no-underline;
  @apply hover:text-white/50;
}
</style>
