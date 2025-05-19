<template>
  <SellerCard title="Informasi Saldo">
    <div class="space-y-6 mt-4">
      <div class="border rounded p-4 shadow space-y-4">
        <p class="text-black/65">Saldo</p>
        <div class="flex items-center gap-4">
          <span class="text-3xl font-medium"
            >Rp{{ formatNumber(124512600) }}</span
          >
          <UButton @click="openWithdraw = true" class="">Tarik Dana</UButton>
        </div>
      </div>
      <p class="text-lg font-medium">0 Transaksi</p>
      <BaseDataTable :columns="columns" :rows="transaction">
        <template #amount-data="{ row }"
          >Rp{{ formatNumber(row.amount) }}</template
        >
      </BaseDataTable>
    </div>

    <UModal v-model="openWithdraw">
      <UCard>
        <div class="flex justify-between items-center">
          <span>Tarik Saldo</span>
          <UButton
            icon="i-heroicons:x-mark"
            variant="ghost"
            color="gray"
            @clicl="openWithdraw = false"
          />
        </div>
        <form class="space-y-4 mt-4">
          <UFormGroup label="Bank">
            <USelectMenu :options="[]" size="lg" />
          </UFormGroup>
          <UFormGroup label="No. Rekening">
            <UInput size="lg" />
          </UFormGroup>
          <UFormGroup label="Nama Pemilik Rekening">
            <UInput size="lg" />
          </UFormGroup>
          <UFormGroup label="Jumlah Penarikan">
            <UInput type="number" size="lg" />
          </UFormGroup>
          <UFormGroup label="Deskripsi">
            <UTextarea size="lg" />
          </UFormGroup>
          <div class="flex gap-2 items-center justify-end pt-4">
            <UButton color="white">Tutup</UButton>
            <UButton>Konfirmasi</UButton>
          </div>
        </form>
      </UCard>
    </UModal>
  </SellerCard>
</template>

<script setup>
definePageMeta({
  breadcrumb: [
    {
      label: "Saldo Penjual",
    },
  ],
});

const openWithdraw = ref(false);

const columns = [
  {
    label: "Transaksi Tipe",
    key: "type",
    rowClass: "capitalize",
  },
  {
    label: "Jumlah",
    key: "amount",
    rowClass: "font-bold",
  },
  {
    label: "Deskripsi",
    key: "description",
  },
  {
    label: "Waktu",
    key: "time",
  },
];

const transaction = [
  {
    uuid: "0195908c-80f1-706c-998d-5dfeee8923a7",
    type: "deposit",
    amount: 25000,
    description: "Review produk Produk 99",
    meta: {
      description: "Review produk Produk 99",
    },
    time: "2025-03-13 17:28:02",
  },
  {
    uuid: "0195908b-cbac-7273-b88c-cec2446751c0",
    type: "deposit",
    amount: 25000,
    description: "Review produk Produk 99",
    meta: {
      description: "Review produk Produk 99",
    },
    time: "2025-03-13 17:27:15",
  },
  {
    uuid: "01959089-0acc-7283-950f-927dba0e5fd3",
    type: "deposit",
    amount: 25000,
    description: "Review produk Produk 99",
    meta: {
      description: "Review produk Produk 99",
    },
    time: "2025-03-13 17:24:15",
  },
  {
    uuid: "0195862a-9dd5-728e-8763-a6ac842d56cf",
    type: "withdraw",
    amount: -10000,
    description: "Pembayaran pesanan INV-6-20250311170454",
    meta: {
      description: "Pembayaran pesanan INV-6-20250311170454",
    },
    time: "2025-03-11 17:04:54",
  },
  {
    uuid: "01958624-5b6d-7366-96cf-7f0db2b44d39",
    type: "deposit",
    amount: 5000,
    description: "Topup Dummy",
    meta: {
      description: "Topup Dummy",
    },
    time: "2025-03-11 16:58:04",
  },
  {
    uuid: "01958624-3a97-70eb-9838-a1933ea0750d",
    type: "deposit",
    amount: 5000,
    description: "Topup Dummy",
    meta: {
      description: "Topup Dummy",
    },
    time: "2025-03-11 16:57:56",
  },
  {
    uuid: "0195860c-7dc4-702d-af05-6bf8ba48b812",
    type: "deposit",
    amount: 5000,
    description: "Topup Dummy",
    meta: {
      description: "Topup Dummy",
    },
    time: "2025-03-11 16:32:00",
  },
];
</script>

<style lang="scss" scoped></style>
