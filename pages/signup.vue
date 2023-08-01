<template>
    <div class="formlogin p-4">
        <div class="logincard">
            <div class="login">
                <div class="text-center mb-5">
                    <img src="../assets/images/logo.svg" alt="Image" height="50" class="mb-3"
                        style="background-color: rgb(5, 170, 247); border-radius: 10px" />
                    <div class="text-900 text-3xl font-medium mb-3">Sign-Up !</div>
                </div>
            </div>

            <div>
                <form @submit="onSubmit">
                    <label for="email" class="block text-900 font-medium mb-2">Email</label>
                    <InputText id="email" v-model="email" type="text"
                        :class="['w-full mb-3', { 'p-invalid': emailErrorMessage }]" aria-describedby="email-text-error" />
                    <small class="p-error" id="email-text-error">{{ emailErrorMessage || "&nbsp;" }}</small>

                    <label for="name" class="block text-900 font-medium mb-2">Name</label>
                    <InputText id="name" v-model="name" type="text"
                        :class="['w-full mb-3', { 'p-invalid': nameErrorMessage }]" aria-describedby="name-text-error" />
                    <small class="p-error" id="name-text-error">{{ nameErrorMessage || "&nbsp;" }}</small>


                    <label for="password" class="block text-900 font-medium mb-2">Password</label>
                    <Password id="password" v-model="password" type="text" inputClass="w-full" :feedback="false" toggleMask
                        :class="['w-full mb-3', { 'p-invalid': passwordErrorMessage }]"
                        aria-describedby="password-text-error" />
                    <small class="p-error" id="password-text-error">{{ passwordErrorMessage || "&nbsp;" }}</small>

                    <div class="flex align-items-center justify-content-between mb-6">
                        <div class="flex align-items-center">
                            <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot
                                password?</a>
                        </div>

                        <Button id="contactSubmit" icon="pi pi-user" label="Submit" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { useField, useForm } from "vee-validate";
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/store/auth";

const router = useRouter();
const { handleSubmit } = useForm();
const { signupUser } = useAuthStore();
const { user } = storeToRefs(useAuthStore());

definePageMeta({
    layout: "default",
});
useHead({
    title: "HDMSTORE | login",
});

function validateField(value: any) {
    if (!value) {
        return "Value is required.";
    }

    return true;
}

const { value: email, errorMessage: emailErrorMessage } = useField("email", validateField);
const { value: password, errorMessage: passwordErrorMessage } = useField("password", validateField);
const { value: name, errorMessage: nameErrorMessage } = useField("name", validateField);
const onSubmit = handleSubmit(async (values) => {
    await signupUser(values.name, values.email, values.password);
    if (user.value) {
        router.go(0);
    }
});
</script>
  
<style>
.formlogin {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: #f8f5f2;
}

.logincard {
    align-self: center;
    padding: 5rem;
    --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    margin-bottom: 54px;
    background: white;
    border-radius: 30px;
    width: 50%;
}
</style>
  