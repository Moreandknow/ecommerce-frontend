<template>
  <div>
    <h3>Learning: Data Fetching</h3>
    <UButton color="white" @click="execute">GET DATA</UButton>
    <UButton @click="refresh">REFRESH DATA</UButton>
    <p v-if="status === 'pending'">Loading...</p>
    <pre>{{ data }}</pre>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["learning-data-fetching"],
});

// const data = ref("");
// const loading = ref(true);

// onMounted(() => {
//   fetch("https://dummyjson.com/products")
//     .then((res) => res.json())
//     .then((res) => {
//       data.value = res;
//     })
//     .finally(() => (loading.value = false));
// });

// function getProduct() {
//   return fetch("https://dummyjson.com/products").then((res) => res.json());
// }

// const { data, status, error, execute } = useAsyncData("product", getProduct, {
//   immediate: true,
// });

const { data, status, execute, refresh } = useFetch(
  "https://dummyjson.com/products",
  {
    key: "product-list",
    immediate: false,
    params: { limit: 10, skip: 10 },
  }
);

// function refresh() {
//   refreshNuxtData("product");
// }
</script>

<style lang="scss" scoped></style>
