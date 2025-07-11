<template>
    <aside class="bg-gray-300">
        <nav class="flex flex-col h-full">
          <img src="https://i.pinimg.com/originals/ed/91/ac/ed91ac131f85b86c3e3fa7816c3af156.jpg" class="w-20 h-20 mx-auto my-4 flex justify-center rounded-full" alt="Logo"/>
          <router-link to="/" class="p-2 hover:bg-gray-400 items-center border border-gray-400 w-full flex justify-center">Logout</router-link>
          <router-link to="/about" class="p-2 hover:bg-gray-400 items-center border border-gray-400 w-full flex justify-center">About</router-link>
          <router-link to="/shawn" class="p-2 hover:bg-gray-400 items-center border border-gray-400 w-full flex justify-center">Shawn's Page</router-link>
          <router-link to="/poems" class="p-2 hover:bg-gray-400 items-center border border-gray-400 w-full flex justify-center">Poems</router-link>
          <router-link to="/submitpoem" class="p-2 hover:bg-gray-400 items-center border border-gray-400 w-full flex justify-center">Compose</router-link>
          <a href="#" class="p-2 hover:bg-gray-400 items-center border border-gray-400 w-full flex justify-center">Contact</a>
        </nav>
      </aside>
</template>