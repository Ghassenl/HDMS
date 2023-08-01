<template>
    
    <div class="grid grid-cols-4 gap-5 itemscontainer">
    <div class="card inline-block align-items-center justify-content-center" v-for="p in products" style="size: 200px; padding: 20px">
                <Card style="width: 25em" id="item">
                    <template #header>
                        <img alt="user header " class="itemimg" :src="p.image">
                    </template>
                    <template #title id="title"> {{ p.title }} </template>
                    <template #subtitle> {{ p.category }} </template>
                    <template #content>
                        <p id="description">
                            {{ p.price }} €
                        </p>
                    </template>
                    <template #footer>
                        <Button id="BuyButton" icon="pi pi-cart-plus" label="Buy" />
                        
                    </template>
                </Card>
            </div>
    </div>
</template>

<script setup>
const { data: products } = await useFetch('https://fakestoreapi.com/products?limit=12')

</script>

<style>

.itemimg {
    width: 400px;
    height: 250px;
    max-height: 250px;
    object-fit: contain;
}

.content-box{
    padding: 40px;
    
}
#title , #description , #item .p-card-title{
    white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
}
#description{
    font-size: 2.5rem;
    font-weight: 700;
    font-style: normal;
}
.itemscontainer{
    margin: 20px;
    align-content: space-between;
}
#BuyButton{
    width: 100%;
    font-size: large;
    font-weight: 900;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    text-transform: uppercase;
    background-color: blueviolet;
    border-radius: 20px;
    

}
#BuyButton:hover{
    background: rgb(5, 170, 247);;
}
#item .p-card-subtitle{
    font-style: italic;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
#BuyButton:focus{
    background: red;
}
</style>