export default defineNuxtRouteMiddleware(async () => {
  const session = useSession();
  if (session.token) {
    return navigateTo("/my-account/profile");
  }
});
