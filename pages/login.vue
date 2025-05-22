<template>
  <section class="bg-primary">
    <UContainer class="grid grid-cols-1 md:grid-cols-2 h-full py-10 md:py-20">
      <div class="flex justify-center items-center mb-10 md:mb-0">
        <div class="flex flex-col gap-10 md:gap-14 text-white text-center">
          <h1 class="text-5xl sm:text-6xl lg:text-8xl leading-[0.8]">
            More<br />And <br />Shop
          </h1>
          <p>
            Tempat Belanja Online No. 1 <br />
            di Cipedak dan Jagakarsa
          </p>
        </div>
      </div>

      <div class="flex justify-center items-center">
        <UCard
          class="w-full max-w-md md:w-96 mx-auto"
          :ui="{
            rounded: 'rounded-sm',
          }"
        >
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
            Log in
          </h2>
          <form class="mt-7 space-y-7">
            <UFormGroup>
              <UInput
                placeholder="No. Handphone/Email"
                type="email"
                size="lg"
                name="email"
                autocomplete="email"
              />
            </UFormGroup>
            <UFormGroup>
              <BaseInputPassword placeholder="Password" size="lg" />
            </UFormGroup>
            <div>
              <UButton block>LOG IN</UButton>
              <UButton
                variant="link"
                color="blue"
                :padded="false"
                class="mt-2"
                to="/forgot-password"
              >
                Lupa Password
              </UButton>
            </div>
          </form>
          <UDivider
            label="ATAU"
            class="my-4 text-gray-500 font-normal"
            :ui="{
              label: 'text-xs text-gray-400 dark:text-gray-500 font-normal',
            }"
          />
          <div
            class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 h-auto sm:h-10"
          >
            <UButton color="white" class="flex-1 justify-center">
              <img
                src="~/assets/images/facebookcolor.png"
                class="w-6 h-6 mr-2"
                alt="Facebook Login"
              />
              Facebook
            </UButton>
            <UButton color="white" class="flex-1 justify-center">
              <img
                src="~/assets/images/google.png"
                class="w-6 h-6 mr-2"
                alt="Google Login"
              />
              Google
            </UButton>
          </div>
          <p
            class="text-sm font-normal text-gray-500 dark:text-gray-400 text-center mt-8"
          >
            Baru di MoreAndShop?
            <NuxtLink to="/registration" class="text-primary font-medium"
              >Daftar</NuxtLink
            >
          </p>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>

<script setup>
definePageMeta({
  layout: "auth",
  header: {
    title: "Log in",
  },
});
</script>

<style scoped></style>
