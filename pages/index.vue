<template>
  <div>
    <UContainer class="py-10">
      <BaseCard>
        <template #header="{ iniData, openAlert }"
          >ADWADSADSASDW {{ iniData }}
          <UButton @click="openAlert('halo dari slot')">Alert</UButton>
        </template>
        <template #default>ISI DARI CARD</template>
      </BaseCard>
    </UContainer>
  </div>
</template>

<script setup>
definePageMeta({
  header: {
    showProfile: false,
  },
});
</script>

<style lang="scss" scoped></style>
