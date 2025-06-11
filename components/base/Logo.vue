<template>
  <UButton variant="link" :color="color" :padded="false" to="/" class="logo">
    More <br />And <br />
    Shop
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
