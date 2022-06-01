import auth from "../authentication/authentication";
export default [
  {
    path: "/",
    name: "home",
    component: () => import(`@/components/Home.vue`),
  },
  {
    path: "/callback",
    name: "callback",
    component: () => import(`@/components/Callback.vue`),
  },
  {
    path: "/repositories",
    name: "repositories",
    component: () => import(`@/components/Repositories.vue`),
    beforeEnter: (to, from, next) => {
      if (auth.isLoggedIn()) next();
      else next({ path: "/unauthorized" });
    },
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import(`@/components/Profile.vue`),
    beforeEnter: (to, from, next) => {
      if (auth.isLoggedIn()) next();
      else next({ path: "/unauthorized" });
    },
  },

  {
    path: "/followers",
    name: "followers",
    component: () => import(`@/components/Followers.vue`),
    beforeEnter: (to, from, next) => {
      if (auth.isLoggedIn()) next();
      else next({ path: "/unauthorized" });
    },
  },
  {
    path: "/following",
    name: "following",
    component: () => import(`@/components/Following.vue`),
    beforeEnter: (to, from, next) => {
      if (auth.isLoggedIn()) next();
      else next({ path: "/unauthorized" });
    },
  },
  {
    path: "/unauthorized",
    name: "unauthorized",
    component: () => import(`@/components/UnAuthorized.vue`),
  },
];
