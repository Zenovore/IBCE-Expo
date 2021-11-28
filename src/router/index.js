import { createRouter, createWebHashHistory } from "vue-router";
import ComingSoon from "../views/ComingSoon.vue";

const routes = [
  {
    path: "/",
    name: "comingsoon",
    component: ComingSoon,
    meta: {
      title: "IBCE 2022 - Coming Soon",
    },
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
