import GoogleSignInPlugin from "vue3-google-signin";
import { HFaceBookLogin } from "@healerlab/vue3-facebook-login";

export default defineNuxtPlugin(async (nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();
  nuxtApp.vueApp.use(GoogleSignInPlugin, {
    clientId: runtimeConfig.public.clientIdGoogleSignIn,
  });
});
