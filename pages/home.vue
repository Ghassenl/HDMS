<template>
  <div>
    <div class="Header">
      <Splitter class="mb-5">
        <SplitterPanel class="intro flex align-items-center justify-content-center">
          <h2>Welcome to HDMSTORE</h2>
          <p>where we turn your website dreams into reality! </p>
          <NuxtLink to="/about"> <Button id="introbutton" label="ABOUT US" text raised> </Button></NuxtLink>
        </SplitterPanel>
        <SplitterPanel class="flex align-items-center justify-content-center">
          <img alt="logo" src="../assets/images/homebanner.png" height="400" />
        </SplitterPanel>
      </Splitter>
    </div>
    <h2 id="featured">FEATURED CONTENT</h2>
    <div class="productcarousel">
      <Carousel :value="product" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular
        :autoplayInterval="2000">
        <template #item="slotProps">
          <div class="border-1 surface-border border-round m-2 text-center py-5 px-3">
            <div class="mb-5">
              <img :src="slotProps.data.image" :alt="slotProps.data.name" class="w-6 itemimg" />
            </div>
            <div>
              <h5 class="mt-0 mb-3">{{ slotProps.data.title }}</h5>
              <h4 class="mb-1">{{ slotProps.data.price }} €</h4>

              <div class="mt-5">
                <Button icon="pi pi-search" rounded class="mr-2" />
                <Button icon="pi pi-star-fill" rounded severity="success" class="mr-2" />
              </div>
            </div>
          </div>
        </template>
      </Carousel>
    </div>

    <div class="steps">
      <Timeline :value="events" align="alternate" class="customized-timeline">
        <template #marker="slotProps">
          <span class="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1"
            :style="{ backgroundColor: slotProps.item.color }">
            <i :class="slotProps.item.icon"></i>
          </span>
        </template>
        <template #content="slotProps">
          <Card id="timelinecard">
            <template #title>
              {{ slotProps.item.status }}
            </template>
            <template #subtitle id="subs">
              {{ slotProps.item.date }}
            </template>
            <template #content>
              <p>
                {{ slotProps.item.content }}
              </p>
            </template>
          </Card>
        </template>
      </Timeline>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ProductService } from "@/services/ProductService";
const product = ref();
onMounted(async () => {
  const ProductList = await ProductService.getProductList();
  product.value = (ProductList as any).map((product: any) => {
    return {
      title: product.title,
      price: product.price,
      image: product.image,
    };
  });
});

const responsiveOptions = ref([
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 3,
  },
  {
    breakpoint: "991px",
    numVisible: 2,
    numScroll: 2,
  },
  {
    breakpoint: "767px",
    numVisible: 1,
    numScroll: 1,
  },
]);

definePageMeta({
  layout: "default",
});
useHead({
  title: "HDMSTORE | Home",
});
import { ref } from "vue";
const events = ref([
  { status: "Design", date: "2/12/2050 10:30", content: "In the design phase, our team will collaborate with the client to conceptualize the website's layout, user interface, and overall aesthetic to ensure an appealing and intuitive user experience.", icon: "pi pi-shopping-cart", color: "#9C27B0" },
  { status: "Discuss", date: "15/10/2060 14:00", content: "During the discussion phase, we will engage in detailed consultations with the client to gather their requirements, preferences, and specific functionalities they want for the website, ensuring a clear understanding of their vision.", icon: "pi pi-cog", color: "#673AB7" },
  { status: "Develop", date: "15/10/2070 16:15", content: "In the development stage, our skilled developers will use cutting-edge technologies to bring the approved design to life, creating a fully functional website that meets the client's needs and aligns with industry standards.", color: "#FF9800" },
  { status: "Deliver", date: "16/10/2080 10:00", content: "Finally, we will deliver the completed website to the client, conducting rigorous testing to ensure its functionality and compatibility across various devices and browsers, providing a seamless and successful launch of the website.", icon: "pi pi-check", color: "#607D8B" },
]);
</script>

<style >
@keyframes pulsate {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-10px);
  }

  60% {
    transform: translateY(-5px);
  }
}

#introbutton {
  margin: 20px;
  background-color: #f8f5f2;
  color: indigo;
  border-radius: 30px;
  font-family: fantasy;
  animation: pulsate 2s infinite;
  border: #f8f5f2;
}

.intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px !important;
}

.p-splitter {
  background: #009fff;
  background: -webkit-linear-gradient(to right, #ec2f4b, #009fff);
  background: linear-gradient(to right, #ec2f4b, #009fff);
  height: 400px;
  border: none !important;
}

.p-splitter a {
  all: initial !important;
}

.p-splitter p {
  color: white;
  font-size: 1.5rem;
  padding: 10px;
  font-style: italic;
  font-weight: 300;
}

.p-splitter h2 {
  color: white;
  text-transform: uppercase;
  font-size: 3rem;
}

.p-splitter .p-splitter-gutter {
  display: none !important;
  opacity: 0 !important;
}

#featured {
  text-align: center;
  font-size: 3em;
  color: indigo;
  padding: 20px;
  text-transform: uppercase;
  font-weight: bold;
  font-style: italic;
  font-family: math;
}

.itemimg {
  width: 400px;
  height: 250px;
  max-height: 250px;
  object-fit: contain;
}

.productcaroussel {
  height: 50%;
}

.steps {
  padding: 40px 20px;
  background: #f8f5f2;
}

p-timeline {
  size: 300px;
  height: 100px;
  width: 100px;
}

#itempic {
  border-radius: 90px;
  margin-bottom: 20px;
  border-radius: 20px;
  border: 7px white;
  border-style: solid;
}

#timelinecard {
  border-radius: 30px;
  --tw-shadow: 0 20px 20px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
</style>
