<template>
  <UCard>
    <h3 class="text-lg font-normal text-black/85">Penilaian Produk</h3>
    <div
      class="mt-3 border border-primary-100/80 bg-primary-50/30 rounded-sm p-8 flex gap-8 items-center"
    >
      <div class="flex flex-col items-center">
        <p class="text-primary text-lg">
          <span class="text-3xl">{{ detail.rating }}</span> dari 5
        </p>
        <BaseRating
          :model-value="detail.rating"
          disabled
          size="lg"
          class="mt-2"
        />
      </div>
      <div class="flex flex-wrap gap-2 items-center">
        <UButton
          variant="outline"
          size="xs"
          class="min-w-24 text-sm justify-center"
          >Semua</UButton
        >
        <div class="flex flex-row-reverse gap-2">
          <UButton
            v-for="(i, index) in 5"
            :key="`rating-${i}`"
            color="white"
            size="xs"
            class="min-w-24 text-sm justify-center"
          >
            {{ i }} Bintang ({{ detail.review_summary[index] || 0 }})
          </UButton>
        </div>
        <UButton color="white" size="xs" class="min-w-24 text-sm justify-center"
          >Dengan Komentar ({{
            detail.review_summary.with_description
          }})</UButton
        >
        <UButton color="white" size="xs" class="min-w-24 text-sm justify-center"
          >Dengan Media ({{ detail.review_summary.with_attachment }})</UButton
        >
      </div>
    </div>
    <div class="flex flex-col mt-1 divide-y">
      <div v-for="i in 5" :key="`review-${i}`" class="flex gap-3 py-4">
        <UAvatar alt="Moreno Adryan" size="lg" img-class="object-cover" />
        <div class="flex-1">
          <p>Moreno Adryan</p>
          <BaseRating :model-value="4" disabled class="mt-1" />
          <div class="flex gap-1 mt-0.5 text-black/55 text-xs">
            <p>2025-5-7 8:28</p>
            |
            <p>Variasi: Vermont Camel, L</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end pt-5">
      <!-- <BasePagination v-model="page" :total="reviews.length" /> -->
    </div>
  </UCard>
</template>

<script setup>
defineProps({
  detail: {
    type: Object,
    default: () => ({}),
  },
});

const nuxtApp = useNuxtApp();
const route = useRoute();

const formProduct = useState("form-product", () => ({
  quantity: 1,
}));

const { data: detail, status: statusDetail } = useApi(
  computed(() => `/server/api/product/${route.params.slug}`),
  {
    onResponse({ response }) {
      if (response.ok) {
        response._data.data.variations.forEach((variation) => {
          formProduct.value[variation.name] = "";
        });
      }

      if (response.status === 404) {
        nuxtApp.runWithContext(() => {
          throw showError({
            statusCode: 404,
            message: "Product Tidak Ditemukan",
          });
        });
      }
    },
    transform(response) {
      return response?.data || {};
    },
  }
);
</script>

<style scoped></style>
