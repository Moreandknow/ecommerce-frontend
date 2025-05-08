<template>
  <UContainer class="flex gap-5 flex-col py-5">
    <UCard class="address-section">
      <div class="flex gap-2 text-primary items-center">
        <UIcon name="i-heroicons:map-pin-16-solid" />
        <span>Alamat Pengiriman</span>
      </div>
      <div class="flex gap-20 mt-5 items-center">
        <div>
          <p class="font-bold">Moreno Adryan</p>
          <p class="font-bold">081248172147</p>
        </div>
        <p class="text-black/80">
          Jl. Raya Bahaya Awas Tertabrak No.100, RT15/RW09, Kec. Jagakarsa, Kel.
          Srengseng Sawah, Jakarta Selatan, DKI Jakarta, ID
        </p>
        <UBadge variant="outline" class="font-normal">Utama</UBadge>
        <UButton variant="link" color="blue" @click="openAddress = true">
          Ubah
        </UButton>
      </div>
    </UCard>
    <div class="bg-white divide-y divide-dashed">
      <div class="p-6">
        <div class="flex justify-between items-center">
          <span class="w-[33%] text-lg font-normal text-black/85">
            Produk Dipesan
          </span>
          <span class="w-[16%]" />
          <span class="w-[16%] text-sm font-normal text-right text-black/55">
            Harga satuan
          </span>
          <span class="w-[16%] text-sm font-normal text-right text-black/55">
            Jumlah
          </span>
          <span class="w-[16%] text-sm font-normal text-right text-black/55">
            SubTotal produk
          </span>
        </div>
        <p class="text-sm text-black/85 my-4">NAMA SHOP</p>
        <div>
          <div class="flex justify-between items-center gap-4">
            <div
              class="w-[33%] text-lg font-normal text-black/85 flex gap-2 items-center"
            >
              <img
                src="https://picsum.photos/1920/1080?random=1"
                class="aspect-[1/1] w-10"
              />
              <p class="line-clamp-1 text-sm text-black/80">
                Privacy matte/clear glossy/privacy glossy
              </p>
            </div>
            <div class="w-[16%]">
              <p class="line-clamp-1 text-sm text-black/40">
                Variasi: Privacy matte, iphone XS MAX
              </p>
            </div>
            <div class="w-[16%] text-sm font-normal text-right text-black/55">
              Rp{{ formatNumber(1000) }}
            </div>
            <div class="w-[16%] text-sm font-normal text-right text-black/55">
              {{ formatNumber(10) }}
            </div>
            <div class="w-[16%] text-sm font-normal text-right text-black/55">
              {{ formatNumber(10000000) }}
            </div>
          </div>
        </div>
      </div>
      <div class="bg-blue-50/20 flex divide-x divide-dashed">
        <div class="py-4 px-6 flex gap-4 items-center w-[480px]">
          <span>Pesan:</span>
          <UInput
            placeholder="(Opsional) Tinggalkan pesan ke penjual"
            class="flex-1"
          />
        </div>
        <div class="divide-y divide-dashed flex-1">
          <div class="grid grid-cols-3 px-6 py-9 font-medium">
            <p class="text-sm text-black/80">Opsi Pengiriman</p>
            <div>
              <div class="flex justify-between gap-2 items-center">
                <p class="text-sm text-black/80">REG</p>
                <UButton
                  variant="link"
                  color="blue"
                  :padded="false"
                  @click="openCourier = true"
                >
                  Ubah
                </UButton>
              </div>
              <p class="text-xs text-gray-400 font-normal mt-2">
                Garansi tiba: 13-15 Ags
              </p>
            </div>
            <p class="text-sm text-black/80 text-right">
              Rp{{ formatNumber(1450000) }}
            </p>
          </div>
          <div>
            <UButton
              variant="link"
              class="hover:no-underline"
              @click="openCourier = true"
            >
              <div class="flex items-center gap-1 text-green-700">
                <IconTruck /> Garansi tiba: 13-15 Ags
              </div>
              <div class="flex items-center">
                <span class="text-gray-400">dengan J&T Jemari</span>
                <uIcon name="i-heroicons:chevron-right" class="text-gray-400" />
              </div>
            </UButton>
          </div>
        </div>
      </div>
      <div class="bg-blue-50/20 flex justify-end px-6 py-4 items-center gap-3">
        <span class="text-sm text-black/55"
          >Total Pesanan ({{ 1 }} Produk)</span
        >
        <span class="text-primary text-xl font-medium"
          >Rp{{ formatNumber(100000) }}</span
        >
      </div>
    </div>
    <ModalAddress v-model:open="openAddress" />
    <ModalCourier v-model:open="openCourier" />
  </UContainer>
</template>

<script setup>
definePageMeta({
  layout: "auth",
  header: {
    title: "Checkout",
    showProfile: true,
  },
});

const openAddress = ref(false);
const openCourier = ref(false);
</script>

<style lang="scss" scoped></style>
