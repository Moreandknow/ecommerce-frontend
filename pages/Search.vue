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
    <div class="search-default">
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
      </div>
    </div>
  </UContainer>
</template>

<script setup></script>

<style scoped>
#search-section {
  @apply py-6 flex gap-7;
}

.search-filter {
  @apply flex flex-col gap-5;
  @apply w-[190px];
}

.filter-title {
  @apply flex gap-2 items-center;
}

.filter-title h2 {
  @apply text-base font-bold text-black/80;
  @apply uppercase;
}

.filter-item {
  @apply flex flex-col gap-6;
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
</style>
