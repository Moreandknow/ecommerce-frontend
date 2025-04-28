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
            <div class="flex flex-wrap gap-2">
              <div class="footer-item">
                <img src="~/assets/images/seabank.png" />
              </div>
              <div class="footer-item">
                <img src="~/assets/images/bca.png" />
              </div>
              <div class="footer-item">
                <img src="~/assets/images/bni.png" />
              </div>
              <div class="footer-item">
                <img src="~/assets/images/bri.png" />
              </div>
              <div class="footer-item">
                <img src="~/assets/images/bsi.png" />
              </div>
              <div class="footer-item">
                <img src="~/assets/images/cimb.png" />
              </div>
              <div class="footer-item">
                <img src="~/assets/images/mandiri.png" />
              </div>
              <div class="footer-item">
                <img src="~/assets/images/permata.png" />
              </div>
              <div class="footer-item">
                <img src="~/assets/images/alfamart.png" />
              </div>
              <div class="footer-item">
                <img src="~/assets/images/alfamidi.png" />
              </div>
              <div class="footer-item">
                <img src="~/assets/images/dandan.png" />
              </div>
              <div class="footer-item">
                <img src="~/assets/images/indomart.png" />
              </div>
              <div class="footer-item">
                <img src="~/assets/images/bankbersama.png" />
              </div>
              <div class="footer-item">
                <img src="~/assets/images/jcb.png" />
              </div>
              <div class="footer-item">
                <img src="~/assets/images/mastercard.png" />
              </div>
              <div class="footer-item">
                <img src="~/assets/images/visa.png" />
              </div>
              <div class="footer-item">
                <img src="~/assets/images/spay.png" />
              </div>
            </div>
          </div>
          <div class="mt-6">
            <h3>Pengiriman</h3>
            <div class="flex flex-wrap gap-2">
              <div class="footer-item">
                <img src="~/assets/images/spx.png" />
              </div>
              <div class="footer-item">
                <img src="~/assets/images/jnt.png" />
              </div>
              <div class="footer-item">
                <img src="~/assets/images/jntcargo.png" />
              </div>
              <div class="footer-item">
                <img src="~/assets/images/jne.png" />
              </div>
              <div class="footer-item">
                <img src="~/assets/images/ninja.png" />
              </div>
              <div class="footer-item">
                <img src="~/assets/images/sicepat.png" />
              </div>
              <div class="footer-item">
                <img src="~/assets/images/grab.png" />
              </div>
              <div class="footer-item">
                <img src="~/assets/images/gosend.png" />
              </div>
              <div class="footer-item">
                <img src="~/assets/images/pasaja.png" />
              </div>
              <div class="footer-item">
                <img src="~/assets/images/indah.png" />
              </div>
              <div class="footer-item">
                <img src="~/assets/images/idexpress.png" />
              </div>
              <div class="footer-item">
                <img src="~/assets/images/indopaket.png" />
              </div>
              <div class="footer-item">
                <img src="~/assets/images/anteraja.png" />
              </div>
              <div class="footer-item">
                <img src="~/assets/images/blue.png" />
              </div>
              <div class="footer-item">
                <img src="~/assets/images/sentral.png" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h3>Ikuti Kami</h3>
            <nav>
              <ul>
                <li class="mb-1">
                  <UButton
                    variant="link"
                    :padded="false"
                    size="xs"
                    class="footer-text"
                  >
                    <template #leading>
                      <img src="~/assets/images/facebook.png" />
                    </template>
                    Facebook
                  </UButton>
                </li>
                <li class="mb-1">
                  <UButton
                    variant="link"
                    :padded="false"
                    size="xs"
                    class="footer-text"
                  >
                    <template #leading>
                      <img src="~/assets/images/instagram.png" />
                    </template>
                    Instagram
                  </UButton>
                </li>
                <li class="mb-1">
                  <UButton
                    variant="link"
                    :padded="false"
                    size="xs"
                    class="footer-text"
                  >
                    <template #leading>
                      <img src="~/assets/images/twitter.png" />
                    </template>
                    Twitter
                  </UButton>
                </li>
                <li class="mb-1">
                  <UButton
                    variant="link"
                    :padded="false"
                    size="xs"
                    class="footer-text"
                  >
                    <template #leading>
                      <img src="~/assets/images/linkedin.png" />
                    </template>
                    LinkedIn
                  </UButton>
                </li>
              </ul>
            </nav>
          </div>
          <div class="mt-6">
            <h3>Keamanan</h3>
            <div class="flex flex-wrap gap-2">
              <div class="footer-item size-lg">
                <img src="~/assets/images/certified.png" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3>Download Aplikasi</h3>
          <div class="flex gap-3">
            <img src="~/assets/images/qrcode.png" />
            <div class="flex flex-col gap-2">
              <img src="~/assets/images/playstore.png" />
              <img src="~/assets/images/appstore.png" />
              <img src="~/assets/images/appgalery.png" />
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="footer-bottom-text">
          © MoreAndShop 2025. Hak Cipta Dilindungi
        </p>
        <div class="flex gap-1 items-center">
          <p class="footer-bottom-text">Negara:</p>
          <div class="flex divide-x divide-black/20">
            <UButton
              v-for="item in country"
              :key="item"
              variant="link"
              class="footer-text px-1.5"
              :padded="false"
            >
              {{ item }}
            </UButton>
          </div>
        </div>
      </div>
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

const country = [
  "Singapura",
  "Indonesia",
  "Thailand",
  "Malaysia",
  "Vietnam",
  "Filipina",
  "Brazil",
  "México",
  "Colombia",
  "Chile",
  "Taiwan",
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
  @apply border-b;
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

.footer-item {
  @apply w-[60px] h-[30px];
  @apply bg-white rounded-sm p-1 shadow;
}

.footer-item.size-lg {
  @apply w-[112px] h-[52px];
}

.footer-bottom {
  @apply py-10;
  @apply flex justify-between;
}

.footer-bottom-text {
  @apply text-xs text-black/65;
  @apply font-normal;
}
</style>
