<template>
  <div>
    <v-app-bar fixed color="#1A1A1A" dense dark>
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
    <v-expansion-panels>
      <v-expansion-panel v-for="exercice in workout.exercises" :key="exercice">
        <v-expansion-panel-header>{{ exercise }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          {{ workout }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <!-- {{ workout.exercises}} -->
    <BottomNav />
  </div>
</template>

<script>
import BottomNav from "../components/BottomNav";
import APIServices from "../services/Api";

export default {
  name: "Workout",
  data() {
    return {
      workout: ""
    };
  },
  components: {
    BottomNav
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
    }
  },
  mounted() {
    this.getWorkout();
  }
};
</script>

<style lang="scss" scoped></style>
