import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

const Home = () => import(`../views/Home.vue`);
const About = () => import(`../views/About.vue`);
const Contributors = () => import('../views/Contributors.vue');

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
