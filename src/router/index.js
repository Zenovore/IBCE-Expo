import { createRouter, createWebHistory } from "vue-router";
import Comingsoon from "../views/Comingsoon.vue";
import Guestbook from "../views/GuestBook.vue";
import Mainevent from "../views/Mainevent.vue";
import Catalogue from "../views/Catalogue.vue";
import Game from "../views/Game.vue";
import Page404 from "../views/Page404.vue";

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
    path: "/",
    name: "guestbook",
    component: Guestbook,
    meta: {
      title: "IBCE 2022 – Guestbook",
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
    path: "/mainevent",
    name: "mainevent",
    component: Mainevent,
    meta: {
      title: "IBCE 2022 – Main Event",
    },
  },
  {
    path: "/game",
    name: "game",
    component: Game,
    meta: {
      title: "IBCE 2022 – Game",
    },
  },
  {
    path: "/404",
    name: "404",
    component: Page404,
    meta: {
      title: "IBCE 2022 – 404 Page Not Found",
    },
  },

  // {
  //   path: "/sponsor/:name",
  //   name: "sponsor",
  //   component: Sponsor,
  //   meta: {
  //     title: "IBCE 2022 - Sponsor",
  //   },
  // },
  {
    path: "/sponsor/:name",
    name: "sponsor",
    meta: {
      title: "IBCE 2022 - Sponsor",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      // import(/* webpackChunkName: "about" */ "../views/About.vue"),
      import("../views/Sponsor.vue"),
    props: true,
  },
  {
    path: "/article/:year/:id",
    name: "article",
    meta: {
      title: "IBCE 2022 - Article",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      // import(/* webpackChunkName: "about" */ "../views/About.vue"),
      import("../views/Article.vue"),
    props: true,
  },
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
