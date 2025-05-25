<template>
  <div class="header-profile">
    <UContainer class="header-profile-container">
      <template v-if="!session.token">
        <UButton
          variant="link"
          color="white"
          :padded="false"
          class="header-profile-container-button"
          to="/registration"
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
      </template>
      <UDropdown v-else :items="profileItems">
        <template #default="{ open }">
          <div class="flex gap-2 items-center">
            <UAvatar
              :src="session.profile.photo_url"
              :alt="session.profile.name"
              icon="i-heroicons:user"
            />
            <p>{{ session.profile.name }}</p>
            <UIcon
              name="i-heroicons:chevron-down-20-solid"
              class="w-4 h-4 transition-all"
              :class="[open && 'rotate-180']"
            />
          </div>
        </template>
      </UDropdown>
    </UContainer>
  </div>
</template>

<script setup>
const session = useSession();

const profileItems = [
  [
    {
      label: "Akun Saya",
      icon: "i-heroicons:user",
      to: "/my-account/profile",
    },
    {
      label: "Switch to Seller",
      icon: "i-heroicons:arrow-path",
      to: "/seller",
    },
    {
      label: "Logout",
      icon: "heroicons:arrow-left-start-on-rectangle-solid",
      click: session.logout,
    },
  ],
];
</script>

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
