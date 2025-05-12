<template>
  <div class="flex gap-3">
    <img
      src="https://picsum.photos/1920/1080?random=1"
      class="aspect-[1/1] w-20 h-20 object-cover"
    />
    <div class="flex-1">
      <p class="line-clamp-2 text-base">Product name</p>
      <p class="text-sm text-black/55">Variasi: White, 39</p>
      <p class="text-sm">x1</p>
    </div>
    <div class="flex items-center">Rp{{ formatNumber(120000) }}</div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
