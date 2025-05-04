<template>
  <UContainer as="section" class="flex flex-col gap-5 py-5">
    <UBreadcrumb :links="links" :ui="uiBreadcrumb" />
    <UCard>
      <div class="product-briefing">
        <div class="product-image">
          <FeatureProductDetailCarousel :items="items" />
        </div>
        <div class="product-information">
          <div class="product-title">
            <h2>{{ dataDummy.name }}</h2>
            <div class="product-summary">
              <div class="product-summary-item">
                <span class="text-primary">{{ dataDummy.rating }}</span>
                <BaseRating :model-value="dataDummy.rating" disabled />
              </div>
              <div class="product-summary-item">
                <span class="text-black/80">{{ dataDummy.rating_count }}</span>
                <span class="product-summary-item-description">Penilaian</span>
              </div>
              <div class="product-summary-item">
                <span class="text-black/80">{{ dataDummy.sale_count }}</span>
                <span class="product-summary-item-description">Terjual</span>
              </div>
            </div>
          </div>
          <div class="product-price">
            <p class="text-gray/400 line-through font-normal">
              Rp {{ formatNumber(249000) }}
            </p>
            <p class="text-primary font-medium text-3xl">
              Rp{{ formatNumber(125000) }}
            </p>
            <UBadge size="xs">50% OFF</UBadge>
          </div>
          <div class="product-variant">
            <div class="flex flex-col gap-6">
              <div
                v-for="variant in dataDummy.variations"
                :key="variant.name"
                class="flex gap-2 items-center"
              >
                <p class="w-28 text-black/55 text-sm">{{ variant.name }}</p>
                <div class="flex flex-wrap gap-2">
                  <UButton
                    v-for="values in variant.values"
                    :key="`${variant.name}-${values}`"
                    color="white"
                    :ui="{
                      base: 'min-w-20 justify-center',
                      padding: {
                        sm: 'px-2 py-2',
                      },
                    }"
                  >
                    {{ values }}
                  </UButton>
                </div>
              </div>
            </div>
          </div>
          <div class="flex gap-2 items-center mt-6">
            <p class="w-28 text-black/55 text-sm">Kuantitas</p>
            <BaseInputQuantity v-model="quantity" />
          </div>
          <UButton class="mt-6" variant="soft">
            <IconCartPlus />
            Masukkan Keranjang
          </UButton>
          <hr class="my-5" />
          <div class="flex gap-5">
            <div class="flex gap-2">
              <img src="~/assets/images/garansi.png" />
              <p class="text-black/80 text-sm">Garansi Syopo</p>
            </div>
            <p class="text-black/55 text-sm">
              Dapatkan barang pesananmu atau uang kembali.
            </p>
          </div>
        </div>
      </div>
    </UCard>
    <UCard>
      <div class="product-seller"></div>
    </UCard>
  </UContainer>
</template>

<script setup>
const page = ref(1);
const review = ref(Array(55));

