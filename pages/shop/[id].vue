<template>
  <div>
    <div class="card shop">
      <Card>
        <template #title> E-STORE</template>
        <template #content>
          <Button @click="showDialog">Add Product</Button>
        </template>
      </Card>
    </div>
    <div class="grid grid-cols-4 gap-5 itemscontainer">
      <div class="card inline-block align-items-center justify-content-center" v-for="p in products"
        style="size: 200px; padding: 20px">
        <Card style="width: 25em" id="item">
          <template #header>
            <img alt="user header " class="itemimg" :src="(p as any).image" />
          </template>
          <template #title id="title"> {{ (p as any).title }} </template>
          <template #subtitle> {{ (p as any).category }} </template>
          <template #content>
            <p id="description">{{ (p as any).price }} €</p>
          </template>
          <template #footer>
            <Button id="BuyButton" @click="buyProduct(p)" icon="pi pi-cart-plus" label="Buy" />
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "~/store/cart";

definePageMeta({
  layout: "default",
});

useHead({
  title: "HDMSTORE | Shop",
});

const { id } = useRoute().params;
const address = `https://fakestoreapi.com/products/category/${id}`;
const { data: products } = await useFetch(address);

function buyProduct(product: any) {
  useStore().addProductToCart(product.id);
}
function showDialog() {
  console.log("^^^^^^^^^^^^^^");
}
</script>
<style>
.itemimg {
  width: 400px;
  height: 250px;
  max-height: 250px;
  object-fit: contain;
}

.content-box {
  padding: 40px;
}

#title,
#description,
#item .p-card-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

#description {
  font-size: 2.5rem;
  font-weight: 700;
  font-style: normal;
}

.itemscontainer {
  margin: 20px;
  align-content: space-between;
}

#BuyButton {
  width: 100%;
  font-size: large;
  font-weight: 900;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  text-transform: uppercase;
  background-color: blueviolet;
  border-radius: 20px;
}

#BuyButton:hover {
  background: rgb(5, 170, 247);
}

#item .p-card-subtitle {
  font-style: italic;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

#BuyButton:focus {
  background: red;
}

.shop .p-card {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../assets/images/shopbanner.png);
  background-position: center;
  text-align: center;
  color: white;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.p-card .p-card-title {
  font-size: 2.25rem;
  line-height: 5rem;
}

.p-card .p-card-content {
  font-weight: 600;
  color: rgba(238, 29, 35);
}

.listcontent {
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: center;
  display: flex;
  justify-content: space-evenly;
  font-weight: 700;
}

#unfocused,
#coma {
  color: white;
}

#coma {
  font-weight: 900;
}

a {
  all: inherit;
  cursor: pointer;
}
</style>
