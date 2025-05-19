<template>
  <SellerCard>
    <div class="mt-4 space-y-4">
      <BaseTabs
        :items="status"
        :content="false"
        :ui="{
          wrapper: 'border-b border-gray-100',
          list: {
            width: 'w-[unset] border-none',
            tab: {
              base: 'font-normal',
            },
          },
        }"
      />
      <form class="flex gap-4 items-center">
        <UInput class="flex-1" placeholder="Masukkan no. pesanan" />
        <UButton label="Terapkan" size="xs" variant="outline" type="submit" />
        <UButton label="Reset" size="xs" color="white" />
      </form>
      <p class="text-lg font-medium">0 Pesanan</p>
      <BaseDataTable :columns="columns" :rows="orders">
        <template #total-data="{ row }">
          Rp{{ formatNumber(row.total) }}
        </template>
        <template #action-data="{ row }">
          <UButton
            variant="link"
            color="blue"
            :padded="false"
            label="Lihat Detail"
            :to="`/seller/order/${row.uuid}`"
          />
        </template>
      </BaseDataTable>
    </div>
  </SellerCard>
</template>

<script setup>
definePageMeta({
  breadcrumb: [
    {
      label: "Pesanan Saya",
    },
  ],
});

const status = [
  {
    label: "Semua",
    key: "all",
  },
  {
    label: "Belum Dibayar",
    key: "pending_payment",
  },
  {
    label: "Dibayar",
    key: "pending_payment",
  },
  {
    label: "Sedang Diproses",
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
const columns = [
  {
    key: "invoice_number",
    label: "No. Pesanan",
  },
  {
    key: "total",
    label: "Harga Total",
  },
  {
    key: "last_status.status",
    label: "Status",
    rowClass: "capitalize",
  },
  {
    key: "action",
    label: "Aksi",
  },
];

const orders = [
  {
    uuid: "6bb6e350-fe89-11ef-9f2d-04d4c4eb28eb",
    invoice_number: "INV-6-20250311145924",
    buyer: {
      name: "Moreno Adryan",
      email: "madrgame@gmail.com",
      photo_url: null,
      username: "Monerok",
      phone: "011111",
    },
    address: {
      uuid: "fdc76d66-f9ce-11ef-8e99-04d4c4eb28eb",
      is_default: true,
      receiver_name: "Monerokkk",
      receiver_phone: "08124",
      city: {
        uuid: "ee8eb26c-78fe-11ef-bd77-9e4478916c69",
        province: {
          uuid: "ee8d857c-78fe-11ef-bd77-9e4478916c69",
          name: "Bali",
        },
        external_id: 128,
        name: "Kabupaten Gianyar",
      },
      district: "Tambun",
      postal_code: "12540",
      detail_address: "JL. ABC 123",
      address_note: "Belakang jurang",
      type: "home",
    },
    total: 67192,
    courier: "jne",
    courier_type: "JTR",
    items: [
      {
        uuid: "6bb793e6-fe89-11ef-9f2d-04d4c4eb28eb",
        product: {
          uuid: "b7d09cac-f554-11ef-bc97-04d4c4eb28eb",
          name: "Produk 99",
          slug: "produk-99",
          price: 10000,
          price_sale: null,
          price_discount_percentage: null,
          sale_count: 12,
          image_url: "http://localhost:8000/storage/attachment4.jpg",
          stock: 24,
        },
        variations: [
          {
            label: "Ukuran",
            value: "M",
          },
        ],
        qty: 2,
        note: "Cepetan bang",
        price: 33596,
        total: 67192,
        weight: 89,
        is_reviewed: false,
      },
    ],
    status: [
      {
        status: "pending_payment",
        description: "Silahkan selesaikan pembayaran Anda",
        created_at: "2025-03-11 14:59:24",
      },
      {
        status: "paid",
        description: "Pembayaran berhasil, menunggu proses pengiriman",
        created_at: "2025-03-11 15:00:28",
      },
    ],
    last_status: {
      status: "paid",
      description: "Pembayaran berhasil, menunggu proses pengiriman",
      created_at: "2025-03-11 15:00:28",
    },
    created_at: "2025-03-11 14:59:24",
  },
];
</script>

<style lang="scss" scoped></style>
