<template>
  <UContainer class="py-5 text-sm text-gray-800 dark:text-gray-200">
    <UCard
      :ui="{
        body: { padding: 'px-0 sm:px-0' },
        header: { padding: 'px-4 py-4 sm:px-6 sm:py-5' },
        footer: { padding: 'px-4 py-4 sm:px-6 sm:py-5' },
      }"
    >
      <template #header>
        <div class="flex items-center gap-2 sm:gap-4">
          <UButton
            :padded="false"
            icon="i-heroicons:arrow-left"
            variant="link"
            color="gray"
            aria-label="Kembali"
            @click="goBack"
          />
          <p
            class="text-lg sm:text-xl font-medium text-gray-900 dark:text-white"
          >
            Pembayaran
          </p>
        </div>
      </template>

      <template #default>
        <div class="flex justify-center">
          <div
            class="w-full max-w-[500px] divide-y divide-gray-200 dark:divide-gray-700"
          >
            <div
              class="flex items-center justify-between px-4 py-4 sm:px-6 sm:py-5"
            >
              <span
                class="text-base font-normal text-gray-700 dark:text-gray-300"
                >Total Pembayaran</span
              >
              <span class="text-base font-medium text-primary"
                >Rp{{ formatNumber(100000) }}</span
              >
            </div>
            <div
              class="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 py-4 sm:px-6 sm:py-5 gap-2 sm:gap-0"
            >
              <span
                class="text-base font-normal text-gray-700 dark:text-gray-300"
                >Bayar Dalam</span
              >
              <div class="text-left sm:text-right">
                <p class="text-primary text-base font-medium">
                  {{ countdownTimer }}
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  Jatuh tempo {{ dueDate }}
                </p>
              </div>
            </div>
            <div class="flex flex-col gap-5 px-4 py-4 sm:px-6 sm:py-5">
              <div class="flex gap-3 items-center">
                <img
                  v-if="paymentFrom.image"
                  :src="paymentFrom.image"
                  class="w-8 h-8 object-contain"
                  :alt="paymentFrom.label"
                />
                <p class="text-base text-gray-800 dark:text-gray-200">
                  {{ paymentFrom.label }}
                </p>
              </div>
              <div v-if="['bca_va', 'bni_va'].includes(paymentSelected)">
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  No. Virtual Account
                </p>
                <div class="flex flex-wrap gap-x-3 gap-y-2 mt-1 items-center">
                  <p class="text-primary text-lg sm:text-xl font-semibold">
                    1234 5678 9012 3456
                  </p>
                  <UButton
                    variant="link"
                    color="teal"
                    :padded="false"
                    size="sm"
                    @click="copyToClipboard('1234567890123456')"
                    >SALIN</UButton
                  >
                </div>
              </div>
              <img
                v-if="['qris', 'gopay'].includes(paymentSelected)"
                src="/images/qris-example.png"
                alt="Contoh QRIS"
                class="w-full max-w-[200px] sm:max-w-[240px] mx-auto rounded-md shadow-sm"
              />
              <p class="text-xs sm:text-sm text-teal-600 dark:text-teal-400">
                Proses verifikasi kurang dari 10 menit setelah pembayaran
                berhasil.
              </p>
              <div class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <p v-if="message[paymentSelected]?.description">
                  {{ message[paymentSelected].description }}
                </p>
                <p v-if="message[paymentSelected]?.caption">
                  {{ message[paymentSelected].caption }}
                </p>
              </div>
              <div class="mt-5 sm:mt-7">
                <UButton
                  block
                  class="max-w-xs sm:max-w-sm mx-auto w-full py-2.5 sm:py-3 text-base"
                  @click="handleCheckPayment"
                  >CEK STATUS PEMBAYARAN</UButton
                >
              </div>
            </div>
          </div>
        </div>
      </template>
    </UCard>

    <UModal v-model="isSuccess">
      <UCard :ui="{ rounded: 'rounded-lg', body: { padding: 'p-6 sm:p-8' } }">
        <div class="flex flex-col items-center text-center">
          <UIcon
            name="i-heroicons-check-circle"
            class="text-green-500 text-5xl sm:text-6xl mb-4"
          />
          <p
            class="text-lg sm:text-xl font-medium text-gray-900 dark:text-white"
          >
            Pembayaran Berhasil!
          </p>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-3">
            Silakan cek notifikasi untuk mengetahui status pengiriman barang
            Anda.
          </p>
          <div class="flex justify-center mt-6 sm:mt-8 w-full">
            <UButton
              class="w-full max-w-[200px] py-2.5 text-base"
              @click="closeSuccessModalAndRedirect"
              >OK</UButton
            >
          </div>
        </div>
      </UCard>
    </UModal>
  </UContainer>
</template>

<script setup>
definePageMeta({
  header: {
    showProfile: false,
    showSearch: false,
    showCart: false,
  },
});

const isSuccess = ref(false);

const paymentSelected = "gopay";
const paymentFrom = computed(() =>
  [
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
  ].find((item) => item.value == paymentSelected)
);

const message = {
  bni_va: {
    description:
      "Bayar pesanan ke Virtual Account di atas sebelum membuat pesanan kembali dengan Virtual Account agar nomor tetap sama.",
    caption: "Hanya menerima dari Bank BNI",
  },
  bca_va: {
    description:
      "Bayar pesanan ke Virtual Account di atas sebelum membuat pesanan kembali dengan Virtual Account agar nomor tetap sama.",
    caption: "Hanya menerima dari Bank BCA",
  },
  qris: {
    description:
      "Bayar pesanan ke QRIS di atas sebelum membuat pesanan kembali dengan QRIS agar nomor tetap sama.",
    caption: "Menerima dari semua Bank",
  },
  gopay: {
    description:
      "Bayar pesanan ke GoPay di atas sebelum membuat pesanan kembali dengan GoPay agar nomor tetap sama.",
    caption: "Menerima dari semua Bank",
  },
};

function handleCheckPayment() {
  // TODO: HIT API
  isSuccess.value = true;
}
</script>

<style scoped>
.payment-item {
  @apply py-5;
  @apply flex;
}
</style>
