export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie("token");

  if (to.path == "/") {
    return navigateTo("/home");
  }
  if (to.path == "/shop") {
    return navigateTo("/home");
  }
  if (to.path === "/home" || to.path === "/about") {
    // Allow user to access the "/home" and "/about" routes even when not logged in
    return;
  }
  if (token.value && (to?.name === "login" || to?.name === "signup")) {
    return navigateTo("/home");
  }

  if (!token.value && to?.name !== "login" && to?.name !== "signup") {
    abortNavigation();
    return navigateTo("/login");
  }

  // if (!token.value && to?.name !== "login" || to?.name !== "signup") {
  //   abortNavigation();
  //   return navigateTo("/login");
  // }
});
