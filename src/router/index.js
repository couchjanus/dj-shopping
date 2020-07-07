import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import(`../views/Home.vue`);
const About = () => import(`../views/About.vue`);
const Contributors = () => import('../views/Contributors.vue');

import Login from '../views/Login';
import Lost from '../views/Lost';
import PasswordReset from '../views/PasswordReset';
import PasswordResetConfirm from '../views/PasswordResetConfirm';
import Register from '../views/Register';
import VerifyEmail from '../views/VerifyEmail';

import store from '../store/index';

// const requireAuthenticated = (to, from, next) => {
//   store.dispatch('auth/initialize')
//     .then(() => {
//       if (!store.getters['auth/isAuthenticated']) {
//         next('/login');
//       } else {
//         next();
//       }
//     });
// };

const requireUnauthenticated = (to, from, next) => {
  store.dispatch('auth/initialize')
    .then(() => {
      if (store.getters['auth/isAuthenticated']) {
        next('/home');
      } else {
        next();
      }
    });
};

const redirectLogout = (to, from, next) => {
  store.dispatch('auth/logout')
    .then(() => next('/login'));
};

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
    // beforeEnter: requireAuthenticated,
  },
  {
    path: `/about`,
    name: `About`,
    component: About,
  },
  {
    path: '/contributors',
    name: 'Contributors',
    component: Contributors,
  },
  {
    path: '/password_reset',
    component: PasswordReset,
  },
  {
    path: '/password_reset/:uid/:token',
    component: PasswordResetConfirm,
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/register/:key',
    component: VerifyEmail,
  },
  {
    path: '/login',
    component: Login,
    beforeEnter: requireUnauthenticated,
  },
  {
    path: '/logout',
    beforeEnter: redirectLogout,
  },
  {
    path: '*',
    component: Lost,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
