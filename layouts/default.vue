<template>
  <div>
    <div class="card relative z-2">
      <HdmNavbar />
      <NuxtPage />
      <HdmFooter />
    </div>
    <ScrollTop target="window" :threshold="100" class="custom-scrolltop" icon="pi pi-arrow-up" />
  </div>
</template>

<style scoped>
::v-deep(.custom-scrolltop) {
  width: 2rem;
  height: 2rem;
  border-radius: 4px;
  background-color: var(--primary-color);
}

::v-deep(.custom-scrolltop:hover) {
  background-color: var(--primary-color);
}

::v-deep(.custom-scrolltop .p-scrolltop-icon) {
  font-size: 1rem;
  color: var(--primary-color-text);
}
</style>
