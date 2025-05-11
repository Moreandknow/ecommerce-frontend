<template>
  <div>
    <h3 class="font-medium text-lg">Profil Saya</h3>
    <p class="text-sm text-black/65">
      Kelola informasi profil Anda untuk mengontrol, melindungi dan mengamankan
      akun
    </p>
    <hr class="mt-5 mb-8 border-gray-200/60" />
    <div class="flex divide-x items-start">
      <div class="flex-1 pr-6 flex flex-col gap-8">
        <div class="profile-item">
          <p class="profile-item-title">Username</p>
          <span class="profile-item-text">Moreno Adryan</span>
        </div>
        <div class="profile-item">
          <p class="profile-item-title">Nama</p>
          <UInput class="flex-1" size="lg" />
        </div>
        <div class="profile-item">
          <p class="profile-item-title">Email</p>
          <div class="flex gap-2 items-center">
            <span class="profile-item-text">morenoadryan@gmail.com</span>
            <UButton
              variant="link"
              color="blue"
              class="underline"
              label="Ubah"
              :padded="false"
              to="/my-account/profile/change-email"
            />
          </div>
        </div>
        <div class="profile-item">
          <p class="profile-item-title">Nomor Telepon</p>
          <div class="flex gap-2 items-center">
            <span class="profile-item-text">08124172512</span>
            <UButton
              variant="link"
              color="blue"
              class="underline"
              label="Ubah"
              :padded="false"
              to="/my-account/profile/change-email"
            />
          </div>
        </div>
        <div class="profile-item">
          <p class="profile-item-title">Nama Toko</p>
          <UInput class="flex-1" size="lg" />
        </div>
        <div class="profile-item">
          <p class="profile-item-title">Jenis Kelamin</p>
          <URadioGroup
            :options="['Laki-Laki', 'Perempuan']"
            class="flex-1"
            size="lg"
            :ui="{
              fieldset: 'flex gap-3',
            }"
          />
        </div>
        <div class="profile-item">
          <p class="profile-item-title">Tanggal Lahir</p>
          <BaseDatePicker />
        </div>
        <div class="mt-4">
          <UButton label="Simpan" />
        </div>
      </div>
      <div class="w-72 pl-6 flex flex-col items-center gap-5">
        <UAvatar size="3xl" alt="Moreno Adryan" />
        <UButton label="Pilih Gambar" color="white" @click="handleChooseFile" />
        <input
          ref="inputFileElement"
          type="file"
          accept=".jpeg,.png"
          class="hidden"
          @change="handleUploadFile"
        />
        <ul class="text-sm font-normal text-black/55">
          <li>Ukuran gambar: maks. 1 MB</li>
          <li>Format gambar: .JPEG, .PNG</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const inputFileElement = ref();

function handleChooseFile() {
  inputFileElement.value.value = null;
  inputFileElement.value.click();
}
function handleUploadFile() {
  alert("hit database");
}
</script>

<style scoped>
.profile-item {
  @apply flex gap-11 items-center;
}

.profile-item-title {
  @apply text-black/55;
  @apply text-sm;
  @apply w-24;
  @apply text-right;
}

.profile-item-text {
  @apply profile-item-title;
  @apply text-black/80;
  @apply text-left;
  @apply w-[unset];
}
</style>
