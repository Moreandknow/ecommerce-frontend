<template>
  <section class="bg-primary">
    <UContainer
      class="grid grid-cols-1 md:grid-cols-2 h-full py-10 md:py-20 gap-x-8"
    >
      <div class="flex justify-center items-center mb-10 md:mb-0">
        <div class="flex flex-col gap-10 md:gap-14 text-white text-center">
          <h1 class="text-5xl sm:text-6xl lg:text-8xl !leading-[0.8]">
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
            <UFormGroup :error="v$.email.$errors?.[0]?.$message">
              <UInput
                v-model="registrationForm.email"
                placeholder="Email"
                size="lg"
              />
            </UFormGroup>
            <UButton
              :loading="status === 'pending'"
              type="submit"
              block
              class="uppercase"
              >Berikutnya</UButton
            >
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
              <BaseButtonGoogleSignIn />
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
import useVuelidate from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";

definePageMeta({
  layout: "auth",
  header: {
    title: "Daftar",
  },
  middleware: ["must-not-auth"],
});

const router = useRouter();
const { registrationForm } = storeToRefs(useSession());

const rules = {
  email: { required, email },
};

const $externalResults = ref({});

const v$ = useVuelidate(rules, registrationForm, {
  $autoDirty: true,
  $externalResults,
});

const { status, error, execute } = useSubmit("/server/api/register");

async function handleSubmit() {
  $externalResults.value = {};

  const isValid = await v$.value.$validate();
  if (!isValid) return;

  await execute({
    email: registrationForm.value.email,
  });

  if (error.value) {
    $externalResults.value = error.value.data?.meta?.validations || {};
    return;
  }

  if (status.value === "success") {
    router.push("/registration/form");
  }
}
</script>

<style lang="scss" scoped></style>
