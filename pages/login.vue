<template>
  <section class="bg-primary">
    <UContainer class="grid grid-cols-2 h-full py-20">
      <div class="flex justify-center items-center">
        <div class="flex flex-col gap-14 text-white text-center">
          <h1 class="text-8xl leading-[0.8]">More<br />And <br />Shop</h1>
          <p>
            Tempat Belanja Online No. 1 <br />
            di Cipedak dan Jagakarsa
          </p>
        </div>
      </div>
      <div>
        <UCard
          class="w-96"
          :ui="{
            rounded: 'rounded-sm',
          }"
        >
          <h2>Log in</h2>
          <form class="mt-7 space-y-7">
            <UFormGroup>
              <UInput
                placeholder="No. Handphone/Email"
                type="email"
                size="lg"
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
              label: 'text-gray-200 font-normal',
            }"
          />
          <div class="flex space-x-2 h-10">
            <UButton color="white" class="flex-1 justify-center">
              <img
                src="~/assets/images/facebookcolor.png"
                class="w-6 h-6 mr-2"
              />
              Facebook
            </UButton>
            <UButton color="white" class="flex-1 justify-center">
              <img src="~/assets/images/google.png" class="w-6 h-6 mr-2" />
              Google
            </UButton>
          </div>
          <p class="text-sm font-normal text-black/25 text-center mt-8">
            Baru di MoreAndShop?
            <NuxtLink to="/registration" class="text-primary">Daftar</NuxtLink>
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
