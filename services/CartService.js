import { useStore } from "~/store/cart";

export const CartService = {
    async getCartList() {
        const cartItemsList = useStore().cartItemsList;

        return await Promise.all(
            cartItemsList.map(async (productid) => {
                const { data: productResponse } = await useFetch(`https://fakestoreapi.com/products/${productid}`);
                return productResponse.value;
            }),
        );
    },
};
// export const CartService = {
//     async getCartList() {
//         const { data: CartResponse } = await useFetch("https://fakestoreapi.com/products?limit=10");

//         return CartResponse.value;
//     },
// };
