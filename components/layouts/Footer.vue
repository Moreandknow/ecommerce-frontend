<template>
  <footer class="footer">
    <UContainer class="footer-container">
      <div class="footer-top">
        <div>
          <h3>Layanan Pelanggan</h3>
          <nav>
            <ul>
              <li
                v-for="(item, index) in layananPengguna"
                :key="`${item}-${index}`"
              >
                <UButton
                  variant="link"
                  :padded="false"
                  size="xs"
                  class="footer-text"
                >
                  {{ item }}
                </UButton>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h3>Jelajahi MoreAndShop</h3>
          <nav>
            <ul>
              <li
                v-for="(item, index) in jelajahiSyopo"
                :key="`${item}-${index}`"
              >
                <UButton
                  variant="link"
                  :padded="false"
                  size="xs"
                  class="footer-text"
                >
                  {{ item }}
                </UButton>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <div>
            <h3>Pembayaran</h3>
          </div>

          <div class="mt-6">
            <h3>Jelajahi MoreAndShop</h3>
            <nav>
              <ul>
                <li
                  v-for="(item, index) in jelajahiSyopo"
                  :key="`${item}-${index}`"
                >
                  <UButton
                    variant="link"
                    :padded="false"
                    size="xs"
                    class="footer-text"
                  >
                    {{ item }}
                  </UButton>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div>4</div>
        <div>5</div>
      </div>
      <div class="footer-bottom"></div>
    </UContainer>
  </footer>
</template>

<script setup>
const layananPengguna = [
  "Bantuan",
  "Metode Pembayaran",
  "SyopoPay",
  "Koin MoreAndShop",
  "Lacak Pesanan Pembeli",
  "Lacak Pengiriman Penjual",
  "Gratis Ongkir",
  "Pengembalian Barang & Dana",
  "Garansi MoreAndShop",
  "Hubungi Kami",
];
const jelajahiSyopo = [
  "Tentang Kami",
  "Karir",
  "Kebijakan MoreAndShop",
  "Kebijakan Privasi",
  "Blog",
  "Syopo Mall",
  "Seller Centre",
  "Flash Sale",
  "Kontak Media",
  "Syopo Affiliate",
];
</script>

<style scoped>
.footer {
  @apply border-t-4 border-primary;
  @apply bg-gray-50;
}

.footer-containter {
  @apply flex flex-col;
}

.footer-top {
  @apply grid grid-cols-5;
  @apply pt-11 pb-8;
}

.footer h3 {
  @apply font-bold text-xs;
  @apply mb-5;
}

.footer-text {
  @apply text-xs text-black/65;
  @apply font-normal;
  @apply no-underline;
  @apply hover:text-primary hover:dark:text-white;
}
</style>
