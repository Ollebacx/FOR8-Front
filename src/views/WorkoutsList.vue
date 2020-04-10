<template>
  <div>
    <v-app-bar fixed color="#1A1A1A" dense dark>
      <v-btn icon>
        <router-link to="/workouts">
          <v-icon>mdi-arrow-left</v-icon>
        </router-link>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title>Workouts</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-tabs fixed-tabs background-color="#262626" dark class="mt-12">
        <v-tab>
          FOR8
        </v-tab>
        <v-tab>
          PERSONALIZADOS
        </v-tab>
      </v-tabs>
      <CardWorkout
        v-for="workout in workouts"
        :key="workout.id"
        :workoutInfo="workout"
      />
      <CardWorkout
        v-for="userWorkout in userWorkouts"
        :key="userWorkout.id"
        :workoutInfo="userWorkout"
      />
    </v-content>
    <v-footer app class="pa-0">
      <BottomNav />
    </v-footer>
  </div>
</template>

<script>
import BottomNav from "../components/BottomNav";
import CardWorkout from "../components/CardWorkout";
import APIServices from "../services/Api";

export default {
  name: "WorkoutsList",
  data() {
    return {
      workouts: "",
      userWorkouts: ""
    };
  },
  components: {
    BottomNav,
    CardWorkout
  },
  methods: {
    getTemplateWorkouts() {
      APIServices.getTemplateWorkouts()
        .then(result => {
          this.workouts = result;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getUserWorkouts() {
      APIServices.getUserWorkouts()
        .then(result => {
          this.userWorkouts = result;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getTemplateWorkouts(), this.getUserWorkouts();
  }
};
</script>

<style lang="scss" scoped>
* {
  color: white !important;
  text-decoration-line: none;
  font-family: "Montserrat", sans-serif;
}
</style>
