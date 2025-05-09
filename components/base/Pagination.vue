<template>
  <UPagination
    v-model="page"
    :page-count="5"
    :total="total"
    :inactive-button="{
      variant: 'link',
      class: 'text-black/40 hover:text-primary px-3.5 py-0.5 !no-underline',
    }"
    :active-button="{
      class: 'px-3.5 py-0.5 rounded-sm',
    }"
    :prev-button="{
      variant: 'link',
      class: 'text-black/40 hover:text-primary px-3.5 py-0.5',
      icon: 'i-heroicons:chevron-left-solid',
    }"
    :next-button="{
      variant: 'link',
      class: 'text-black/40 hover:text-primary px-3.5 py-0.5',
      icon: 'i-heroicons:chevron-right-solid',
    }"
    :ui="{
      wrapper: 'space-x-4',
      base: 'text-xl font-light',
    }"
  />
</template>

<script setup>
const page = defineModel({
  type: Number,
});
defineProps({
  total: {
    type: Number,
    default: 0,
  },
});
</script>

<style lang="scss" scoped></style>
