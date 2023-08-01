<template>
  <div class="card shop">
    <Card>
      <template #title> E-STORE</template>
      <template #content>
        <ul class="listcontent">
          <li id="unfocused">
            <NuxtLink to="/home">HOME</NuxtLink>
          </li>
          <li id="coma">-</li>
          <li>SHOP</li>
        </ul>
      </template>
    </Card>
  </div>
  <Shopitem />
  </template>
  
<script setup>
definePageMeta({
  layout: "default",
});
useHead({

title: 'HDMSTORE | Shop',
}
)
</script>

<style>
.shop .p-card {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(../../assets/images/shopbanner.png);
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