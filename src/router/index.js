import { createRouter, createWebHistory } from "vue-router";
import Comingsoon from "../views/Comingsoon.vue";
import Guestbook from "../views/Guestbook.vue";
import Mainevent from "../views/Mainevent.vue";
import Catalogue from "../views/Catalogue.vue";

const routes = [
  {
    path: "/comingsoon",
    name: "comingsoon",
    component: Comingsoon,
    meta: {
      title: "IBCE 2022 – Coming Soon",
    },
  },
  {
    path: "/guestbook",
    name: "guestbook",
    component: Guestbook,
    meta: {
      title: "IBCE 2022 – Coming Soon",
    },
  },
  {
    path: "/catalogue",
    name: "catalogue",
    component: Catalogue,
    meta: {
      title: "IBCE 2022 – Catalogue",
    },
  },
  {
    path: "/Mainevent",
    name: "mainevent",
    component: Mainevent,
    meta: {
      title: "IBCE 2022 - Main Event",
    },
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     // import(/* webpackChunkName: "about" */ "../views/About.vue"),
  //     import("../views/Guestbook.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
