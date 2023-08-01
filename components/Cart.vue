<template>
    <Button type="button" icon="pi pi-shopping-cart" label="Cart" @click="toggle" aria-haspopup="true"
        aria-controls="overlay_panel" class="Cart-button" v-show="user" style="display: none !important;" />

    <OverlayPanel class="cart-overlay" ref="op" appendTo="body">
        <DataTable :value="cartListItems" :paginator="false" scrollable scrollHeight="400px" tableStyle="max-width: 50rem"
            :selectAll="true">
            <Column id="productname" field="name" header="Name" sortable style="min-width: 12rem; max-width: 30px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: block;
    padding: 11% 5%; ">
            </Column>
            <Column header="Image">
                <template #body="slotProps">
                    <img :src="slotProps.data.image" :alt="slotProps.data.image" class="w-4rem  cartimg" />
                </template>
            </Column>
            <Column field="price" header="Price" sortable style="min-width: 8rem">
                <template #body="slotProps">
                    {{ slotProps.data.price }}<span style="color: red; font-size: 1em;
    font-weight: 700; padding: 2px;">€</span>
                </template>
            </Column>
        </DataTable>
    </OverlayPanel>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { CartService } from "@/services/CartService";
import { useAuthStore } from "~/store/auth";
import { storeToRefs } from "pinia";
const { user } = storeToRefs(useAuthStore());

onMounted(async () => {
    const cartList: any[] = await CartService.getCartList();

    cartListItems.value = cartList.map((item) => {
        return {
            name: item.title,
            price: item.price,
            image: item.image,
        };
    });

});

const op = ref();
const cartListItems = ref();

const toggle = (event: any) => {
    op.value.toggle(event);
};
</script>
<style>
.cart-overlay .p-datatable-tbody tr {
    background: white !important;
    outline: none !important;
}

.cartimg {
    width: 80px;
    height: 80px;
    max-height: 100px;
    max-width: 100px;
    object-fit: contain;
}

.Cart-button {
    /* border-radius: 30px; */
    margin: 20px;
    background: none;
    border: none;
    font-family: fantasy;
    /* background-color: rgb(5, 170, 247); */
    font-size: 1.2em;
    text-transform: capitalize;
}
</style>
