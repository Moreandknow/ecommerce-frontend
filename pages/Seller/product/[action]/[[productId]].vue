<template>
  <form class="space-y-4">
    <SellerCard title="Informasi Produk">
      <div class="mt-4 space-y-6">
        <SellerFormGroup label="Foto Produk" required>
          <FeatureSellerProductMedia :max="9" />
        </SellerFormGroup>
        <SellerFormGroup label="Video Produk">
          <div class="flex gap-6 items-center">
            <FeatureSellerProductMedia
              :max="1"
              type="video"
              icon="i-heroicons:video-camera-solid"
            />
            <div class="text-sm font-normal text-black/50">
              <p>
                File video maks. harus 30Mb dengan resolusi tidak melebihi 1280
                x 1280px.
              </p>
              <p>Durasi: 10-60detik</p>
              <p>Format: MP4</p>
              <p>
                Catatan: Kamu dapat menampilkan produk saat video sedang
                diproses. Video akan muncul setelah berhasil diproses.
              </p>
            </div>
          </div>
        </SellerFormGroup>
        <SellerFormGroup label="Nama Produk" required>
          <UInput size="lg" />
        </SellerFormGroup>
        <SellerFormGroup label="Kategori" required>
          <UInput :options="[]" size="lg" />
        </SellerFormGroup>
        <SellerFormGroup label="Deskripsi Produk" required :help="`${0}/3000`">
          <UTextarea size="lg" />
        </SellerFormGroup>
      </div>
    </SellerCard>
    <SellerCard class="Informasi Penjualan">
      <div class="mt-4">
        <SellerFormGroup label="Variasi">
          <div class="space-y-4">
            <FeatureSellerProductVariant
              v-for="(variant, index) in variations"
              :key="`variations-${index}`"
              v-model="variant.name"
              v-model:value="variant.value"
              @delete="handleDeleteVariants(index)"
            />
            <div class="p-4 bg-gray-100/50 rounded-sm">
              <UButton
                color="white"
                class="text-primary"
                size="xs"
                icon="i-heroicons:plus"
                @click="handleAddVariatons"
                >Tambah Variasi {{ variations.length + 1 }}</UButton
              >
            </div>
          </div>
        </SellerFormGroup>
      </div>
    </SellerCard>
    <SellerCard class="Pengiriman">
      <div class="mt-4 space-y-6">
        <SellerFormGroup label="Berat" required>
          <div class="flex">
            <UInput size="lg" type="number" placeholder="Input">
              <template #trailing>
                <span class="text-black/50">gr</span>
              </template>
            </UInput>
          </div>
        </SellerFormGroup>
        <SellerFormGroup label="Ukuran Paket" required>
          <div class="flex gap-2 items-center">
            <UInput size="lg" type="number" placeholder="L">
              <template #trailing>
                <span class="text-black/50">cm</span>
              </template>
            </UInput>
            <UIcon name="i-heroicons:x-mark" class="text-black/20" />
            <UInput size="lg" type="number" placeholder="P">
              <template #trailing>
                <span class="text-black/50">cm</span>
              </template>
            </UInput>
            <UIcon name="i-heroicons:x-mark" class="text-black/20" />
            <UInput size="lg" type="number" placeholder="T">
              <template #trailing>
                <span class="text-black/50">cm</span>
              </template>
            </UInput>
          </div>
        </SellerFormGroup>
      </div>
    </SellerCard>
    <SellerCard class="sticky bottom-4">
      <div class="flex justify-end gap-4">
        <UButton color="white" size="xs">Kembali</UButton>
        <UButton color="primary" size="xs">Simpan</UButton>
      </div>
    </SellerCard>
  </form>
</template>

<script setup>
const route = useRoute();
definePageMeta({
  validate: ({ params }) => {
    if (params.action == "add") {
      return !params.productId;
    }
    return params.action == "edit" && !!params.productId;
  },
});

route.meta.breadcrumb =
  route.params.action === "add"
    ? [
        {
          label: "Produk Saya",
          to: "/seller/product",
        },
        {
          label: "Tambah Produk Baru",
        },
      ]
    : [
        {
          label: "Produk Saya",
          to: "/seller/product",
        },
        {
          label: "Ubah Produk",
        },
      ];

const variations = ref([]);

function handleAddVariatons() {
  variations.value.push({
    name: "",
    value: [{ name: "" }],
  });
}
function handleDeleteVariants(index) {
  variations.value.splice(index, 1);
}
</script>

<style scoped></style>
