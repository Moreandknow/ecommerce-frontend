<template>
  <div class="space-y-3">
    <BaseTabs
      :items="items"
      :ui="{
        list: {
          height: 'h-full',
          tab: {
            font: 'font-normal',
            height: 'h-14',
          },
        },
      }"
      :content="false"
    />
    <UInput
      leading-icon="i-heroicons:magnifying-glass"
      size="lg"
      placeholder="Kamu bisa cari berdasarkan Nama Penjual, No. Pesanan atau Nama Produk"
      :ui="{
        color: {
          white: {
            outline: 'bg-gray-200/50 ring-0 placeholder-gray-500',
          },
        },
      }"
    />
    <UCard
      v-for="i in 4"
      :key="`order-${i}`"
      :ui="{
        base: 'text-sm text-black/85',
        divide: 'divide-dashed',
        footer: {
          background: 'bg-yellow-50/30',
        },
      }"
    >
      <template #default>
        <div class="flex justify-between gap-4 items-center">
          <div class="flex gap-2 items-center">
            <span class="font-semibold">Moreno Store</span>
            <UButton color="white" size="xs" :to="`/shop/sellerusername`"
              ><IconShop />Kunjungi Toko</UButton
            >
          </div>
          <div class="divide-x flex">
            <div class="flex gap-2 items-center text-teal-500 pr-2">
              <UIcon name="i-heroicons:truck" class="w-4 h-4" />
              <span>Ini nanti deskripsi dari paket yang telah sampai</span>
            </div>
            <span class="text-primary pl-2">Selesai</span>
          </div>
        </div>
        <hr class="my-3" />
        <NuxtLink class="space-y-3" to="/my-account/orders/order-id">
          <LazyFeatureProfileOrderCardProduct
            v-for="i in 3"
            :key="`product-${i}`"
          />
        </NuxtLink>
      </template>
      <template #footer>
        <div class="space-y-6">
          <div class="flex justify-end">
            <div class="flex gap-2 items-center">
              <img src="~/assets/images/garansi.png" class="h-4 w-4" />
              <span class="text-black/80">Total Pesanan:</span>
              <span class="text-primary text-2xl font-"
                >Rp{{ formatNumber(520000) }}</span
              >
            </div>
          </div>
          <div class="flex justify-between items-center gap-4">
            <div class="text-xs">
              <p class="text-black/55">
                Nilai produk sebelum <span class="underline">23-12-2025</span>
              </p>
              <p class="text-primary">
                Nilai sekarang & dapatkan 25 koin MoreAndShop!
              </p>
            </div>
            <UButton label="Nilai" class="min-w-40 justify-center" />
          </div>
        </div>
      </template>
    </UCard>
  </div>
</template>

<script setup>
definePageMeta({
  wrapper: "div",
});

const items = [
  {
    label: "Semua",
    key: "all",
  },
  {
    label: "Belum Bayar",
    key: "pending_payment",
  },
  {
    label: "Sedang Dikemas",
    key: "on_processing",
  },
  {
    label: "Dikirim",
    key: "on_delivery",
  },
  {
    label: "Selesai",
    key: "done",
  },
  {
    label: "Dibatalkan",
    key: "failed",
  },
];
</script>

<style lang="scss" scoped></style>
