import Vue from "vue";
import VueRouter from "vue-router";
import Auth from "../views/Auth.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Workouts from "../views/Workouts.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Auth",
    component: Auth,
    beforeEnter(to, from, next) {
      if (localStorage.getItem("token")) {
        next({
          name: "Workouts"
        });
      }
      next();
    }
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/workouts",
    name: "Workouts",
    component: Workouts,
    beforeEnter(to, from, next) {
      if (!localStorage.getItem("token")) {
        next({
          name: "Auth"
        });
      }
      next();
    }
  }
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
