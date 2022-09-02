import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => {
      return import('../views/Home.vue');
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => {
      return import('../views/About.vue');
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
