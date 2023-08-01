export const ProductService = {
  async getProductList() {
    const { data: ProductResponse } = await useFetch("https://fakestoreapi.com/products?limit=10");

    return ProductResponse.value;
  },
};
