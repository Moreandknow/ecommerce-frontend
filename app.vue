<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <UNotifications />
</template>

<script setup>
const url = useRequestURL();
useSeoMeta({
  description: "Tempat Belanja Online No. 1 di Cipedak dan Jagakarsa",
  ogTitle: "MoreAndShop | Situs Belanja Online Terkureng & Teraneh",
  ogDescription: "Tempat Belanja Online No. 1 di Cipedak dan Jagakarsa",
  ogUrl: () => url.href,
  twitterTitle: "MoreAndShop | Situs Belanja Online Terkureng & Teraneh",
  twitterDescription: "[twitter:description]",
  twitterCard: "summary",
});

useHead({
  titleTemplate: (titlePerPage) => {
    return titlePerPage
      ? `${titlePerPage} | MoreAndShop`
      : "MoreAndShop | Situs Belanja Online Terkureng & Teraneh";
  },
  htmlAttrs: {
    lang: "id",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.ico",
    },
  ],
});
</script>

<style>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

.custom-shadow {
  box-shadow: 0px 6px 6px 0px #0000000f;
}
</style>
