<template>
  <div class="flex flex-col gap-6 pb-6">
    <section class="banner-section">
      <UContainer>
        <BaseCarousel
          width="796px"
          height="235px"
          aspect-ratio="3.39/1"
          :items="items"
          class="mx-auto"
        />
      </UContainer>
    </section>
    <section class="category-section">
      <UContainer>
        <div class="category-section-card">
          <div class="category-section-header">
            <h2>Kategori</h2>
          </div>
          <div class="category-section-content">
            <FeatureHomepageCategoryItem
              v-for="cat in categories"
              :key="`cat-${cat.slug}`"
              :title="cat.name"
              :image="cat.icon"
              :slug="cat.slug"
            />
          </div>
        </div>
      </UContainer>
    </section>
    <section class="product-section">
      <UContainer>
        <div class="product-section-header">
          <h2>Rekomendasi</h2>
        </div>
        <div class="product-section-content">
          <BaseProductCard
            v-for="product in productList?.data"
            :key="`product-${product.uuid}`"
            :title="product.name"
            :price="product?.price_sale || product?.price"
            :image="product.image_url"
            :slug="product.slug"
            :discount="product?.price_discount_percentage"
          />
        </div>
      </UContainer>
    </section>

    <UContainer>
      <UButton
        v-if="!session.token"
        color="white"
        class="font-normal px-28"
        to="/login"
      >
        Login untuk Lihat Lainnya
      </UButton>
      <UButton
        v-else-if="productList?.next_page_url"
        color="white"
        class="font-normal px-28"
        @click="loadMore"
      >
        Lihat Lainnya
      </UButton>
    </UContainer>
  </div>
</template>

<script setup>
const nuxtApp = useNuxtApp();
const session = useSession();

const pagination = ref({
  page: 1,
});

const { data: oldProductData } = useNuxtData("product-homepage");

const { data: respSlider } = useApi("/server/api/slider", {
  key: "slider-banner",
  getCachedData() {
    return (
      nuxtApp.payload.data?.["slider-banner"] ||
      nuxtApp.static.data?.["slider-banner"]
    );
  },
});

const { data: categories } = useApi("/server/api/category", {
  key: "category-list",
  transform(response) {
    return (response?.data || []).reduce((result, parent) => {
      result.push(
        ...parent.childs.map((child) => ({
          ...child,
          icon: parent.icon,
          name: `${parent.name} - ${child.name}`,
        }))
      );
      return result;
    }, []);
  },
  getCachedData() {
    return (
      nuxtApp.payload.data?.["category-list"] ||
      nuxtApp.static.data?.["category-list"]
    );
  },
});

const { data: productList, execute } = useApi("/server/api/product", {
  params: pagination,
  key: "product-homepage",
  onResponse({ response }) {
    if (response.ok) {
      pagination.value.page = response._data.data?.current_page;
    }
  },
  transform(response) {
    // return response?.data?.data || []
    if (pagination.value.page === 1) return response?.data;
    const newData = response?.data?.data || [];
    return {
      ...response.data,
      data: [...(oldProductData.value?.data || []), ...newData],
    };
  },
  watch: false,
});

const items = computed(() =>
  (respSlider.value?.data || [])?.map((slider) => slider.image)
);

function loadMore() {
  pagination.value.page++;
  execute();
}

useSeoMeta({
  ogImage: () => items.value?.[0],
  twitterImage: () => items.value?.[0],
});
</script>

<style scoped>
.banner-section {
  @apply bg-white py-4 sm:py-7;
}

.category-section-card {
  @apply bg-white;
}

.category-section-header {
  @apply p-5 sm:p-5;
  @apply border-b border-black/5;
}

.category-section-header h2 {
  @apply text-base text-black/55 font-medium;
  @apply uppercase;
}

.category-section-content {
  @apply grid grid-cols-2 gap-2 p-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 sm:gap-3 sm:p-3;
}

.product-section-header {
  @apply bg-white;
  @apply border-b-4 border-primary;
  @apply p-3 sm:p-5;
}

.product-section-header h2 {
  @apply text-base text-primary font-medium;
  @apply text-center;
  @apply uppercase;
}

.product-section-content {
  @apply grid grid-cols-2 gap-2 mt-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 sm:gap-3;
}
</style>
