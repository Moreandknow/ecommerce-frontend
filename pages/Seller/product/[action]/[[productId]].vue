<template>
  <div>{{ route.params.action }} - {{ route.params.productId }}</div>
</template>

<script setup>
definePageMeta({
  validate: ({ params }) => {
    if (params.action == "add") {
      return !params.productId;
    }
    return params.action == "edit" && !!params.productId;
  },
});
const route = useRoute();
</script>

<style lang="scss" scoped></style>
