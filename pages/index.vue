<template>
  <div class="flex flex-col gap-6 pb-6">
    <section class="banner-section">
      <UContainer>
        <FeatureHomepageCarousel :items="items" />
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
              v-for="i in 20"
              :key="i"
              :title="category.title + ' ' + i"
              :image="category.image"
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
            v-for="i in 36"
            :key="`product - ${i}`"
            title="Kawabata Sepatu Sandal Kasual Slingback Mules"
            :image="productCard.image"
            :price="productCard.price"
          />
        </div>
      </UContainer>
    </section>

    <UContainer class="flex justify-center">
      <UButton
        color="white"
        class="font-normal w-full py-3 px-6 sm:w-auto sm:px-12 md:px-20"
      >
        Login untuk Lihat Lainnya
      </UButton>
    </UContainer>
  </div>
</template>

<script setup>
const items = [
  "https://picsum.photos/1920/1080?random=1",
  "https://picsum.photos/1920/1080?random=2",
  "https://picsum.photos/1920/1080?random=3",
  "https://picsum.photos/1920/1080?random=4",
  "https://picsum.photos/1920/1080?random=5",
  "https://picsum.photos/1920/1080?random=6",
];

import productImg from "@/assets/images/homepage/productimage.png";
const productCard = {
  image: productImg,
  price: 590000,
};

import elektronikImg from "@/assets/images/homepage/elektronik.png";
const category = {
  title: "Elektronik",
  image: elektronikImg,
};
</script>

<style scoped>
.banner-section {
  @apply bg-white py-4 sm:py-7;
}

.category-section-card {
  @apply bg-white;
}

.category-section-header {
  @apply p-3 sm:p-5;
  @apply border-b border-black/5;
}

.category-section-header h2 {
  @apply text-base text-black/55 font-medium;
  @apply uppercase;
}

.category-section-content {
  @apply grid grid-cols-2 gap-2 p-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 sm:gap-3 sm:p-3;
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
