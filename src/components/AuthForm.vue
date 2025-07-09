<script setup>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
const isLogin = computed(() => route.name === 'Login');

function toggle() {
    isLogin.value
        ? router.push({ name: 'Signup'})
        : router.push({ name: 'Login' });
}

const formDate = ref({
    username: '',
    email: '',
    password: ''
});

function handleSubmit() {
    if (isLogin.value) {
        // Handle login logic
        console.log('Logging in with:', formDate.value);
    } else {
        // Handle signup logic
        console.log('Signing up with:', formDate.value);
    }
}
</script>

<template>
    <section class="flex flex-col items-center justify-center h-screen bg-[url('https://videos.openai.com/vg-assets/assets%2Ftask_01jzpyxr97fye81frtrwq5wrc2%2F1752043588_img_0.webp?st=2025-07-09T05%3A20%3A57Z&se=2025-07-15T06%3A20%3A57Z&sks=b&skt=2025-07-09T05%3A20%3A57Z&ske=2025-07-15T06%3A20%3A57Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=01%2BkIz%2FZsFZrg1QeEXcuHS%2B7SBEqBiLEbq552wnmvJI%3D&az=oaivgprodscus')] bg-cover bg-center bg-no-repeat
           backdrop-blur-sm">
        <h1 class="text-2xl font-Frijole bg-gradient-to-r from-[#704f29] via-[#935e38] to-[#c6a47acd] bg-clip-text text-transparent [text-shadow:_1px_1px_0px_#d8c1a5,_1px_1px_0px_#d8c1a5,_-1px_-1px_0px_#00000040] mb-4">{{ isLogin ? 'Login' : 'Sign Up' }}</h1>
        <form @submit.prevent="handleSubmit" class="flex flex-col gap-4 w-64">
                <input
                v-if="!isLogin"
                v-model="formDate.username" 
                type="text" 
                placeholder="Username" 
                class="p-2 mb-4 border border-gray-300 rounded w-64
                font-RubikDirt 
                bg-gradient-to-r from-[#704f29] via-[#935e38] to-[#c6a47acd] 
                bg-clip-text 
                text-transparent [text-shadow:_1px_1px_0px_#d8c1a5,_1px_1px_0px_#d8c1a5,_-1px_-1px_0px_#00000040]"
                />
                <input 
                v-model="formDate.email"
                type="email" 
                placeholder="Email" 
                class="p-2 mb-4 border border-gray-300 rounded w-64
                font-RubikDirt bg-gradient-to-r from-[#704f29] via-[#935e38] to-[#c6a47acd] bg-clip-text text-transparent [text-shadow:_1px_1px_0px_#d8c1a5,_1px_1px_0px_#d8c1a5,_-1px_-1px_0px_#00000040]"
                />
                <input 
                v-model = "formDate.password"
                type="password" 
                placeholder="Password" 
                class="p-2 mb-4 border border-gray-300 rounded w-64
                font-RubikDirt bg-gradient-to-r from-[#704f29] via-[#935e38] to-[#c6a47acd] bg-clip-text text-transparent [text-shadow:_1px_1px_0px_#d8c1a5,_1px_1px_0px_#d8c1a5,_-1px_-1px_0px_#00000040]" />
                <button type="submit" class="bg-blue-500 text-white p-2 rounded w-64 hover:bg-blue-600 transition duration-200 
                font-Frijole [text-shadow:_1px_1px_0px_#d8c1a5,_1px_1px_0px_#d8c1a5,_-1px_-1px_0px_#00000040]">
                    <router-link to="/about">
                    {{ isLogin ? 'Login' : 'SignUp' }}
                    </router-link>
                </button>
        </form>
        <p class="mt-4 text-sm font-RubikDirt bg-gradient-to-r from-[#704f29] via-[#935e38] to-[#c6a47acd] bg-clip-text text-transparent [text-shadow:_1px_1px_0px_#d8c1a5,_1px_1px_0px_#d8c1a5,_-1px_-1px_0px_#00000040]">
            {{ isLogin ? 'Don\'t have an account?' : 'Already have an account?' }}
            <button @click="toggle" class="text-blue-500 hover:underline">
                {{ isLogin ? 'Sign Up' : 'Login' }}
            </button>
        </p>
    </section>
</template>