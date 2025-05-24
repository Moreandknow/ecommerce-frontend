<template>
  <section class="bg-primary">
    <UContainer
      class="grid grid-cols-1 md:grid-cols-2 h-full py-10 md:py-20 gap-x-8"
    >
      <div class="flex justify-center items-center mb-10 md:mb-0">
        <div class="flex flex-col gap-10 md:gap-14 text-white text-center">
          <h1 class="text-5xl sm:text-6xl lg:text-8xl leading-6">
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
            Daftar
          </h2>
          <form class="mt-7 space-y-7" @submit.prevent="handleSubmit">
            <UFormGroup>
              <UInput
                placeholder="Email"
                size="lg"
                type="email"
                name="email"
                autocomplete="email"
              />
            </UFormGroup>
            <UButton type="submit" block class="uppercase">Berikutnya</UButton>
          </form>
          <UDivider
            label="ATAU"
            class="my-4"
            :ui="{
              label: 'text-xs text-gray-400 dark:text-gray-500 font-normal',
            }"
          />
          <div>
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
          </div>
          <p
            class="text-sm font-normal text-gray-500 dark:text-gray-400 text-center mt-8"
          >
            Punya akun?
            <NuxtLink to="/login" class="text-primary font-medium"
              >Log in</NuxtLink
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
    title: "Daftar",
  },
});

const router = useRouter();

function handleSubmit() {
  router.push("/registration/form");
}
</script>

<style lang="scss" scoped></style>
