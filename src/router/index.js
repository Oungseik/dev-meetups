import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/meetups",
      name: "meetups",
      component: () => import("../views/MeetupsView.vue"),
    },
    {
      path: "/meetup/new",
      name: "createMeetup",
      component: () => import("../views/CreateMeetupView.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/ProfileView.vue"),
    },
    {
      path: "/signup",
      name: "signUp",
      component: () => import("../views/SignUpView.vue"),
    },
    {
      path: "/signin",
      name: "signin",
      component: () => import("../views/SignInView.vue"),
    },
  ],
});

export default router;
