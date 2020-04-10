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
      <v-tabs
        fixed-tabs
        background-color="#262626"
        dark
        class="mt-12"
        v-model="tab"
      >
        <v-tab key="for8">
          FOR8
        </v-tab>
        <v-tab key="yours">
          PERSONALIZADOS
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab" class="content">
        <v-tab-item key="for8">
          <CardWorkout
            v-for="workout in workouts"
            :key="workout.id"
            :workoutInfo="workout"
          />
        </v-tab-item>
        <v-tab-item key="yours">
          <CardWorkout
            v-for="userWorkout in userWorkouts"
            :key="userWorkout.id"
            :workoutInfo="userWorkout"
          />
        </v-tab-item>
      </v-tabs-items>
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
      tab: null,
      workouts: "",
      userWorkouts: ""
    };
  },
  components: {
    BottomNav,
    CardWorkout
  },
  async created() {
    let templateWorkouts = await APIServices.getTemplateWorkouts();
    this.workouts = templateWorkouts;
    let userWorkouts = await APIServices.getUserWorkouts();
    this.userWorkouts = userWorkouts;
  }
};
</script>

<style lang="scss" scoped>
* {
  color: white !important;
  text-decoration-line: none;
  font-family: "Montserrat", sans-serif;
}
.content {
  background-color: #262626 !important;
}
</style>
