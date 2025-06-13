<template>
  <UContainer class="flex gap-5 flex-col py-5">
    <UCard class="address-section">
      <div class="flex gap-2 text-primary items-center">
        <UIcon name="i-heroicons:map-pin-16-solid" />
        <span>Alamat Pengiriman</span>
      </div>
      <div v-if="status === 'pending'" class="flex mt-5 items-center gap-4">
        <USkeleton class="h-4 w-2/12" />
        <USkeleton class="h-4 w-4/12" />
        <USkeleton class="h-4 w-2/12" />
        <USkeleton class="h-4 w-4/12" />
      </div>
      <div v-else class="flex gap-20 mt-5 items-center">
        <div>
          <p class="font-bold">{{ addressSelected?.receiver_name }}</p>
          <p class="font-bold">{{ addressSelected?.receiver_phone }}</p>
        </div>
        <p class="text-black/80">
          {{ addressSelected?.detail_address }} {{ addressSelected?.district }},
          {{ addressSelected?.city?.name }},
          {{ addressSelected?.city?.province?.name }},
          {{ addressSelected?.postal_code }}
          {{ addressSelected?.address_note }}
        </p>
        <UBadge
          v-if="addressSelected?.is_default"
          variant="outline"
          class="font-normal"
          >Utama</UBadge
        >
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
            <div class="w-[16%] text-sm font-normal text-right text-black/80">
              Rp{{ formatNumber(1000) }}
            </div>
            <div class="w-[16%] text-sm font-normal text-right text-black/80">
              {{ formatNumber(10) }}
            </div>
            <div class="w-[16%] text-sm font-medium text-right text-black/80">
              Rp{{ formatNumber(10000000) }}
            </div>
          </div>
        </div>
      </div>
      <div class="bg-blue-50/20 flex divide-x divide-dashed">
        <div class="py-4 px-6 flex gap-4 w-[480px]">
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
    <UCard>
      <template #header>
        <div class="flex justify-between gap-2">
          <div class="flex gap-1 items-center font-normal text-lg">
            <IconVoucher /> Voucher MoreAndShop
          </div>
          <UButton
            :padded="false"
            variant="link"
            color="blue"
            @click="openVoucher = true"
            >Pilih Voucher</UButton
          >
        </div>
      </template>
      <template #default>
        <div class="flex gap-7 items-center">
          <div class="flex gap-1 items-center font-normal text-lg">
            <IconCoin /> Koin MoreAndShop
          </div>
          <p class="font-medium text-sm text-gray-400">
            Koin tidak dapat ditukarkan
          </p>
          <div class="flex-1 flex justify-end items-center gap-2">
            <span class="text-gray-400">[-Rp0]</span>
            <UCheckbox disabled />
          </div>
        </div>
      </template>
    </UCard>

    <div class="bg-white">
      <div class="p-6 flex gap-14">
        <span>Pilih Pembayaran</span>
        <URadioGroup
          v-model="paymentSelected"
          :options="paymentList"
          :ui-radio="{
            wrapper: 'items-center py-2',
          }"
        >
          <template #label="{ option }">
            <div class="flex gap-4 items-center">
              <div
                class="w-12 h-12 border rounded-sm p-2 flex justify-center items-center"
              >
                <img :src="option.image" />
              </div>
              <p class="font-normal text-sm">{{ option.label }}</p>
            </div>
          </template>
        </URadioGroup>
      </div>
      <div
        class="border-t border-gray-100 p-6 flex justify-end bg-yellow-50/20"
      >
        <table class="price-summary">
          <tbody>
            <tr>
              <td>
                <span class="text-sm text-black/55">SubTotal untuk produk</span>
              </td>
              <td class="text-right min-w-44">Rp{{ formatNumber(100000) }}</td>
            </tr>
            <tr>
              <td>
                <span class="text-sm text-black/55">Total Ongkos Kirim</span>
              </td>
              <td class="text-right min-w-44">Rp{{ formatNumber(23000) }}</td>
            </tr>
            <tr>
              <td>
                <span class="text-sm text-black/55">Biaya Layanan</span>
              </td>
              <td class="text-right min-w-44">Rp{{ formatNumber(2500) }}</td>
            </tr>
            <tr>
              <td>
                <span class="text-sm text-black/55">Total Pembayaran</span>
              </td>
              <td class="text-right min-w-44 text-3xl text-primary">
                Rp{{ formatNumber(125500) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        class="border-t border-gray-100 border-dashed p-6 flex justify-end bg-yellow-50/30"
      >
        <UButton class="w-52 justify-center" @click="handlePayment"
          >Buat Pesanan</UButton
        >
      </div>
    </div>

    <ModalAddress v-model:open="openAddress" v-model="addressSelected" />
    <ModalCourier v-model:open="openCourier" />
    <ModalVoucher v-model="openVoucher" />
  </UContainer>
</template>

<script setup>
definePageMeta({
  layout: "auth",
  header: {
    title: "Checkout",
    showProfile: true,
  },
  middleware: ["must-auth"],
});

const router = useRouter();

const nuxtApp = useNuxtApp();

const useCoin = ref(false);

const addressSelected = ref({});

const paymentSelected = ref("bca-va");
const paymentList = computed(() => [
  {
    value: "bni_va",
    label: "Bank BNI",
    image: "/images/logo-bni.webp",
  },
  {
    value: "qris",
    label: "QRIS",
    image: "/images/qris.png",
  },
  {
    value: "bca_va",
    label: "Bank BCA",
    image: "/images/logo-bca.png",
  },
  {
    value: "gopay",
    label: "GoPay",
    image: "/images/logo-gopay.png",
  },
]);

const { data, status } = useApi("/server/api/cart", {
  server: false,
  key: "cart",
  onResponse({ response }) {
    if (response.ok) {
      useCoin.value = !!response._data?.data?.cart?.pay_with_coin;
      addressSelected.value = response._data?.data?.cart?.address || [];
    }
  },
  getCachedData() {
    return (
      nuxtApp.payload.data?.["category-list"] ||
      nuxtApp.static.data?.["category-list"]
    );
  },
});

const openAddress = ref(false);
const openCourier = ref(false);
const openVoucher = ref(false);

function handlePayment() {
  // TODO: Hit API
  router.push("/checkout/payment");
}
</script>

<style scoped>
.price-summary tr:not(:first-child) td {
  @apply py-3;
}

.price-summary tr:first-child td {
  @apply pb-3;
}

.price-summary tr:last-child td {
  @apply pb-0 pt-3;
}
</style>
