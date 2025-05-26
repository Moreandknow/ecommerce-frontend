export default defineNuxtRouteMiddleware(async () => {
  const session = useSession();
  const { tokenCookie } = storeToRefs(session);

  if (tokenCookie.value) {
    return navigateTo("/my-account/profile", { external: true });
  }
});
