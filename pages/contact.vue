<template>
    <div class="card contact">
        <Card>
            <template #title> CONTACT US </template>
            <template #content>
                <ul class="listcontent">
                    <li id="unfocused">
                        <NuxtLink to="/home">HOME</NuxtLink>
                    </li>
                    <li id="coma">-</li>
                    <li>CONTACT</li>
                </ul>
            </template>
        </Card>
    </div>
    <div class="formcontact">
        <div class="card centercard">
            <div class="flex flex-column md:flex-row">
                <div class="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
                    <h2 style="margin-bottom: 60px;">Contact Information</h2>
                    <div class="contactsinfo">
                        <div class="flex gap-2">
                            <div class="mb-3">
                                <div class="left">
                                    <i class="pi pi-user"></i>
                                </div>
                                <div class="right">
                                    <h4>OFFICE ADDRESS</h4>
                                    <p>38 Rue Alfred Tenret, 6030 Charleroi, Belgique</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex gap-2">
                            <div class="mb-3">
                                <div class="left">
                                    <i class="pi pi-phone"></i>
                                </div>
                                <div class="right">
                                    <h4>PHONE</h4>
                                    <p>+32 485 160 996</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex gap-2">
                            <div class="mb-3">
                                <div class="left">
                                    <i class="pi pi-inbox"></i>
                                </div>
                                <div class="right">
                                    <h4>EMAIL ADDRESS</h4>
                                    <p>HDMCONTACT@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-2">
                    <Divider layout="vertical" class="hidden md:flex"><b>OR</b></Divider>
                    <Divider layout="horizontal" class="flex md:hidden" align="center"><b>OR</b></Divider>
                </div>
                <div class="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
                    <h2>Send Us A Message</h2>
                    <form @submit="onSubmit" class="flex flex-column gap-2">
                        <div class="flex flex-column md:flex-row ">
                            <span class="p-float-label" id="username">
                                <InputText id="username" v-model="value" />
                                <label for="username">Username</label>
                            </span>
                            <span class="p-float-label" id="Mail">
                                <InputText id="mail" v-model="value" />
                                <label for="mail">Mail</label>
                            </span>
                        </div>
                        <div class="flex flex-column md:flex-row">
                            <span class="p-float-label" id="Description">
                                <Textarea id="value" v-model="value" autoResize :class="{ 'p-invalid': errorMessage }"
                                    rows="4" cols="53" aria-describedby="text-error" placeholder="Description"/>
                                <label for="value">Description</label>
                            </span>
                            <Toast />
                        </div>
                        <div class="flex flex-column md:flex-row buttonsubmit">
                            <small id="text-error" class="p-error">{{ errorMessage || '&nbsp;' }}</small>
                            <Button id="contactSubmit" type="submit" label="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
useHead({

title: 'HDMSTORE | Contact',
}
)
</script>

<style>
.contact .p-card {
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
        url(../assets/images/contactheader.png);
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

.left {
    margin-right: 9px;
    float: left;
}

.right {
    width: auto;
    float: right;
}

.mb-3 {
    margin-bottom: 10px;
}

.formcontact h4 {
    text-transform: uppercase;
    font-weight: bolder;
}

.formcontact i {
    color: rgb(25, 0, 255);
    font-size: 1.7rem !important;
}

.right h4 {
    margin-bottom: 6px;
}

#username {
    margin-right: 12px;
}

#value {
    width: 100%;
}

.buttonsubmit button {
    width: 50%;
    margin-left: 25%;
    margin-right: 25%;
}
#username ,#Mail ,#Description {
    padding-top: 10px;
    border-radius: 5px;
    
}
#Description{
    padding-top: 30px ;
}
.centercard{
    
  align-self: center;
  padding: 5rem;
  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    margin-bottom: 40px;
    background: white;
    border-radius: 30px;
}
.formcontact{
    display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-top: 40px;
  background: #F8F5F2;
  
}
#contactSubmit{
    --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    border-radius: 20px;
}
#contactSubmit:hover{
background-color: red;
text-transform: uppercase;

}
</style>
