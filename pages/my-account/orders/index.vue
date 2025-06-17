<template>
  <div class="space-y-3">
    <BaseTabs
      v-model="formFilter.status"
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
      v-model="formFilter.search"
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
    <FeatureProfileOrderCardOrder
      v-for="(order, index) in data?.data || []"
      :key="`order-${index}`"
      :order="order"
      @review="handleReview"
    />
    <div ref="observerElement" />
    <BaseLoading v-if="status === 'pending'" />
    <template v-else-if="(data?.data || []).length === 0">
      <p class="text-sm font-medium text-black/55 py-4 text-center">
        Tidak ada order yang ditemukan
      </p>
    </template>

    <UModal v-model="openReview">
      <UCard class="text-black/85 text-sm">
        <p class="text-xl font-normal">Nilai Produk</p>
        <div class="space-y-5 mt-8">
          <div
            class="border border-yellow-500 bg-yellow-50 rounded-sm py-2 px-3 flex gap-2"
          >
            <IconCoinSolid />
            <span class="font-medium">Beri penilaian & dapatkan 25 koin!</span>
          </div>
          <div class="space-y-2">
            <FeatureProfileOrderCardProduct
              v-for="a in 3"
              :key="`product-${a}`"
              hide-price
              hide-description
              size="sm"
            />
          </div>
          <div class="flex gap-2 items-center">
            <span class="w-44">Kualitas Produk</span>
            <BaseRating v-model="formRating.rating" size="lg" color="yellow" />
            <span
              :class="{
                'text-yellow-500': formRating.rating > 3,
                'text-black/55': formRating.rating <= 3,
              }"
              >{{ reviewMessage[formRating.rating - 1] }}</span
            >
          </div>
          <div>
            <div class="bg-gray-100 px-6 py-3 rounded-sm space-y-3">
              <UTextarea
                placeholder="Bagikan penilaianmu tentang produk ini untuk membantu Pembeli lain."
              />
              <div class="flex gap-2">
                <UButton
                  size="xs"
                  variant="soft"
                  icon="i-heroicons:camera-solid"
                  label="Tambahkan Foto"
                />
                <UButton
                  size="xs"
                  variant="soft"
                  icon="i-heroicons:video-camera-solid"
                  label="Tambahkan Video"
                />
              </div>
              <p class="text-right text-black/55">
                Tambahkan 50 karakter dengan 1 foto untuk mendapatkan 25 koin!
              </p>
            </div>
          </div>
          <div class="space-y-4">
            <p class="text-base">Tentang Layanan</p>
            <div class="flex gap-2 items-center">
              <span class="w-44">Kecepatan Jasa Kirim</span>
              <BaseRating
                v-model="formRating.courierRating"
                size="lg"
                color="yellow"
              />
              <span
                :class="{
                  'text-yellow-500': formRating.courierRating > 3,
                  'text-black/55': formRating.courierRating <= 3,
                }"
                >{{ reviewMessage[formRating.courierRating - 1] }}</span
              >
            </div>
          </div>
          <div class="flex justify-end gap-2 pt-6">
            <UButton
              class="min-w-36 justify-center"
              variant="link"
              color="gray"
              @click="openReview = false"
              >Nanti Saja</UButton
            >
            <UButton class="min-w-36 justify-center" @click="openReview = false"
              >Ok</UButton
            >
          </div>
        </div>
      </UCard>
    </UModal>
  </div>
</template>

<script setup>
definePageMeta({
  wrapper: "div",
});

const { data: oldOrders } = useNuxtData("order-customer");

const openReview = ref(false);

const formRating = reactive({
  rating: 0,
  courierRating: 0,
});

const observerElement = ref();
let observer = null;

const pagination = ref({
  page: 1,
  per_page: 3,
});

const formFilter = ref({
  search: "",
  status: 0,
});

const searchDebounce = refDebounced(
  computed(() => formFilter.value.search),
  1000
);

const reviewMessage = ["Sangat Buruk", "Buruk", "Biasa", "Baik", "Sangat Baik"];

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
    label: "Sudah Dibayar",
    key: "paid",
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

const { data, status } = useApi("/server/api/order", {
  key: "order-customer",
  onResponse({ response }) {
    if (response.ok) {
      if (!observer) {
        observer = new IntersectionObserver((entries) => {
          if (
            entries[0].isIntersecting &&
            !!response._data.data.next_page_url &&
            pagination.value.page < response._data.data.last_page
          ) {
            pagination.value.page++;
          }
        });
        observer.observe(observerElement.value);
      }
    }
  },
  params: computed(() => {
    const lastStatus =
      formFilter.value.status > 0
        ? items[formFilter.value.status]?.key
        : undefined;
    return {
      ...pagination.value,
      search: searchDebounce.value || undefined,
      last_status: lastStatus,
    };
  }),
  transform(response) {
    if (pagination.value.page === 1) return response?.data;
    const newData = response?.data?.data || [];
    return {
      ...response.data,
      data: [...(oldOrders.value?.data || []), ...newData],
    };
  },
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
    observer = null;
  }
});

watch(searchDebounce, () => {
  pagination.value.page = 1;
});

watch(
  () => formFilter.value.status,
  () => {
    onUnmounted(() => {
      if (observer) {
        observer.disconnect();
        observer = null;
      }
    });
    formFilter.value.search = "";
    pagination.value.page = 1;
  }
);

function handleReview(order) {
  openReview.value = true;
}
</script>

<style lang="scss" scoped></style>
