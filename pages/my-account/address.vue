<template>
  <div>
    <div class="flex justify-between gap-4 items-center">
      <h3 class="text-lg font-medium">Alamat Saya</h3>
      <UButton icon="i-heroicons:plus" @click="openEditor = true"
        >Tambah Alamat Baru</UButton
      >
    </div>
    <hr class="mt-5 mb-3 border-gray-200/60" />
    <h4 class="text-lg font-normal">Alamat</h4>
    <div class="divide-y">
      <FeatureProfileAddressCardItem
        v-for="address in addressList"
        :key="address.uuid"
        :item="address"
        @change="handleChange"
      />
    </div>

    <FeatureProfileAddressModalMutation v-model:open="openEditor" />
  </div>
</template>

<script setup>
const openEditor = ref(false);
const addressList = [
  {
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
  {
    uuid: "b8354aab-2e92-11f0-840e-04d4c4eb28eb",
    is_default: false,
    receiver_name: "Moreno Adryan",
    receiver_phone: "0666",
    city: {
      uuid: "f250cd04-78fe-11ef-bd77-9e4478916c69",
      province: {
        uuid: "f2504636-78fe-11ef-bd77-9e4478916c69",
        name: "DKI Jakarta",
      },
      external_id: 153,
      name: "Kota Jakarta Selatan",
    },
    district: "Jagakarsa",
    postal_code: "12540",
    detail_address: "JL. Raya Bahaya Awas Tertabrak No. 100 RT15/RW09",
    address_note: "Belakang Lapangan",
    type: "home",
  },
];

function handleChange() {
  openEditor.value = true;
}
</script>

<style lang="scss" scoped></style>
