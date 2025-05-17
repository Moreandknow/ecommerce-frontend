<template>
  <SellerCard title="Daftar Voucher">
    <template #header-append>
      <UButton icon="i-heroicons:plus" to="/seller/voucher/add"
        >Tambah Voucher</UButton
      >
    </template>
    <BaseTabs
      :items="status"
      :ui="{
        wrapper: 'border-b border-gray-100',
        list: {
          width: 'w-[unset] border-none',
          tab: {
            font: 'font-normal',
          },
        },
      }"
      :content="false"
    />
    <div class="mt-8 space-y-4 text-sm">
      <form class="flex gap-3 items-center">
        <span>Cari</span>
        <UInput placeholder="input" class="w-80" />
        <UButton variant="outline" size="xs">Cari</UButton>
      </form>
      <BaseDataTable :rows="items" :columns="columns">
        <template #name-data="{ row }">
          <div class="flex gap-2">
            <img
              class="w-14 h-14 object-cover"
              :src="
                row.voucher_type == 'discount'
                  ? image[row.discount_cashback_type]
                  : image['coin']
              "
            />
            <div class="flex flex-col items-start gap-0.5">
              <UBadge
                label="Telah Berakhir"
                color="gray"
                size="xs"
                variant="soft"
                :ui="{
                  variant: {
                    soft: 'bg-gray-100',
                  },
                }"
              />
              <span class="text-sm font-medium">
                {{ row.name }}
              </span>
              <span class="text-sm">KODE:{{ row.code }}</span>
            </div>
          </div>
        </template>
        <template #discount-data="{ row }">
          <p>
            {{ row.discoun_cashback_type == "fixed" ? "Rp" : "" }}
            {{ formatNumber(row.discount_cashback_value)
            }}{{ row.discount_cashback_type == "percentage" ? "%" : "" }}
          </p>
          <div
            v-if="row.voucher_type == 'cashback'"
            class="flex gap-2 items-center text-sm text-black/55"
          >
            <IconCoin class="w-4 h-4" /> Cashback
          </div>
        </template>
        <template #action-data="{ row }">
          <div class="flex flex-col gap-2">
            <UButton
              label="Ubah"
              variant="link"
              color="blue"
              :padded="false"
              @click="handleEdit(row)"
            />
            <UButton
              label="Hapus"
              variant="link"
              color="blue"
              :padded="false"
            />
          </div>
        </template>
      </BaseDataTable>
    </div>
  </SellerCard>
</template>

<script setup>
import VoucherCoin from "~/assets/images/voucher-cashback-coin.png";
import VoucherPercentage from "~/assets/images/voucher-percentage.png";
import VoucherFixed from "~/assets/images/voucher-fixed.png";

const router = useRouter();

const image = {
  coin: VoucherCoin,
  percentage: VoucherPercentage,
  fixed: VoucherFixed,
};

const status = [
  {
    label: "Semua",
    key: "all",
  },
  {
    label: "Berjalan",
    key: "ongoing",
  },
  {
    label: "Semua",
    key: "coming_sonn",
  },
  {
    label: "Semua",
    key: "expired",
  },
];

const items = [
  {
    uuid: "520ec041-fa76-11ef-8193-04d4c4eb28eb",
    code: "DISCOUNT10",
    name: "Diskon 10% Max 10k",
    used_count: 1,
    is_public: true,
    voucher_type: "discount",
    discount_cashback_type: "percentage",
    discount_cashback_value: 10,
    discount_cashback_max: null,
    start_date: "2025-03-06 10:32:36",
    end_date: "2025-03-13 10:32:36",
  },
  {
    uuid: "520fb83b-fa76-11ef-8193-04d4c4eb28eb",
    code: "DISCOUNT20",
    name: "Diskon 20% Max 20k",
    used_count: 0,
    is_public: true,
    voucher_type: "discount",
    discount_cashback_type: "percentage",
    discount_cashback_value: 20,
    discount_cashback_max: 20000,
    start_date: "2025-03-06 10:32:36",
    end_date: "2025-03-13 10:32:36",
  },
  {
    uuid: "52100286-fa76-11ef-8193-04d4c4eb28eb",
    code: "DISCOUNT50",
    name: "Discount 50%",
    used_count: 0,
    is_public: true,
    voucher_type: "discount",
    discount_cashback_type: "percentage",
    discount_cashback_value: 50,
    discount_cashback_max: null,
    start_date: "2025-03-06 10:32:36",
    end_date: "2025-03-13 10:32:36",
  },
  {
    uuid: "52104362-fa76-11ef-8193-04d4c4eb28eb",
    code: "DISCOUNT90",
    name: "Discount 90%",
    used_count: 0,
    is_public: false,
    voucher_type: "discount",
    discount_cashback_type: "percentage",
    discount_cashback_value: 90,
    discount_cashback_max: null,
    start_date: "2025-03-06 10:32:36",
    end_date: "2025-03-07 10:32:36",
  },
  {
    uuid: "5210c136-fa76-11ef-8193-04d4c4eb28eb",
    code: "DISCOUNT5000",
    name: "Discount 5000",
    used_count: 0,
    is_public: true,
    voucher_type: "discount",
    discount_cashback_type: "fixed",
    discount_cashback_value: 5000,
    discount_cashback_max: null,
    start_date: "2025-03-06 10:32:36",
    end_date: "2025-03-13 10:32:36",
  },
  {
    uuid: "521106da-fa76-11ef-8193-04d4c4eb28eb",
    code: "DISCOUNT10000",
    name: "Discount 10000",
    used_count: 0,
    is_public: true,
    voucher_type: "discount",
    discount_cashback_type: "fixed",
    discount_cashback_value: 10000,
    discount_cashback_max: null,
    start_date: "2025-03-06 10:32:36",
    end_date: "2025-03-13 10:32:36",
  },
  {
    uuid: "5211732d-fa76-11ef-8193-04d4c4eb28eb",
    code: "CASHBACK5%",
    name: "Cashback 5% Max 10k",
    used_count: 1,
    is_public: true,
    voucher_type: "cashback",
    discount_cashback_type: "percentage",
    discount_cashback_value: 5,
    discount_cashback_max: 10000,
    start_date: "2025-03-06 10:32:36",
    end_date: "2025-03-13 10:32:36",
  },
];

const columns = [
  {
    key: "name",
    label: "Nama Voucher | Kode",
  },
  {
    key: "discount",
    label: "Diskon",
  },
  {
    key: "discount_cashback_max",
    label: "Batas Pemakaian",
  },
  {
    key: "used_count",
    label: "Digunakan",
  },
  {
    key: "action",
    label: "Aksi",
  },
];

function handleEdit(row) {
  router.push({
    path: `/seller/voucher/edit/${row.uuid}`,
    state: row,
  });
}
</script>

<style lang="scss" scoped></style>
