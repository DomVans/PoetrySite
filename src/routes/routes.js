import { createRouter, createWebHistory } from 'vue-router';
import Home  from '../components/Home.vue';
import About from '../components/About.vue';
import ShawnPage from '../components/ShawnPage.vue';
import AuthForm from '../components/AuthForm.vue';


const routes = [
  { path: '/',name: 'Home',  component: Home, meta: { hideSidebar: true } },
  { path: '/about', name: 'About', component: About},
  { path: '/shawn', name: 'ShawnPage', component: ShawnPage},
  { path: '/signup', name: 'Signup', component: AuthForm, meta: { hideSidebar: true } },
  { path: '/login', name: 'Login', component: AuthForm, meta: { hideSidebar: true } },
  
]
export default createRouter({
  history: createWebHistory(),
  routes,
});