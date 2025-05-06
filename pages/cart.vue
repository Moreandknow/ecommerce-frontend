<template>
  <UContainer class="py-5 flex flex-col gap-6">
    <UCard>
      <div class="cart-header">
        <div class="w-[46%]">Produk</div>
        <div class="text-center w-[15%]">Harga Satuan</div>
        <div class="text-center w-[15%]">Kuantitas</div>
        <div class="text-center w-[15%]">Total Harga</div>
        <div class="text-center w-[10%]">Aksi</div>
      </div>
    </UCard>

    <UCard>
      <template #header>
        <h2 class="text-sm text-black/85 font-medium">Shop name</h2>
      </template>
      <div class="grid grid-cols-1 divide-y">
        <div v-for="i in 5" :key="`product-${i}`" class="card-product">
          <div class="w-[46%]">
            <div class="flex gap-3 text-sm items-center">
              <img
                src="https://picsum.photos/1920/1080?random=1"
                class="aspect-[1/1] w-20"
              />
              <p class="line-clamp-2 text-black/85">
                Kaos Game Over Pixelo - T-shirt / Tees Gamer PS Nintendo Game
                Retro & Kaos 90an
              </p>
              <div class="w-40">
                <p>Variasi:</p>
                <p>Hitam, XXL</p>
              </div>
            </div>
          </div>
          <div class="text-center w-[15%]">Rp{{ formatNumber(190000) }}</div>
          <div class="flex justify-center w-[15%]"><BaseInputQuantity /></div>
          <div class="text-center w-[15%] text-primary">
            Rp{{ formatNumber(190000) }}
          </div>
          <div class="text-center w-[10%]">
            <UButton variant="link" color="black">Hapus</UButton>
          </div>
        </div>
      </div>
    </UCard>
  </UContainer>
</template>

<script setup>
definePageMeta({
  layout: "auth",
  header: {
    showProfile: true,
    showSearch: true,
    title: "Keranjang Belanja",
  },
});
</script>

<style scoped>
.cart-header {
  @apply flex items-center;
  @apply text-gray-500 text-sm font-normal;
}

.card-product {
  @apply flex items-center;
  @apply text-gray-500 text-sm font-normal;
  @apply py-5;
}
</style>
