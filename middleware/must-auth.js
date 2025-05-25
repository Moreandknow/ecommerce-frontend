export default defineNuxtRouteMiddleware(async () => {
  const session = useSession();
  if (!session.token) {
    return navigateTo("/login");
  }
});
