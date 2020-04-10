<template>
  <div>
    <v-app-bar color="#1A1A1A" dense dark>
      <v-btn icon>
        <router-link to="/workouts/mis-workouts">
          <v-icon>mdi-arrow-left</v-icon>
        </router-link>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title> {{ workout.name }} </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- {{ workout.exercises }} -->
    <v-content>
      <Timer :rounds="workout.rounds" v-on:logworkout="logWorkout()" />
      <v-expansion-panels accordion tile dark>
        <v-expansion-panel
          v-for="exercise in workout.exercises"
          :key="exercise._id"
        >
          <v-expansion-panel-header>{{
            exercise.name
          }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list-item-avatar tile width="100%" height="150px"
              ><v-img :src="exercise.photo_url" alt="" id="img" height="auto"
            /></v-list-item-avatar>
            <p>{{ exercise.description }}</p>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-content>
    <v-footer app class="pa-0">
      <BottomNav />
    </v-footer>
  </div>
</template>

<script>
import BottomNav from "../components/BottomNav";
import Timer from "../components/Timer";
import APIServices from "../services/Api";

export default {
  name: "Workout",
  data() {
    return {
      workout: ""
    };
  },
  components: {
    BottomNav,
    Timer
  },
  methods: {
    getWorkout() {
      APIServices.WorkoutById(this.$route.params.workoutId)
        .then(result => {
          this.workout = result;
        })
        .catch(err => {
          console.log(err);
        });
    },
    logWorkout() {
      const newWorkout = {
        user: localStorage.getItem("id"),
        name: this.workout.name,
        rounds: this.workout.rounds,
        workout: this.workout._id,
        exercises: this.workout.exercises
      };
      APIServices.logWorkout(newWorkout)
        .then(console.log("paso por aquí"))
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getWorkout();
  }
};
</script>

<style lang="scss" scoped>
* {
  color: white !important;
  text-decoration-line: none;
  font-family: "Montserrat", sans-serif;
  margin: 0px !important;
}
p {
  font-size: 14px;
  margin-top: 10px !important;
  color: rgb(245, 245, 245) !important;
}
</style>
