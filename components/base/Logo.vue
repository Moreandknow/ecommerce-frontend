<template>
  <UButton
    variant="link"
    :color="color"
    :padded="false"
    @click="handleHomepage"
    class="logo"
  >
    <span>
      More <br />And <br />
      Shop
    </span>
  </UButton>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: "white",
    validator: (propsValue) => ["white", "orange"].includes(propsValue),
  },
});

function handleHomepage() {
  navigateTo("/");
}
</script>

<style>
.logo {
  @apply !text-xl md:!text-2xl;
  @apply !font-normal;
  @apply !no-underline;
  @apply !leading-[0.8];
  @apply text-center;
}
</style>
