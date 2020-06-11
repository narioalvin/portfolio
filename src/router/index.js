import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: `Alvin's Portfolio` },
    children: [
      {
        path: 'about',
        component: () => import('@/views/About'),
        meta: { title: `Alvin's Portfolio` },
      },
      {
        path: 'project',
        component: () => import('@/views/Project'),
        meta: { title: `Alvin's Portfolio` },
      },
      {
        path: 'contact',
        component: () => import('@/views/Contact'),
        meta: { title: `Alvin's Portfolio` },
      }
    ]
  }
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