const quantity = ref(1);
const dataDummy = computed(() => {
  return {
    uuid: "b671ff81-f554-11ef-bc97-04d4c4eb28eb",
    name: "Produk 1",
    slug: "produk-1",
    price: 65019,
    price_sale: null,
    rating: 4,
    rating_count: 2,
    sale_count: 0,
    price_discount_percentage: null,
    stock: 98,
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
      "Deskripsi produk 1. Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    weight: 100,
    length: 72,
    width: 21,
    height: 66,
    video_url: "http://localhost:8000/storage/attachment.mp4",
    seller: {
      username: "Moreno",
      photo_url: "http://localhost:8000/storage",
      store_name: "Moreno Store",
      product_count: 98,
      rating_count: 196,
      join_date: "6 months ago",
      send_from: null,
    },
    images: [
      "http://localhost:8000/storage/attachment1.jpg",
      "http://localhost:8000/storage/attachment3.jpg",
      "http://localhost:8000/storage/attachment2.jpg",
      "http://localhost:8000/storage/attachment4.jpg",
    ],
    variations: [
      { name: "Warna", values: ["Hitam", "Kuning", "Biru"] },
      { name: "Ukuran", values: ["M", "L", "XL"] },
    ],
    review_summary: {
      5: 0,
      4: 0,
      3: 0,
      2: 1,
      1: 1,
      with_attachment: 2,
      with_description: 2,
    },
    other_product: [
      {
        uuid: "b6789830-f554-11ef-bc97-04d4c4eb28eb",
        name: "Produk 2",
        slug: "produk-2",
        price: 48307,
        price_sale: null,
        price_discount_percentage: null,
        sale_count: 0,
        image_url: "http://localhost:8000/storage/attachment2.jpg",
        stock: 70,
      },
      {
        uuid: "b67bc585-f554-11ef-bc97-04d4c4eb28eb",
        name: "Produk 3",
        slug: "produk-3",
        price: 89033,
        price_sale: null,
        price_discount_percentage: null,
        sale_count: 0,
        image_url: "http://localhost:8000/storage/attachment3.jpg",
        stock: 91,
      },
      {
        uuid: "b67f148d-f554-11ef-bc97-04d4c4eb28eb",
        name: "Produk 4",
        slug: "produk-4",
        price: 98078,
        price_sale: null,
        price_discount_percentage: null,
        sale_count: 0,
        image_url: "http://localhost:8000/storage/attachment3.jpg",
        stock: 6,
      },
      {
        uuid: "b6823f3b-f554-11ef-bc97-04d4c4eb28eb",
        name: "Produk 5",
        slug: "produk-5",
        price: 98513,
        price_sale: null,
        price_discount_percentage: null,
        sale_count: 0,
        image_url: "http://localhost:8000/storage/attachment4.jpg",
        stock: 11,
      },
      {
        uuid: "b685c0b8-f554-11ef-bc97-04d4c4eb28eb",
        name: "Produk 6",
        slug: "produk-6",
        price: 16976,
        price_sale: null,
        price_discount_percentage: null,
        sale_count: 0,
        image_url: "http://localhost:8000/storage/attachment4.jpg",
        stock: 16,
      },
      {
        uuid: "b688f86a-f554-11ef-bc97-04d4c4eb28eb",
        name: "Produk 7",
        slug: "produk-7",
        price: 50957,
        price_sale: null,
        price_discount_percentage: null,
        sale_count: 0,
        image_url: "http://localhost:8000/storage/attachment3.jpg",
        stock: 19,
      },
    ],
  };
});

const links = computed(() => [
  {
    label: "MoreAndShop",
    to: "/",
  },
  {
    label: dataDummy.value.category.parent.name,
    to: `/`,
  },
  {
    label: dataDummy.value.category.name,
    to: `/categories/${dataDummy.value.category.parent.slug}/${dataDummy.value.category.slug}`,
  },
  {
    label: dataDummy.value.name,
  },
]);

const uiBreadcrumb = {
  active: "text-black/80",
  inactive: "text-[#0055AA]",
  li: "text-black/80",
  base: "font-normal",
};

const items = [
  "https://picsum.photos/1920/1080?random=1",
  "https://picsum.photos/1920/1080?random=2",
  "https://picsum.photos/1920/1080?random=3",
  "https://picsum.photos/1920/1080?random=4",
  "https://picsum.photos/1920/1080?random=5",
  "https://picsum.photos/1920/1080?random=6",
  "https://picsum.photos/1920/1080?random=1",
  "https://picsum.photos/1920/1080?random=2",
  "https://picsum.photos/1920/1080?random=3",
  "https://picsum.photos/1920/1080?random=4",
  "https://picsum.photos/1920/1080?random=5",
  "https://picsum.photos/1920/1080?random=6",
  "https://picsum.photos/1920/1080?random=1",
  "https://picsum.photos/1920/1080?random=2",
  "https://picsum.photos/1920/1080?random=3",
  "https://picsum.photos/1920/1080?random=4",
  "https://picsum.photos/1920/1080?random=5",
  "https://picsum.photos/1920/1080?random=6",
];
</script>

<style scoped>
.product-briefing {
  @apply flex gap-8;
}

.product-information {
  @apply flex-1;
}

.product-summary {
  @apply mt-2;
  @apply flex gap-4;
  @apply divide-x;
}

.product-summary > div:not(:first-child) {
  @apply pl-4;
}

.product-summary-item {
  @apply flex gap-2 items-center;
}

.product-summary-item span {
  @apply underline underline-offset-4;
}

.product-seller {
  @apply flex gap-6 items-stretch;
}

span.product-summary-item-description {
  @apply no-underline;
  @apply text-black/50 text-sm;
}

.product-price {
  @apply flex gap-4 items-center;
  @apply my-3;
  @apply bg-gray-50;
  @apply p-4;
}
</style>
