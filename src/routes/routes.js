import { createRouter, createWebHistory } from 'vue-router';
import Home  from '../components/Home.vue';
import About from '../components/About.vue';

const routes = [
  { path: '/',name: 'Home',  component: Home, meta: { hideSidebar: true } },
  { path: '/about', name: 'About', component: About},
];

export default createRouter({
  history: createWebHistory(),
  routes,
});