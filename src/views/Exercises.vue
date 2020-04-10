<template>
  <div>
    <v-app-bar color="#1A1A1A" dense dark>
      <v-btn icon>
        <router-link to="/workouts">
          <v-icon>mdi-arrow-left</v-icon>
        </router-link>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title> Ejercicios </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-filter</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <!-- {{ exercises[8].category }} -->
      <div>
        <v-radio-group v-model="selectedCategory" class="filter">
          <v-col>
            <v-radio label="All" value="All" color="#FFCB15" dark></v-radio>
            <v-radio
              label="Piernas"
              value="PIERNAS"
              color="#FFCB15"
              dark
            ></v-radio>
            <v-radio label="Pecho" value="PECHO" color="#FFCB15" dark></v-radio>
            <v-radio
              label="Espalda"
              value="ESPALDA"
              color="#FFCB15"
              dark
            ></v-radio>
            <v-radio
              label="Brazos"
              value="BRAZOS"
              color="#FFCB15"
              dark
            ></v-radio>
            <v-radio
              label="Hombros"
              value="HOMBROS"
              color="#FFCB15"
              dark
            ></v-radio>
            <v-radio
              label="Abdominales"
              value="ABS"
              color="#FFCB15"
              dark
            ></v-radio>
          </v-col>
        </v-radio-group>
      </div>

      <v-expansion-panels accordion tile dark>
        <v-expansion-panel
          v-for="exercise in filteredExercises"
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
      <Bottom-Nav />
    </v-footer>
  </div>
</template>

<script>
import BottomNav from "../components/BottomNav";
import APIServices from "../services/Api";

export default {
  name: "Exercises",
  data() {
    return {
      exercises: "",
      selectedCategory: "All"
    };
  },
  computed: {
    filteredExercises: function() {
      var vm = this;
      var category = vm.selectedCategory;
      if (category === "All") {
        return vm.exercises;
      } else {
        return vm.exercises.filter(function(exercise) {
          return exercise.category === category;
        });
      }
    }
  },
  components: {
    BottomNav
  },
  methods: {
    getExercises() {
      APIServices.getExercises()
        .then(result => {
          this.exercises = result;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getExercises();
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
.filter {
  padding: 0 20px;
}
p {
  font-size: 14px;
  margin-top: 10px !important;
  color: rgb(245, 245, 245) !important;
}
</style>
