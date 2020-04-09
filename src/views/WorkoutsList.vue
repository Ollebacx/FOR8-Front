<template>
  <div>
    <v-app-bar fixed color="#262626" dense dark>
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
      <!-- {{ workouts }} -->
    </v-content>
    <BottomNav />
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
      workouts: ""
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
          console.log("hi");
          console.log(err);
        });
    }
  },
  mounted() {
    this.getTemplateWorkouts();
  }
};
</script>

<style lang="scss" scoped>
.structure {
  background-color: #262626;
  min-height: 100vh;
  text-align: center;
  * {
    color: white;
    text-decoration-line: none;
    font-family: "Montserrat", sans-serif;
  }
}
</style>
