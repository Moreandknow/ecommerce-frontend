<template>
  <BaseLoading v-if="status === 'pending'" />
  <div v-else class="text-sm text-black/80">
    <div class="bg-white divide-y divide-dashed">
      <div class="flex justify-between gap-4 px-6 py-5">
        <UButton
          label="KEMBALI"
          to="/my-account/orders"
          icon="i-heroicons:chevron-left"
          :padded="false"
          variant=""
          color="gray"
        />
        <div class="divide-x">
          <span class="px-4">NO. PESANAN. {{ data?.invoice_number }}</span>
          <span class="px-4 uppercase text-primary">{{
            lastStatus?.description
          }}</span>
        </div>
      </div>
      <div class="px-6 py-10">
        <BaseTimelineHorizontal
          :items="timelineStatus"
          class="grid grid-cols-5"
        />
      </div>
      <!-- <div class="bg-yellow-50/30 flex justify-end px-6 py-3">
        <UButton
          color="white"
          class="min-w-56 justify-center"
          label="Batalkan"
        />
      </div> -->
      <div class="bg-yellow-50/30 flex justify-between px-6 py-3 items-center">
        <p class="text-black/55">
          produk diperkirakan akan sampai pada
          <span class="underline">15-05-2025</span>
          -
          <span class="underline">15-05-2025</span>
        </p>
        <UButton class="min-w-56 justify-center" label="Pesanan selesai" />
      </div>
      <div class="bg-yellow-50/30 flex justify-between px-6 py-3 items-center">
        <p class="text-black/55">
          Nilai pesanan sebelum
          <span class="underline">15-05-2025</span>
          dan dapatkan maks. 25 koin MoreAndKnow!
        </p>
        <UButton class="min-w-56 justify-center" label="Nilai" />
      </div>
      <div class="px-6 py-5">
        <div class="flex justify-between items-center">
          <p class="text-xl">Alamat Pengiriman</p>
          <div class="text-right text-xs text-black/55">
            <p>SPX Hemat</p>
            <p>XXXXXXXXX</p>
          </div>
        </div>
        <div class="flex divide-x mt-3">
          <div class="w-80 py-2 pr-3">
            <p>{{ data?.address?.receiver_name }}</p>
            <p class="text-black/55 mt-2">
              {{ data?.address?.receiver_phone }}
            </p>
            <p class="text-black/55">
              {{ data?.address.detail_address }} {{ data?.address.district }},
              {{ data?.address.city?.name }},
              {{ data?.address.city?.province?.name }},
              {{ data?.address.postal_code }}
              {{ data?.address.address_note }}
            </p>
          </div>
          <div class="pl-3">
            <BaseTimelineVertical :items="orderHistory" />
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-50 divide-y">
      <div class="px-6 py-3">
        <div class="flex gap-2 items-center">
          <span class="font-semibold">{{ data?.seller?.store_name }}</span>
          <UButton
            color="white"
            size="xs"
            :to="`/shop/${data?.seller?.user_name}`"
            ><IconShop />Kunjungi Toko</UButton
          >
        </div>
        <hr class="mt-3" />
        <div class="divide-y">
          <LazyFeatureProfileOrderCardProduct
            v-for="item in data?.items"
            :key="`product-${item.uuid}`"
            size="sm"
            class="py-3"
            :item="item"
          />
        </div>
      </div>
      <div>
        <table class="order-price">
          <tr v-for="price in priceItem" :key="price.label">
            <td>
              <template v-if="price.label == `Metode Pembayaran`">
                <div class="flex items-center gap-2 justify-end">
                  <img src="~/assets/images/garansi.png" class="h-4 w-4" />
                  <span>{{ price.label }}</span>
                </div>
              </template>
              <template v-else>{{ price.label }}</template>
            </td>
            <td>{{ price.value }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  IconOrder,
  IconPaid,
  IconTruckOutline,
  IconInbox,
  IconStars,
} from "#components";
definePageMeta({
  wrapper: "div",
});

const route = useRoute();
const nuxtApp = useNuxtApp();
const { data, status } = useApi(`/server/api/order/${route.params.orderId}`, {
  key: `order-customer-${route.params.orderId}`,
  getCachedData() {
    return (
      nuxtApp.payload.data?.[`order-customer-${route.params.orderId}`] ||
      nuxtApp.static.data?.[`order-customer-${route.params.orderId}`]
    );
  },
  transform(response) {
    return response?.data || {};
  },
});

const orderHistory = computed(() => {
  return data.value?.status
    ?.map((item, index, arr) => ({
      title: item?.description,
      time: item?.created_at,
      active: index === arr.length - 1,
    }))
    .sort((a, b) => new Date(b.time) - new Date(a.time));
});

const lastStatus = computed(
  () => data.value?.status?.[(data.value?.status?.length || 0) - 1]
);

const timelineStatus = [
  {
    title: "Pesanan Dibuat",
    time: "10-05-2025 16:26",
    passed: true,
    icon: IconOrder,
  },
  {
    title: "Pesanan Dibayarkan (Rp144.400)",
    time: "12-05-2025 16:26",
    passed: true,
    icon: IconPaid,
  },
  {
    title: "Sedang Dikemas",
    time: "",
    icon: IconTruckOutline,
    active: true,
  },
  {
    title: "Dikirim",
    time: "",
    icon: IconInbox,
  },
  {
    title: "Belum Dinilai",
    time: "",
    icon: IconStars,
  },
];

const priceItem = computed(() => [
  {
    label: "Subtotal Produk",
    value: `Rp ${formatNumber(data.value?.subtotal)}`,
  },
  {
    label: "Subtotal Pengiriman",
    value: `Rp ${formatNumber(data.value?.courier_price)}`,
  },
  {
    label: "Voucher Digunakan",
    value: `Rp ${formatNumber(data.value?.voucher_value)}`,
  },
  {
    label: "Cashback Koin",
    value: `Rp ${formatNumber(data.value?.voucher_cashback || 0)}`,
  },
  {
    label: `${data.value?.pay_with_coin} Koin MoreAndShop ditukarkan`,
    value: `Rp ${formatNumber(`${data.value?.pay_with_coin}`)}`,
  },
  {
    label: "Biaya Layanan",
    value: `Rp ${formatNumber(data.value?.service_fee)}`,
  },
  {
    label: "Total Pesanan",
    value: `Rp ${formatNumber(data.value?.total_payment)}`,
    class: "text-primary text-2xl",
  },
  {
    label: "Metode Pembayaran",
    value:
      data.value?.payment_method === "bca_va"
        ? "Virtual Account BCA"
        : data.value?.payment_method === "bni_va"
        ? "Virtual Account BNI"
        : data.value?.payment_method === "gopay"
        ? "GoPay"
        : "QRIS",
  },
]);
</script>

<style scoped>
table.order-price {
  @apply w-full;
}

.order-price tr td {
  @apply text-right;
  @apply border border-black/10 border-dashed;
}

.order-price tr td:first-child {
  @apply p-3;
  @apply text-black/55 text-xs;
  border-left: none;
}
.order-price tr td:last-child {
  @apply px-6 py-3;
  border-right: none;
}

.order-price tr:first-child td {
  border-top: none;
  width: 67%;
}
.order-price tr:last-child td {
  border-bottom: none;
}
</style>
