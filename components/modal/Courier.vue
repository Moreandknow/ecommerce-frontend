<template>
  <UModal
    v-model="isOpen"
    :ui="{
      width: 'sm:max-w-2xl',
    }"
  >
    <UCard>
      <template #default>
        <div class="flex flex-col gap-4">
          <p class="text-lg font-medium text-black/85">Pilih Opsi Pengiriman</p>

          <div
            v-if="isLoading"
            class="flex items-center justify-center gap-4 py-10"
          >
            <IconLoading class="w-8 h-8 text-primary" />
            <p>Memuat opsi pengiriman...</p>
          </div>

          <template v-else>
            <div class="flex gap-2 items-center">
              <p class="font-medium text-black/40">PILIH JASA PENGIRIMAN</p>
              <img
                src="~/assets/images/garansi.png"
                class="object-contain w-3 h-3"
              />
            </div>

            <template v-if="items.length > 0">
              <BaseRadioCard v-model="courierSelected" :items="items">
                <template
                  #item="{
                    label,
                    value,
                    description,
                    price,
                    etd,
                    selected,
                    onClick,
                  }"
                >
                  <div
                    class="hover:bg-primary-50 border hover:border-primary-200 p-5"
                    :class="[
                      selected
                        ? 'bg-primary-50 border-primary-200'
                        : 'bg-gray-100/50 border-transparent',
                    ]"
                    role="button"
                    @click="onClick(value)"
                  >
                    <div class="flex gap-5 text-sm">
                      <span class="font-medium">{{ label }}</span>
                      <span>Rp{{ price }}</span>
                    </div>
                    <p class="text-xs text-black/90 mt-1">
                      {{ description }}
                    </p>
                    <p class="text-xs text-black/60 mt-1">
                      Garansi tiba: {{ etd }}
                    </p>
                  </div>
                </template>
              </BaseRadioCard>
            </template>

            <p v-else class="text-center text-black/55 py-10">
              Tidak ada layanan kurir yang tersedia untuk alamat Anda.
            </p>
          </template>
        </div>
      </template>
      <template #footer>
        <div class="flex justify-end gap-2">
          <UButton color="white" @click="isOpen = false">Nanti Saja</UButton>
          <UButton
            :disabled="!courierSelected || isLoading"
            :loading="statusUpdate === 'pending'"
            @click="handleConfirmCourier"
          >
            Konfirmasi
          </UButton>
        </div>
      </template>
    </UCard>
  </UModal>
</template>

<script setup>
const isOpen = defineModel("open", {
  type: Boolean,
  default: false,
});
const model = defineModel({
  type: Object,
});
const courierSelected = ref();

const { data: courierTiki, status: statusTiki } = useApi(
  "/server/api/cart/shipping?courier=tiki",
  { showErrorToast: false }
);
const { data: courierJne, status: statusJne } = useApi(
  "/server/api/cart/shipping?courier=jne",
  { showErrorToast: false }
);

const { execute, status: statusUpdate } = useSubmit(
  "/server/api/cart/shipping-fee",
  {
    onResponse({ response }) {
      if (response.ok) {
        isOpen.value = false;
        refreshNuxtData("cart");
      }
    },
  }
);

watch(
  model,
  (newCourier) => {
    if (newCourier?.courier) {
      courierSelected.value = newCourier;
    }
  },
  { immediate: true }
);

const isLoading = computed(() => {
  return statusTiki.value === "pending" || statusJne.value === "pending";
});

const items = computed(() => {
  const tiki = (courierTiki.value.data?.cost || [])?.map((courier) => ({
    label: `TIKI - ${courier.service}`,
    price: formatNumber(courier.value),
    etd: getEstimate(courier.etd),
    description: courier.description,
    value: {
      courier: "tiki",
      service: courier.service,
    },
  }));

  const jne = (courierJne.value.data?.cost || [])?.map((courier) => ({
    label: `JNE - ${courier.service}`,
    price: formatNumber(courier.value),
    etd: getEstimate(courier.etd),
    description: courier.description,
    value: {
      courier: "jne",
      service: courier.service,
    },
  }));

  return [...tiki, ...jne];
});

function handleConfirmCourier() {
  execute(courierSelected.value);
}
</script>

<style lang="scss" scoped></style>
