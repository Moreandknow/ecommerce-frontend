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
          <h2>Daftar</h2>
          <form class="mt-7 space-y-7" @submit.prevent="handleSubmit">
            <UFormGroup>
              <UInput placeholder="Email" size="lg" />
            </UFormGroup>
            <UButton type="submit" block class="uppercase">Berikutnya</UButton>
          </form>
          <UDivider
            label="ATAU"
            class="my-4"
            :ui="{
              label: 'text-gray-300 font-normal',
            }"
          />
          <div>
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
          </div>
          <p class="text-sm font-normal text-black/25 text-center mt-8">
            Punya akun?
            <NuxtLink to="/login" class="text-primary">Log in</NuxtLink>
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
