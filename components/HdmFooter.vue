<template>
    <div class="footer">
        <div class="container flex flex-column gap-2">
            <div class="flex flex-column md:flex-row">

                <NuxtLink to="https://m.facebook.com/profile.php?id=100081028401421&locale2=hi_IN&_rdr"><i
                    class="pi pi-facebook" ></i>
                </NuxtLink>
                <NuxtLink to="https://m.facebook.com/profile.php?id=100081028401421&locale2=hi_IN&_rdr"><i
                    class="pi pi-instagram" ></i>
                </NuxtLink>
                <NuxtLink to="https://m.facebook.com/profile.php?id=100081028401421&locale2=hi_IN&_rdr"><i
                    class="pi pi-linkedin" ></i>
                </NuxtLink>
            </div>
            
            
        </div>
    </div>
</template>

<script>

</script>

<style>
.footer {
    width: 100%;
    bottom: 0;
    height: 100px;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
    font-family: fantasy;
    --tw-bg-opacity: 1;
    background-color: rgba(5, 170, 247, var(--tw-bg-opacity));
    font-size: 1.2em;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative; 
    
}

.container {
    display: flex;
    justify-content: space-evenly;
}
.container i{
    color: white;
    margin: 10px;
    font-size: 3rem !important;

}
.container i:hover{
    color: rgb(255, 192, 168);
     --tw-shadow: 0 20px 20px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.footerlinks{
    color: white;

}
.footerlinks ul{
    list-style: none;
    text-transform: uppercase;
}

</style>