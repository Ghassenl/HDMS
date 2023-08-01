export const CategoriesService = {
  async getCategoriesList() {
    const { data: categoriesResponse } = await useFetch("http://localhost:5000/api/v1/categories");

    return categoriesResponse.value.data;
  },
};
