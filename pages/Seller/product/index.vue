<template>
  <div class="space-y-9">
    <div class="flex justify-between items-center gap-2">
      <h3 class="font-medium text-xl">Produk Saya</h3>
      <UButton icon="i-heroicons:plus" label="Tambah Produk Baru" />
    </div>
    <UCard>
      <div class="space-y-6">
        <div class="flex gap-4 items-center">
          <UInput
            leading-icon="i-heroicons:magnifying-glass"
            class="flex-1"
            placeholder="Cari Nama Produk, SKU Induk, Kode Variasi, ID Produk"
          />
          <USelectMenu
            :options="[]"
            placeholder="Cari berdasarkan kategori"
            class="flex-1"
          />
          <UButton size="xs" label="Terapkan" variant="outline" />
          <UButton size="xs" label="Atur Ulang" color="white" />
        </div>
        <p class="text-lg font-medium">0 Produk</p>
        <BaseDataTable
          :columns="columns"
          :rows="products"
          empty-text="Produk Tidak Ditemukan"
        >
          <template #name-data="{ row }">
            <div class="flex gap-2">
              <img :src="row.images?.[0]" class="w-14 h-14 object-cover" />
              <div class="flex flex-col items-start gap-0.5">
                <span class="text-sm font-medium">{{ row.name }}</span>
                <span class="text-sm text-black/65">
                  ID Produk: {{ row.uuid }}
                </span>
              </div>
            </div>
          </template>
          <template #price-data="{ row }">
            Rp{{ formatNumber(row.price) }}
          </template>
          <template #action-data="{ row }">
            <div class="flex flex-col gap-1">
              <UButton
                variant="link"
                :padded="false"
                color="blue"
                label="Ubah"
                @click="handleEdit(row)"
              />
              <UButton
                variant="link"
                :padded="false"
                color="blue"
                label="Hapus"
              />
            </div>
          </template>
        </BaseDataTable>
      </div>
    </UCard>
  </div>
</template>

<script setup>
const columns = [
  {
    key: "name",
    label: "Produk",
  },
  {
    key: "sale_count",
    label: "Penjualan",
  },
  {
    key: "price",
    label: "Harga",
  },
  {
    key: "stock",
    label: "Stok",
  },
  {
    key: "action",
    label: "Aksi",
  },
];
const products = [
  {
    uuid: "b7d09cac-f554-11ef-bc97-04d4c4eb28eb",
    name: "Produk 99",
    slug: "produk-99",
    price: 10000,
    price_sale: null,
    stock: 24,
    category: {
      slug: "pizza",
      name: "Pizza",
      description: null,
      parent: {
        slug: "makanan-minuman",
        name: "Makanan & Minuman",
        description: null,
      },
    },
    description:
      "Deskripsi produk 99. Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    weight: 89,
    length: 57,
    width: 58,
    height: 62,
    video_url: "http://localhost:8000/storage/attachment.mp4",
    sale_count: 12,
    images: [
      "https://picsum.photos/1920/1080?random=1",
      "http://localhost:8000/storage/attachment1.jpg",
      "http://localhost:8000/storage/attachment3.jpg",
      "http://localhost:8000/storage/attachment2.jpg",
    ],
    variations: [
      {
        name: "Warna",
        values: ["Hitam", "Kuning", "Biru"],
      },
      {
        name: "Ukuran",
        values: ["M", "L", "XL"],
      },
    ],
  },
  {
    uuid: "b7d46e14-f554-11ef-bc97-04d4c4eb28eb",
    name: "Produk 100",
    slug: "produk-100",
    price: 100000,
    price_sale: 80000,
    stock: 66,
    category: {
      slug: "tv",
      name: "TV",
      description: null,
      parent: {
        slug: "elektronik",
        name: "Elektronik",
        description: null,
      },
    },
    description:
      "Deskripsi produk 100. Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    weight: 28,
    length: 9,
    width: 16,
    height: 11,
    video_url: "http://localhost:8000/storage/attachment.mp4",
    sale_count: 1,
    images: [
      "https://picsum.photos/1920/1080?random=1",
      "http://localhost:8000/storage/attachment1.jpg",
      "http://localhost:8000/storage/attachment4.jpg",
      "http://localhost:8000/storage/attachment2.jpg",
    ],
    variations: [
      {
        name: "Warna",
        values: ["Hitam", "Kuning", "Biru"],
      },
      {
        name: "Ukuran",
        values: ["M", "L", "XL"],
      },
    ],
  },
];
function handleEdit(row) {
  router.push({
    path: `/seller/product/edit/${row.uuid}`,
    state: row,
  });
}
</script>

<style lang="scss" scoped></style>
