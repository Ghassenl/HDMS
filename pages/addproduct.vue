<template>
  <div class="formaddproduct">
    <div class="card centercard">
      <h2>Edit Product</h2>
      <form @submit="onSubmit">
        <label for="title">title*</label>
        <input id="title" type="text" v-model="title" placeholder="Your Product Title" />
        <label for="price">price*</label>
        <input id="price" type="number" v-model="price" placeholder="€€€€€€" />

        <TreeSelect id="category" v-model="category" :options="categories" placeholder="Select category"
          :class="['w-full md:w-20rem', { 'p-invalid': categoryErrorMessage }]" aria-describedby="text-error" />
        <small id="text-error" class="p-error">{{ categoryErrorMessage || "&nbsp;" }}</small>
        <label for="description">description</label>
        <textarea id="description" type="text" v-model="description" placeholder="Describe Your Product To The Buyer"
          rows="5" />
        <FileUpload id="image" mode="basic" name="demo[]" url="./upload.php" accept="image/*" v-model="image"
          :maxFileSize="9999999999" />
        <div class="flex flex-column md:flex-row formbuttons">
          <Button id="contactSubmit" label="Submit" type="submit" />
          <Button style="background: rgb(255, 124, 124)" id="contactSubmit" type="button" label="Delete"></Button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useField, useForm } from "vee-validate";
import { CategoriesService } from "@/services/CategoriesService";

definePageMeta({
  layout: "default",
});
useHead({
  title: "HDMSTORE | EditProduct",
});
const categories = ref([]);

onMounted(async () => {
  const categoriesList = await CategoriesService.getCategoriesList();

  categories.value = (categoriesList as any).map((category: any) => {
    return {
      key: category._id,
      label: category.name,
      data: category.name,
    };
  });
});

const { handleSubmit, resetForm } = useForm();

const { value: title, errorMessage: titleErrorMessage } = useField("title", validateField);
const { value: price, errorMessage: priceErrorMessage } = useField("price", validateField);
const { value: category, errorMessage: categoryErrorMessage } = useField("category", validateField);
const { value: description, errorMessage: descriptionErrorMessage } = useField("description", validateField);
const { value: image, errorMessage: imageErrorMessage } = useField("image");

function validateField(value: any) {
  if (!value) {
    return "Value is required.";
  }

  return true;
}

const onSubmit = handleSubmit(async (values) => {
  const token = useCookie("token").value;

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // Include the JWT token in the Authorization header
    },
    body: JSON.stringify({
      title: values.title,
      price: values.price,
      description: values.description,
      image: values.image,
      category: Object.keys(values.category)[0],
    }),
  };
  try {
    //TODO replace "fetch" with "useFetch" like in "auth.js"
    const response = await fetch("http://localhost:5000/api/v1/product", requestOptions);
    const responseData = await response.json();

  } catch (error) { }
  return navigateTo("/shop");
});

const removeProduct = async (id: number) => {
  const address = `https://fakestoreapi.com/products/category/${id}`;
  const { data: responseData } = await useFetch(address, {
    method: "DELETE",
  });
};
</script>

<style>
.centercard {
  align-self: center;
  padding: 5rem;
  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  margin-bottom: 40px;
  background: white;
  border-radius: 30px;
  width: 50%;
}

.formaddproduct {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-top: 40px;
  background: #f8f5f2;
}

.formaddproduct h2 {
  display: flex;
  justify-content: center;
  font-size: 3rem;
  line-height: 1;
  font-weight: 700;
  padding-bottom: 20px;
  font-family: fantasy;
  text-transform: uppercase;
  color: rgb(5, 170, 247);
  text-align: center;
  text-shadow: 2px 2px darkblue;
}

.formaddproduct label {
  text-transform: uppercase;
  padding: 12px 12px 12px 0;
  display: inline-block;
  text-decoration: solid;
  font-weight: 600;
}

input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

#category {
  display: flex;
  width: 100% !important;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.formbuttons {
  justify-content: space-around;
}

.formbuttons button {
  margin-top: 40px;

  background: rgb(157, 201, 0);
  border-radius: 50px;
  text-transform: uppercase;
  font-weight: bold;
}

textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  margin: 8px 0;
  box-sizing: border-box;
}
</style>
