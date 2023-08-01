import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: useCookie("token"),
    loading: false,
  }),
  actions: {
    async loginUser(email, password) {
      const { data, pending } = await useFetch("http://localhost:5000/api/v1/auth/login", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      this.loading = pending;

      if (data.value) {
        const token = useCookie("token");
        token.value = data.value.token;
        this.user = data.value.token;
      }
    },
    logoutUser() {
      const token = useCookie("token");
      this.user = null;
      token.value = null;
    },
    async signupUser(name, email, password) {
      const { data, pending } = await useFetch("http://localhost:5000/api/v1/auth/signup", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      return navigateTo("/login");
    },
  },
});
