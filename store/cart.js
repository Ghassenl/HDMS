import { defineStore } from "pinia";

export const useStore = defineStore("cart", {
    state: () => ({
        cartItemsList: useCookie("products"),
    }),
    actions: {
        addProductToCart(product) {
            if (!this.cartItemsList) {
                this.cartItemsList = [];
            }

            this.cartItemsList.push(product);
        },
    },
});
