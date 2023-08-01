<template>
  <Menubar :model="items" id="Nav" class="Navbar">
    <template #start id="Logo">
      <NuxtLink to="/home">
        <img alt="logo" src="../assets/images/logo.png" height="60" class="logo" />
      </NuxtLink>
    </template>
    <template #end>

      <Cart />
    </template>
  </Menubar>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/store/auth";

const router = useRouter();
const { logoutUser } = useAuthStore();
const { user } = storeToRefs(useAuthStore());

let women = "/shop/women's clothing";
let men = "/shop/men's clothing";
const items = ref([
  {
    label: "Edit Product",
    icon: "pi pi-fw pi-plus-circle",
    to: "/addproduct",
  },
  {
    label: "SHOP",
    icon: "pi pi-shopping-bag",

    items: [
      {
        label: "Jewelery",
        icon: "pi pi-money-bill",
        url: "/shop/jewelery",
      },
      {
        label: "electronics",
        icon: "pi pi-bolt",
        to: "/shop/electronics",
      },
      {
        label: "womens clothing",
        icon: "pi pi-star-fill",
        to: women,
      },
      {
        label: "mens clothing",
        icon: "pi pi-star",
        to: men,
      },
    ],
  },
  {
    label: "ABOUT",
    icon: "pi pi-fw pi-info-circle",
    to: "/about",
  },
  {
    label: "CONTACT",
    icon: "pi pi-fw pi-at",
    to: "/contact",
  },
  user.value
    ? {
      label: "LOGOUT",
      icon: "pi pi-fw pi-sign-out",
      command: () => {
        logoutUser();
        if (!user.value) {
          router.go(0);
        }
      },
    }
    : {
      label: "LOGIN",
      icon: "pi pi-fw pi-sign-in",
      to: "/login",
    },
]);
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.Navbar {
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
  height: 4.5em;
  font-family: fantasy;
  background-color: rgb(5, 170, 247);
  font-size: 1.2em;
}

#Nav ul {
  margin-right: 5px;
  margin-left: auto;
}

.p-menuitem-link .p-menuitem-text {
  color: white !important;
}

.p-menuitem-link:hover {
  background-color: rgba(3, 116, 168, 0.144);
}

.p-menubar .p-menuitem:not(.p-highlight):not(.p-disabled)>.p-menuitem-content:hover {
  background: rgba(3, 116, 168, 0.301) !important;
}

.p-menubar .p-menuitem:not(.p-highlight):not(.p-disabled) .p-menuitem-content {
  background: rgba(5, 170, 247, 0.247) !important;
}

.p-menuitem-link .p-menuitem-icon {
  color: white !important;
}

.p-menuitem-link .p-submenu-icon {
  color: white !important;
}

.p-menuitem-content:hover {
  border-bottom: 2px solid #f0f0e6 !important;
}

.p-menubar {
  border: 0ch !important;
}

.p-menubar .p-menubar-root-list>.p-menuitem:not(.p-highlight):not(.p-disabled)>.p-menuitem-content:hover {
  background: rgb(5, 170, 247);
}

.p-menubar-start {
  margin-left: 1%;
}

i {
  font-size: 1.5rem !important;
}

.pi {
  font-size: 1.5rem;
}

.p-menubar .p-submenu-list {
  background: rgb(5, 170, 247);
}

.p-menubar .p-menuitem.p-highlight>.p-menuitem-content {
  background: #1d73c9;
}

.p-menubar .p-menuitem.p-highlight.p-focus>.p-menuitem-content {
  background: #1d73c9 !important;
}
</style>
