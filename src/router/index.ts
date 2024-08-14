import About from '@/views/about.vue';
import Home from '@/views/home.vue';
import User from '@/views/user.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
   {
      path: '/',
      name: 'Home',
      component: Home,
   },
   {
      path: '/about',
      name: 'About',
      component: About,
   },
   {
      path: '/user/:id',
      component: User,
      props: true,
      meta: {
         requiresAuth: true,
      },
   },
];

const router = createRouter({
   history: createWebHistory(),
   routes,
});

router.beforeEach((to, from, next) => {
   if (to.meta.requiresAuth) {
      console.log('requires auth');
   }
   console.log({ to, from });
   next();
});

export default router;
