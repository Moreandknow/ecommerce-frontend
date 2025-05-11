<template>
  <UPopover
    :popper="{ placement: 'bottom-start', strategy: 'absolute' }"
    :ui="{
      width: 'w-full',
      rounded: 'rounded-sm',
    }"
    @update:open="handleCheckSelected"
  >
    <UInput
      :model-value="showSelected"
      :placeholder="placeholder"
      class="w-full"
      size="lg"
    />

    <template #panel="{ close }">
      <div>
        <UTabs
          v-model="tabActive"
          :items="items"
          :ui="{
            list: {
              background: 'bg-white border-b',
              padding: 'p-0',
              rounded: 'rounded-none',
              marker: {
                wrapper:
                  '!top-[0px] left-0 !h-[100%] border-b-2 border-primary',
                rounded: 'rounded-none',
                shadow: 'shadow-none',
              },
              tab: {
                active: 'text-primary',
                inactive: 'text-black/80',
                rounded: 'rounded-none',
              },
            },
          }"
        >
          <template #item="{ item }">
            <template v-if="options[item.key].length">
              <UButton
                v-for="child in options[item.key]"
                :key="child.uuid"
                variant="ghost"
                block
                :color="
                  form[item.key]?.uuid === child.uuid ? 'primary' : 'gray'
                "
                class="justify-start"
                :label="child.name"
                @click="handleSelect(child, item.key, close)"
              />
            </template>
            <p v-else class="text-center my-3 text-black/40">
              Tidak ada data yang ditemukan
            </p>
          </template>
        </UTabs>
      </div>
    </template>
  </UPopover>
</template>

<script setup>
defineProps({
  placeholder: {
    type: String,
    default: "Provinsi, Kota",
  },
});
const nuxtApp = useNuxtApp();

// const modelCity = defineModel("city", {
//   type: Object,
//   default: () => ({
//     uuid: null,
//     name: null,
//   }),
// });

// const modelProvince = defineModel("province", {
//   type: Object,
//   default: () => ({
//     uuid: null,
//     name: null,
//   }),
// });

const tabActive = ref(0);
const form = reactive({
  province: null,
  city: null,
});

// watch(
//   modelCity,
//   (newCity) => {
//     form.city = {
//       uuid: newCity?.uuid,
//       name: newCity?.name,
//     };
//   },
//   { immediate: true }
// );

// watch(
//   modelProvince,
//   (newProvince) => {
//     form.province = {
//       uuid: newProvince?.uuid,
//       name: newProvince?.name,
//     };
//   },
//   { immediate: true }
// );

const showSelected = computed(
  () => `${form.province?.name || ""}${form.city ? `, ${form.city.name}` : ""}`
);

const items = computed(() => [
  {
    label: "Provinsi",
    key: "province",
  },
  {
    label: "Kota",
    key: "city",
    disabled: !form.province?.uuid,
  },
]);

const options = computed(() => ({
  city: cities.value,
  province: provinces.value,
}));

// const { data: responseProvince, status: statusProvince } = useApi(
//   "/server/api/province",
//   {
//     key: "province-list",
//     getCachedData() {
//       return (
//         nuxtApp.payload.data?.["province-list"] ||
//         nuxtApp.static.data?.["province-list"]
//       );
//     },
//   }
// );

// const { data: responseCities, status: statusCities } = useApi(
//   "/server/api/city",
//   {
//     immediate: false,
//     params: computed(() => ({
//       province_uuid: form.province?.uuid,
//     })),
//   }
// );

const provinces = computed(() => [
  {
    uuid: "f1a67084-78fe-11ef-bd77-9e4478916c69",
    name: "DI Yogyakarta",
  },
  {
    uuid: "f2504636-78fe-11ef-bd77-9e4478916c69",
    name: "DKI Jakarta",
  },
  {
    uuid: "f2f9e20e-78fe-11ef-bd77-9e4478916c69",
    name: "Gorontalo",
  },
  {
    uuid: "f3a28008-78fe-11ef-bd77-9e4478916c69",
    name: "Jambi",
  },
  {
    uuid: "f44b01ce-78fe-11ef-bd77-9e4478916c69",
    name: "Jawa Barat",
  },
]);

const cities = computed(() =>
  [
    {
      uuid: "f44c9304-78fe-11ef-bd77-9e4478916c69",
      province: {
        uuid: "f44b01ce-78fe-11ef-bd77-9e4478916c69",
        name: "Jawa Barat",
      },
      external_id: 104,
      name: "Kabupaten Cianjur",
    },
  ].filter((item) => item.province.uuid == form.province?.uuid)
);

async function handleSelect(value, type, close) {
  form[type] = value;
  await nextTick();
  if (type == "province") {
    form.city = null;
    tabActive.value = 1;
  } else {
    tabActive.value = 0;
    close();
  }
}

function handleCheckSelected(isOpen) {
  if (!isOpen) {
    tabActive.value = 0;
    if (!form.city) {
      form.province = null;
    }
  }
}
</script>

<style lang="scss" scoped></style>
