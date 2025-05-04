<template>
  <UContainer id="search-section">
    <div class="search-filter">
      <div class="filter-title">
        <IconFilter />
        <h2>Filter</h2>
      </div>
      <div class="filter-item">
        <h3>Batas Harga</h3>
        <div class="flex gap-2 items-center">
          <UInput type="number" placeholder="Rp MIN" />
          <div class="h-[1px] bg-gray-300 w-10"></div>
          <UInput type="number" placeholder="Rp MAX" />
        </div>
        <UButton block class="py-2">TERAPKAN</UButton>
      </div>
      <hr />
      <div class="filter-item">
        <h3>Berdasarkan Kategori</h3>
        <div class="flex flex-col gap-2">
          <UCheckbox label="Kategori 1" />
          <UCheckbox label="Kategori 2" />
          <UCheckbox label="Kategori 3" />
          <UCheckbox label="Kategori 4" />
          <hr />
        </div>
        <UButton block class="py-2">HAPUS SEMUA</UButton>
      </div>
    </div>
    <div class="search-result">
      <div class="search-keyword">
        <IconLamp />
        <p>Hasil pencarian untuk '<span>Testing keyword</span>'</p>
      </div>
      <div class="search-sort">
        <div class="search-sort-control">
          <p>Urutkan</p>
          <UButton class="px-6">Termurah</UButton>
          <UButton color="white" class="px-6">Termahal</UButton>
        </div>
        <div class="search-sort-pagination">
          <p><span>1</span>/17</p>
          <div>
            <UButton
              icon="i-heroicons:chevron-left-20-solid"
              color="gray"
              size="xs"
              disabled
            />
            <UButton
              icon="i-heroicons:chevron-right-20-solid"
              color="gray"
              size="xs"
              class="bg-black/5"
            />
          </div>
        </div>
      </div>
      <div class="search-content">
        <BaseProductCard
          v-for="i in 10"
          :key="`product - ${i}`"
          title="Kawabata Sepatu Sandal Kasual Slingback Mules"
          :image="productCard.image"
          :price="productCard.price"
          :sale="productCard.sale"
        />
      </div>
      <div class="flex justify-center mt-8">
        <UPagination
          v-model="page"
          class="no-underline"
          :page-count="5"
          :total="items.length"
          :inactive-button="{
            variant: 'link',
            class: 'text-black/40 hover:text-primary px-3.5 py-0.5',
          }"
          :active-button="{
            class: 'px-3.5 py-0.5 rounded-sm',
          }"
          :prev-button="{
            variant: 'link',
            class: 'text-black/40 hover:text-primary px-3.5 py-0.5',
            icon: 'i-heroicons:chevron-left-solid',
          }"
          :next-button="{
            variant: 'link',
            class: 'text-black/40 hover:text-primary px-3.5 py-0.5',
            icon: 'i-heroicons:chevron-right-solid',
          }"
          :ui="{
            wrapper: 'space-x-4',
            base: 'text-xl font-light',
          }"
        />
      </div>
    </div>
  </UContainer>
</template>

<script setup>
import productImg from "@/assets/images/homepage/productimage.png";
const productCard = {
  image: productImg,
  price: 590000,
  sale: 19,
};

const page = ref(1);
const items = ref(Array(55));
</script>

<style scoped>
#search-section {
  @apply py-6 flex gap-4;
}

.search-filter {
  @apply flex flex-col gap-5;
  @apply w-48;
}

.filter-title {
  @apply flex gap-2 items-center;
}

.filter-title h2 {
  @apply text-base font-bold text-black/80;
  @apply uppercase;
}

.filter-item {
  @apply flex flex-col gap-5;
}

.filter-item h3 {
  @apply text-sm font-medium text-black/80;
}

.search-result {
  @apply flex-1;
}

.search-keyword {
  @apply flex items-center gap-2;
  @apply text-gray-600;
}

.search-keyword span {
  @apply text-primary;
}

.search-sort {
  @apply flex items-center gap-2 justify-between;
  @apply px-5 py-3;
  @apply bg-black/5;
  @apply mt-4;
}

.search-sort-control {
  @apply flex gap-3 items-center;
}

.search-sort-control p {
  @apply text-gray-600 text-sm font-normal;
}

.search-sort-pagination {
  @apply flex gap-5 items-center;
}

.search-sort-pagination p {
  @apply text-sm font-normal text-black/80;
}

.search-sort-pagination span {
  @apply text-primary;
}

.search-content {
  @apply grid grid-cols-5 gap-3;
  @apply mt-3;
}
</style>
