// store.js
import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
    state: () => ({
        productsBought: []
    }),
    actions: {
        addToProductsBought(product) {
            this.productsBought.push(product);
            const products = useCookie("products", []);
            products.value = this.productsBought;

        },
    },
});
