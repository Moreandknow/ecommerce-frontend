<template>
  <div class="bg-white p-4 rounded-lg">
    <div v-if="slots.header" class="border-b pb-2 mb-2">
      <slot name="header" :ini-data="data" :open-alert="openAlert" />
    </div>
    <slot />
  </div>
</template>

<script setup>
const slots = useSlots();

const data = { name: "Moreno" };

function openAlert(message) {
  alert(message);
}
</script>

<style lang="scss" scoped></style>
