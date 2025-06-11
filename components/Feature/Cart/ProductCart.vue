<template>
  <div class="card-product">
    <div class="w-[46%]">
      <div class="flex gap-3 text-sm items-center">
        <NuxtImg
          :src="item.product.image_url"
          class="aspect-[1/1] w-20"
          format="webp"
        />
        <p class="line-clamp-2 text-black/85">
          {{ item.product.name }}
        </p>
        <div class="w-40">
          <p>Variasi:</p>
          <p>
            {{ item.variations.map((variant) => variant.value).join(", ") }}
          </p>
        </div>
      </div>
    </div>
    <div class="text-center w-[15%]">
      Rp{{ formatNumber(item.product.price_sale || item.product.price) }}
    </div>
    <div class="flex justify-center flex-col items-start w-[15%] gap-2">
      <BaseInputQuantity v-model="temporaryQty" :max="item.stock" />
      <UButton
        v-if="temporaryQty !== item.qty"
        variant="link"
        size="xs"
        :padded="false"
        @click="handleUpdateQty"
        :loading="statusUpdateQty == 'pending'"
        >Perbarui Kuantitas</UButton
      >
    </div>
    <div class="text-center w-[15%] text-primary">
      Rp{{ formatNumber(item.total) }}
    </div>
    <div class="text-center w-[10%]">
      <UButton
        variant="link"
        color="black"
        :disabled="statusUpdateQty == -'pending'"
        >Hapus</UButton
      >
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
});

const temporaryQty = ref(props.item?.qty || 0);

const { execute: updateQty, status: statusUpdateQty } =
  useSubmit("/server/api/cart/");

function handleUpdateQty() {
  const formData = new FormData();

  props.item?.variations?.forEach((variant, index) => {
    formData.append(`variations[${index}][label]`, variant.label);
    formData.append(`variations[${index}][value]`, variant.value);
  });
  formData.append("qty", temporaryQty);
  formData.append("_method", "PATCH");

  updateQty(formData);
}
</script>

<style scoped>
.card-product {
  @apply flex items-center;
  @apply text-gray-500 text-sm font-normal;
  @apply py-5;
}
</style>
