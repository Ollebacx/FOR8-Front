<template>
  <div>
    <v-row class="message">
      <v-overlay :value="overlay" opacity="0.9">
        <span>
          Se ha añadido "{{ workoutName }}" a tu lista de entrenamientos
          personales.
          <br />
        </span>
        <router-link to="/workouts/mis-workouts"
          ><v-btn class="btn" x-large color="success" @click="overlay = false">
            Ok
          </v-btn></router-link
        >
      </v-overlay>
    </v-row>
    <v-app-bar color="#1A1A1A" dense dark>
      <v-btn icon>
        <router-link to="/workouts">
          <v-icon>mdi-arrow-left</v-icon>
        </router-link>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title> Crear entrenamiento </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon></v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <v-row class="content">
          <v-col>
            <p>Escribe el nombre de tu nuevo workout:</p>
            <v-text-field
              label=""
              v-model="workoutName"
              :outlined="outlined"
              :solo="solo"
              :clearable="clearable"
            ></v-text-field>

            <p v-if="rest > 0">
              Selecciona {{ rest }} ejercicios para completar el workout
            </p>
            <p v-else>
              ¿Estás ready? Dale a siguiente para continuar.
            </p>
            <v-row class="btn">
              <v-col>
                <v-btn @click="createWorkout()" color="#AAAAAA"
                  >Siguiente</v-btn
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <v-container fluid>
        <h2>Lista de ejercicios</h2>
        <v-expansion-panels accordion tile dark>
          <v-expansion-panel v-for="exercise in exercises" :key="exercise._id">
            <v-expansion-panel-header>
              <v-checkbox
                v-model="selected"
                :label="exercise.name"
                :value="exercise._id.toString()"
              ></v-checkbox>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list-item-avatar tile width="100%" height="150px"
                ><v-img :src="exercise.photo_url" alt="" id="img" height="auto"
              /></v-list-item-avatar>
              <p>{{ exercise.description }}</p>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container> </v-content
    ><v-footer app class="pa-0">
      <BottomNav />
    </v-footer>
  </div>
</template>

<script>
import BottomNav from "../components/BottomNav";
import APIServices from "../services/Api";

export default {
  name: "CreateWorkout",
  data() {
    return {
      workoutName: "",
      exercises: "",
      selected: [],
      outlined: true,
      solo: true,
      clearable: true,
      overlay: false,
      zIndex: 0
    };
  },
  components: {
    BottomNav
  },
  computed: {
    rest() {
      return 8 - this.selected.length;
    }
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
    },
    createWorkout() {
      const userWorkout = {
        name: this.workoutName,
        exercises: this.selected
      };
      APIServices.createWorkout(userWorkout)
        .then((this.overlay = !this.overlay))
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
}
p {
  margin: 10px auto;
  font-size: 16px;
}
h2 {
  margin: 5%;
}
.content {
  width: 90%;
  margin: auto;
  text-align: left;
  margin-top: 10px;
  .btn {
    text-align: center !important;
  }
}
#err {
  color: red;
}
.message {
  margin-left: 80px;
  text-align: center;
  span {
    margin-bottom: 100px !important;
    font-size: 21px;
  }
  .btn {
    width: 70%;
    margin: 30px;
  }
}
</style>
