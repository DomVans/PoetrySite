<script setup>
import Sidebar from './components/Sidebar.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const showSidebar = computed(() => !route.meta.hideSidebar);
</script>

<template>
  <div class="flex h-screen">
    <aside>
      <Sidebar class="w-40 bg-gray-200" v-if = "showSidebar"/>
    </aside>
    <main class="bg-amber-50 w-full h-full" >
        <router-view />
    </main>
  </div>

</template>

