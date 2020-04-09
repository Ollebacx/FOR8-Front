import Vue from "vue";
import VueRouter from "vue-router";
import Auth from "../views/Auth.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Workouts from "../views/Workouts.vue";
import WorkoutsList from "../views/WorkoutsList.vue";
import Workout from "../views/Workout.vue";

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
  },
  {
    path: "/workouts/mis-workouts",
    name: "WorkoutsList",
    component: WorkoutsList,
    beforeEnter(to, from, next) {
      if (!localStorage.getItem("token")) {
        next({
          name: "Auth"
        });
      }
      next();
    }
  },
  {
    path: "/workouts/:workoutId",
    name: "Workout",
    component: Workout,
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
