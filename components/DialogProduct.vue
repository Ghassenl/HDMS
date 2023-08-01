<template>
  <div>
    <Button @click="showDialog">Add Product</Button>

    <DynamicDialog v-model="dialogVisible" :visible="dialogVisible" @hide="closeDialog">
      <template #header> Add Product </template>

      <template #content>
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="product.name" />
        </div>
        <div>
          <label for="price">Price:</label>
          <input type="number" id="price" v-model="product.price" />
        </div>
        <div>
          <label for="description">Description:</label>
          <textarea id="description" v-model="product.description"></textarea>
        </div>
      </template>

      <template #footer>
        <Button label="Add" @click="addProduct" />
        <Button label="Cancel" class="p-button-secondary" @click="closeDialog" />
      </template>
    </DynamicDialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const product = ref(null);
// data() {
//     return {
//         dialogVisible: false,
//         product: {
//             name: '',
//             price: 0,
//             description: ''
//         }
//     };
// },
function showDialog() {
  // this.dialogVisible = true;
}
function closeDialog() {
  // this.dialogVisible = false;
  // this.product = {
  //     name: '',
  //     price: 0,
  //     description: ''
  // };
}
function addProduct() {
  console.log("µµµµµµµ");

  // if (this.product.name && this.product.price) {

  //     console.log('Product added:', this.product);

  //     this.showDialog();
  // }
}
</script>
