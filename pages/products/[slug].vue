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
          <div class="flex gap-4">
            <div>
              <UButton class="mt-6" variant="soft">
                <IconCartPlus />
                Masukkan Keranjang
              </UButton>
            </div>
            <UButton class="mt-6 px-14" variant="solid">
              Beli Langsung
            </UButton>
          </div>
          <hr class="my-5" />
          <div class="flex gap-5">
            <div class="flex gap-2">
              <img src="~/assets/images/garansi.png" />
              <p class="text-black/80 text-sm">Garansi MoreAndShop</p>
            </div>
            <p class="text-black/55 text-sm">
              Dapatkan barang pesananmu atau uang kembali.
            </p>
          </div>
        </div>
      </div>
    </UCard>
    <UCard>
      <div class="product-seller">
        <div class="flex gap-6 items-center w-96">
          <UAvatar :alt="dataDummy.seller.store_name" size="3xl" />
          <div>
            <h3>{{ dataDummy.seller.store_name }}</h3>
            <UButton
              color="white"
              size="xs"
              class="mt-2"
              :to="`/shop/${dataDummy.seller.username}`"
              ><IconShop />Kunjungi Toko</UButton
            >
          </div>
        </div>
        <div class="w-[1px] bg-slate-200" />
        <div class="grid grid-cols-2 items-center flex-1">
          <div class="flex gap-2 text-sm">
            <p class="text-black/40 w-36">Penilaian</p>
            <p class="text-primary">{{ dataDummy.seller.rating_count }}</p>
          </div>
          <div class="flex gap-2 text-sm">
            <p class="text-black/40 w-36">Bergabung</p>
            <p class="text-primary">{{ dataDummy.seller.join_date }}</p>
          </div>
          <div class="flex gap-2 text-sm">
            <p class="text-black/40 w-36">Bergabung</p>
            <p class="text-primary">{{ dataDummy.seller.product_count }}</p>
          </div>
        </div>
      </div>
    </UCard>
    <UCard>
      <div class="product-detail">
        <div class="product-title-section">
          <h3 class="text-lg">Spesifikasi Produk</h3>
        </div>
        <div class="flex flex-col gap-4">
          <div class="product-detail-item">
            <p>Kategori</p>
            <div>
              <UBreadcrumb
                :links="[
                  {
                    label: dataDummy.category.parent.name,
                    to: '/',
                  },
                  {
                    label: dataDummy.category.name,
                    to: '/categories/${dataDummy.category.parent.slug}/${dataDummy.category.slug}',
                  },
                ]"
                :ui="{
                  ...uiBreadcrumb,
                  active: 'text-[#0055AA]',
                }"
              />
            </div>
          </div>
          <div class="product-detail-item">
            <p>Stok</p>
            <div class="text-sm font-normal">{{ dataDummy.stock }}</div>
          </div>
          <div class="product-detail-item">
            <p>Dikirim Dari</p>
            <div class="text-sm font-normal uppercase">
              {{ dataDummy.seller.send_from.city.name }}
            </div>
          </div>
        </div>
        <div class="product-title-section">
          <h3 class="text-lg">Deskripsi Produk</h3>
        </div>
        <div
          class="text-sm text-black/80 whitespace-pre-line"
          v-text="dataDummy.description"
        />
      </div>
    </UCard>
    <UCard>
      <h3 class="text-lg font-normal text-black/85">Penilaian Produk</h3>
      <div
        class="mt-3 border border-primary-100/80 bg-primary-50/30 rounded-sm p-8 flex gap-8 items-center"
      >
        <div class="flex flex-col items-center">
          <p class="text-primary text-lg">
            <span class="text-3xl">{{ dataDummy.rating }}</span> dari 5
          </p>
          <BaseRating
            :model-value="dataDummy.rating"
            disabled
            size="lg"
            class="mt-2"
          />
        </div>
        <div class="flex flex-wrap gap-2 items-center">
          <UButton
            variant="outline"
            size="xs"
            class="min-w-24 text-sm justify-center"
            >Semua</UButton
          >
          <div class="flex flex-row-reverse gap-2">
            <UButton
              v-for="(i, index) in 5"
              :key="`rating-${i}`"
              color="white"
              size="xs"
              class="min-w-24 text-sm justify-center"
            >
              {{ i }} Bintang ({{ dataDummy.review_summary[index] || 0 }})
            </UButton>
          </div>
          <UButton
            color="white"
            size="xs"
            class="min-w-24 text-sm justify-center"
            >Dengan Komentar ({{
              dataDummy.review_summary.with_description
            }})</UButton
          >
          <UButton
            color="white"
            size="xs"
            class="min-w-24 text-sm justify-center"
            >Dengan Media ({{
              dataDummy.review_summary.with_attachment
            }})</UButton
          >
        </div>
      </div>
      <div class="flex flex-col mt-1 divide-y">
        <div v-for="i in 5" :key="`review-${i}`" class="flex gap-3 py-4">
          <UAvatar alt="Moreno Adryan" size="lg" />
          <div class="flex-1">
            <p>Moreno Adryan</p>
            <BaseRating :model-value="4" disabled class="mt-1" />
            <div class="flex gap-1 mt-0.5 text-black/55 text-xs">
              <p>2025-5-7 8:28</p>
              |
              <p>Variasi: Vermont Camel, L</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-end pt-5">
        <BasePagination v-model="page" :total="reviews.length" />
      </div>
    </UCard>
    <div class="flex flex-col gap-4 mt-2">
      <div class="flex justify-between gap-2 items-center">
        <h4 class="uppercase text-black/55 font-medium">
          Produk lain dari toko ini
        </h4>
        <UButton
          variant="link"
          class="font-thin no-underline"
          :padded="false"
          :to="`/shop/${dataDummy.seller.username}`"
        >
          Lihat Semua <UIcon name="i-heroicons:chevron-right"
        /></UButton>
      </div>
      <div class="grid grid-cols-6 gap-3">
        <BaseProductCard
          v-for="product in dataDummy.other_product"
          :key="`product - ${product.uuid}`"
          :title="product.name"
          :price="product.price"
          :image="product.image_url"
          :slug="product.slug"
          :sale="product.sale_count"
          :discount="product.price_discount_percentage"
        />
      </div>
    </div>
  </UContainer>
</template>

<script setup>
import productImg from "@/assets/images/homepage/productimage.png";
const productCard = {
  image: productImg,
  price: 590000,
};

const page = ref(1);
const reviews = ref(Array(55));

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
      "Deskripsi produk 1. Lorem ipsum dolor sit amet \n consectetur, adipisicing elit",
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
      send_from: {
        uuid: "77d09151-2a65-11f0-b6b7-04d4c4eb28eb",
        is_default: true,
        receiver_name: "Morenowww",
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
    },
    images: [
      "http://localhost:8000/storage/attachment1.jpg",
      "http://localhost:8000/storage/attachment3.jpg",
      "http://localhost:8000/storage/attachment2.jpg",
      "http://localhost:8000/storage/attachment4.jpg",
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
  @apply flex gap-12;
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
  @apply my-4;
  @apply bg-white;
  @apply p-4;
}

.product-seller {
  @apply flex gap-6 items-stretch;
}

.product-title-section {
  @apply bg-white;
  @apply p-3;
}

.product-title-section h3 {
  @apply text-lg font-normal text-black/85;
}

.product-detail {
  @apply flex flex-col gap-6;
}

.product-detail-item {
  @apply flex gap-2;
}

.product-detail-item > p {
  @apply text-black/40 text-sm w-40;
}
</style>
