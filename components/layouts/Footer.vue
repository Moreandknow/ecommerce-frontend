<template>
  <footer class="border-t-4 border-primary bg-gray-50 dark:bg-gray-800">
    <UContainer>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 pt-6 pb-6 sm:pt-8 sm:pb-8 lg:pt-11 lg:pb-8 border-b border-gray-200 dark:border-gray-700"
      >
        <div class="text-left">
          <h3
            class="font-bold text-sm mb-3 sm:mb-4 text-gray-900 dark:text-white"
          >
            Layanan Pelanggan
          </h3>
          <nav>
            <ul class="space-y-1">
              <li
                v-for="(item, index) in layananPengguna"
                :key="`layanan-${item}-${index}`"
              >
                <UButton
                  variant="link"
                  :padded="false"
                  size="xs"
                  class="text-xs text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 font-normal no-underline"
                >
                  {{ item }}
                </UButton>
              </li>
            </ul>
          </nav>
        </div>

        <div class="text-left">
          <h3
            class="font-bold text-sm mb-3 sm:mb-4 text-gray-900 dark:text-white"
          >
            Jelajahi MoreAndShop
          </h3>
          <nav>
            <ul class="space-y-1">
              <li
                v-for="(item, index) in jelajahiSyopo"
                :key="`jelajahi-${item}-${index}`"
              >
                <UButton
                  variant="link"
                  :padded="false"
                  size="xs"
                  class="text-xs text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 font-normal no-underline"
                >
                  {{ item }}
                </UButton>
              </li>
            </ul>
          </nav>
        </div>

        <div class="text-left">
          <div>
            <h3
              class="font-bold text-sm mb-3 sm:mb-4 text-gray-900 dark:text-white"
            >
              Pembayaran
            </h3>
            <div class="flex flex-wrap gap-2 justify-start">
              <div
                class="w-[60px] h-[30px] bg-white rounded-sm p-1 shadow flex items-center justify-center"
              >
                <img
                  src="~/assets/images/seabank.png"
                  alt="Seabank"
                  class="max-h-full max-w-full object-contain"
                />
              </div>
              <div
                class="w-[60px] h-[30px] bg-white rounded-sm p-1 shadow flex items-center justify-center"
              >
                <img
                  src="~/assets/images/bca.png"
                  alt="BCA"
                  class="max-h-full max-w-full object-contain"
                />
              </div>
              <div
                class="w-[60px] h-[30px] bg-white rounded-sm p-1 shadow flex items-center justify-center"
              >
                <img
                  src="~/assets/images/bni.png"
                  alt="BNI"
                  class="max-h-full max-w-full object-contain"
                />
              </div>
              <div
                class="w-[60px] h-[30px] bg-white rounded-sm p-1 shadow flex items-center justify-center"
              >
                <img
                  src="~/assets/images/bri.png"
                  alt="BRI"
                  class="max-h-full max-w-full object-contain"
                />
              </div>
              <div
                class="w-[60px] h-[30px] bg-white rounded-sm p-1 shadow flex items-center justify-center"
              >
                <img
                  src="~/assets/images/bsi.png"
                  alt="BSI"
                  class="max-h-full max-w-full object-contain"
                />
              </div>
              <div
                class="w-[60px] h-[30px] bg-white rounded-sm p-1 shadow flex items-center justify-center"
              >
                <img
                  src="~/assets/images/cimb.png"
                  alt="CIMB Niaga"
                  class="max-h-full max-w-full object-contain"
                />
              </div>
              <div
                class="w-[60px] h-[30px] bg-white rounded-sm p-1 shadow flex items-center justify-center"
              >
                <img
                  src="~/assets/images/mandiri.png"
                  alt="Mandiri"
                  class="max-h-full max-w-full object-contain"
                />
              </div>
              <div
                class="w-[60px] h-[30px] bg-white rounded-sm p-1 shadow flex items-center justify-center"
              >
                <img
                  src="~/assets/images/permata.png"
                  alt="Permata Bank"
                  class="max-h-full max-w-full object-contain"
                />
              </div>
              <div
                class="w-[60px] h-[30px] bg-white rounded-sm p-1 shadow flex items-center justify-center"
              >
                <img
                  src="~/assets/images/alfamart.png"
                  alt="Alfamart"
                  class="max-h-full max-w-full object-contain"
                />
              </div>
              <div
                class="w-[60px] h-[30px] bg-white rounded-sm p-1 shadow flex items-center justify-center"
              >
                <img
                  src="~/assets/images/alfamidi.png"
                  alt="Alfamidi"
                  class="max-h-full max-w-full object-contain"
                />
              </div>
              <div
                class="w-[60px] h-[30px] bg-white rounded-sm p-1 shadow flex items-center justify-center"
              >
                <img
                  src="~/assets/images/dandan.png"
                  alt="Dan+Dan"
                  class="max-h-full max-w-full object-contain"
                />
              </div>
              <div
                class="w-[60px] h-[30px] bg-white rounded-sm p-1 shadow flex items-center justify-center"
              >
                <img
                  src="~/assets/images/indomart.png"
                  alt="Indomaret"
                  class="max-h-full max-w-full object-contain"
                />
              </div>
              <div
                class="w-[60px] h-[30px] bg-white rounded-sm p-1 shadow flex items-center justify-center"
              >
                <img
                  src="~/assets/images/bankbersama.png"
                  alt="Bank Bersama (ATM Bersama)"
                  class="max-h-full max-w-full object-contain"
                />
              </div>
              <div
                class="w-[60px] h-[30px] bg-white rounded-sm p-1 shadow flex items-center justify-center"
              >
                <img
                  src="~/assets/images/jcb.png"
                  alt="JCB"
                  class="max-h-full max-w-full object-contain"
                />
              </div>
              <div
                class="w-[60px] h-[30px] bg-white rounded-sm p-1 shadow flex items-center justify-center"
              >
                <img
                  src="~/assets/images/mastercard.png"
                  alt="Mastercard"
                  class="max-h-full max-w-full object-contain"
                />
              </div>
              <div
                class="w-[60px] h-[30px] bg-white rounded-sm p-1 shadow flex items-center justify-center"
              >
                <img
                  src="~/assets/images/visa.png"
                  alt="Visa"
                  class="max-h-full max-w-full object-contain"
                />
              </div>
              <div
                class="w-[60px] h-[30px] bg-white rounded-sm p-1 shadow flex items-center justify-center"
              >
                <img
                  src="~/assets/images/spay.png"
                  alt="ShopeePay"
                  class="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          </div>
          <div class="mt-6">
            <h3
              class="font-bold text-sm mb-3 sm:mb-4 text-gray-900 dark:text-white"
            >
              Pengiriman
            </h3>
            <div class="flex flex-wrap gap-2 justify-start">
              <div
                class="w-[60px] h-[30px] bg-white rounded-sm p-1 shadow flex items-center justify-center"
              >
                <img
                  src="~/assets/images/spx.png"
                  alt="SPX Express"
                  class="max-h-full max-w-full object-contain"
                />
              </div>
              <div
                class="w-[60px] h-[30px] bg-white rounded-sm p-1 shadow flex items-center justify-center"
              >
                <img
                  src="~/assets/images/jnt.png"
                  alt="J&T Express"
                  class="max-h-full max-w-full object-contain"
                />
              </div>
              <div
                class="w-[60px] h-[30px] bg-white rounded-sm p-1 shadow flex items-center justify-center"
              >
                <img
                  src="~/assets/images/jntcargo.png"
                  alt="J&T Cargo"
                  class="max-h-full max-w-full object-contain"
                />
              </div>
              <div
                class="w-[60px] h-[30px] bg-white rounded-sm p-1 shadow flex items-center justify-center"
              >
                <img
                  src="~/assets/images/jne.png"
                  alt="JNE"
                  class="max-h-full max-w-full object-contain"
                />
              </div>
              <div
                class="w-[60px] h-[30px] bg-white rounded-sm p-1 shadow flex items-center justify-center"
              >
                <img
                  src="~/assets/images/ninja.png"
                  alt="Ninja Xpress"
                  class="max-h-full max-w-full object-contain"
                />
              </div>
              <div
                class="w-[60px] h-[30px] bg-white rounded-sm p-1 shadow flex items-center justify-center"
              >
                <img
                  src="~/assets/images/sicepat.png"
                  alt="SiCepat"
                  class="max-h-full max-w-full object-contain"
                />
              </div>
              <div
                class="w-[60px] h-[30px] bg-white rounded-sm p-1 shadow flex items-center justify-center"
              >
                <img
                  src="~/assets/images/grab.png"
                  alt="GrabExpress"
                  class="max-h-full max-w-full object-contain"
                />
              </div>
              <div
                class="w-[60px] h-[30px] bg-white rounded-sm p-1 shadow flex items-center justify-center"
              >
                <img
                  src="~/assets/images/gosend.png"
                  alt="GoSend"
                  class="max-h-full max-w-full object-contain"
                />
              </div>
              <div
                class="w-[60px] h-[30px] bg-white rounded-sm p-1 shadow flex items-center justify-center"
              >
                <img
                  src="~/assets/images/pasaja.png"
                  alt="Pos Aja!"
                  class="max-h-full max-w-full object-contain"
                />
              </div>
              <div
                class="w-[60px] h-[30px] bg-white rounded-sm p-1 shadow flex items-center justify-center"
              >
                <img
                  src="~/assets/images/indah.png"
                  alt="Indah Logistik"
                  class="max-h-full max-w-full object-contain"
                />
              </div>
              <div
                class="w-[60px] h-[30px] bg-white rounded-sm p-1 shadow flex items-center justify-center"
              >
                <img
                  src="~/assets/images/idexpress.png"
                  alt="ID Express"
                  class="max-h-full max-w-full object-contain"
                />
              </div>
              <div
                class="w-[60px] h-[30px] bg-white rounded-sm p-1 shadow flex items-center justify-center"
              >
                <img
                  src="~/assets/images/indopaket.png"
                  alt="Indo Paket"
                  class="max-h-full max-w-full object-contain"
                />
              </div>
              <div
                class="w-[60px] h-[30px] bg-white rounded-sm p-1 shadow flex items-center justify-center"
              >
                <img
                  src="~/assets/images/anteraja.png"
                  alt="Anteraja"
                  class="max-h-full max-w-full object-contain"
                />
              </div>
              <div
                class="w-[60px] h-[30px] bg-white rounded-sm p-1 shadow flex items-center justify-center"
              >
                <img
                  src="~/assets/images/blue.png"
                  alt="Bluebird Kirim"
                  class="max-h-full max-w-full object-contain"
                />
              </div>
              <div
                class="w-[60px] h-[30px] bg-white rounded-sm p-1 shadow flex items-center justify-center"
              >
                <img
                  src="~/assets/images/sentral.png"
                  alt="Sentral Cargo"
                  class="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="text-left">
          <div>
            <h3
              class="font-bold text-sm mb-3 sm:mb-4 text-gray-900 dark:text-white"
            >
              Ikuti Kami
            </h3>
            <nav>
              <ul class="space-y-1">
                <li class="mb-1">
                  <UButton
                    variant="link"
                    :padded="false"
                    size="xs"
                    class="text-xs text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 font-normal no-underline"
                  >
                    <template #leading
                      ><img
                        src="~/assets/images/facebook.png"
                        alt="Facebook icon"
                        class="w-4 h-4 mr-1.5"
                    /></template>
                    Facebook
                  </UButton>
                </li>
                <li class="mb-1">
                  <UButton
                    variant="link"
                    :padded="false"
                    size="xs"
                    class="text-xs text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 font-normal no-underline"
                  >
                    <template #leading
                      ><img
                        src="~/assets/images/instagram.png"
                        alt="Instagram icon"
                        class="w-4 h-4 mr-1.5"
                    /></template>
                    Instagram
                  </UButton>
                </li>
                <li class="mb-1">
                  <UButton
                    variant="link"
                    :padded="false"
                    size="xs"
                    class="text-xs text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 font-normal no-underline"
                  >
                    <template #leading
                      ><img
                        src="~/assets/images/twitter.png"
                        alt="Twitter icon"
                        class="w-4 h-4 mr-1.5"
                    /></template>
                    Twitter
                  </UButton>
                </li>
                <li class="mb-1">
                  <UButton
                    variant="link"
                    :padded="false"
                    size="xs"
                    class="text-xs text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 font-normal no-underline"
                  >
                    <template #leading
                      ><img
                        src="~/assets/images/linkedin.png"
                        alt="LinkedIn icon"
                        class="w-4 h-4 mr-1.5"
                    /></template>
                    LinkedIn
                  </UButton>
                </li>
              </ul>
            </nav>
          </div>
          <div class="mt-6">
            <h3
              class="font-bold text-sm mb-3 sm:mb-4 text-gray-900 dark:text-white"
            >
              Keamanan
            </h3>
            <div class="flex flex-wrap gap-2 justify-start">
              <div
                class="w-[112px] h-[52px] bg-white rounded-sm p-1 shadow flex items-center justify-center"
              >
                <img
                  src="~/assets/images/certified.png"
                  alt="Certified"
                  class="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="text-left">
          <h3
            class="font-bold text-sm mb-3 sm:mb-4 text-gray-900 dark:text-white"
          >
            Download Aplikasi
          </h3>
          <div class="flex gap-3 justify-start">
            <img
              src="~/assets/images/qrcode.png"
              alt="QR Code for app download"
              class="w-20 h-20 sm:w-24 sm:h-24 object-contain"
            />
            <div class="flex flex-col gap-2 justify-center">
              <img
                src="~/assets/images/playstore.png"
                alt="Get it on Google Play"
                class="h-8 sm:h-9 object-contain cursor-pointer"
              />
              <img
                src="~/assets/images/appstore.png"
                alt="Download on the App Store"
                class="h-8 sm:h-9 object-contain cursor-pointer"
              />
              <img
                src="~/assets/images/appgalery.png"
                alt="Explore it on AppGallery"
                class="h-8 sm:h-9 object-contain cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        class="py-6 sm:py-8 lg:py-10 flex flex-col items-start text-left md:flex-row md:items-center md:justify-between gap-4 md:gap-6"
      >
        <p class="text-xs text-gray-600 dark:text-gray-400 font-normal">
          &copy; MoreAndShop 2025. Hak Cipta Dilindungi
        </p>
        <div class="flex flex-wrap gap-x-1 gap-y-2 items-center">
          <p class="text-xs text-gray-600 dark:text-gray-400 font-normal">
            Negara:
          </p>
          <div
            class="flex flex-wrap divide-x divide-gray-300 dark:divide-gray-600"
          >
            <UButton
              v-for="item in country"
              :key="item"
              variant="link"
              class="text-xs text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 font-normal no-underline px-1.5 first:pl-0"
              :padded="false"
              size="xs"
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
  "MoreAndShop Mall",
  "Seller Centre",
  "Flash Sale",
  "Kontak Media",
  "MoreAndShop Affiliate",
];

const country = [
  "Singapore",
  "Indonesia",
  "Thailand",
  "Malaysia",
  "Vietnam",
  "Philippines",
  "Brazil",
  "México",
  "Colombia",
  "Chile",
  "Taiwan",
];
</script>

<style scoped></style>
