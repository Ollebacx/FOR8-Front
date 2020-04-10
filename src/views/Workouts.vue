<template>
  <div>
    <v-content>
      <v-row>
        <v-col>
          <div class="myWorkouts mb-3">
            <div>
              <p id="title">Mis Workouts</p>
            </div>
            <div id="sub">
              <router-link to="/workouts/mis-workouts">
                VER TODO
              </router-link>
            </div>
          </div>
        </v-col>
      </v-row>

      <v-row class="mb-3">
        <v-col>
          <router-link to="/personalize">
            <v-img
              src="https://images.unsplash.com/photo-1585342565162-3704ff9b221d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
              aspect-ratio="2"
            >
              <p>Crear entrenamiento personalizado</p>
            </v-img>
          </router-link>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <router-link to="/exercises">
            <v-img
              src="https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80"
              aspect-ratio="2"
            >
              <p>Ejercicios individuales</p>
            </v-img>
          </router-link>
        </v-col>
      </v-row>
    </v-content>
    <v-footer app>
      <Bottom-Nav />
    </v-footer>
  </div>
</template>

<script>
import BottomNav from "../components/BottomNav";
export default {
  name: "Workouts",
  data() {
    return {};
  },
  components: {
    BottomNav
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0px !important;
  padding: 0px !important;
}
.structure {
  text-align: center;
  * {
    color: white;
    text-decoration-line: none;
    font-family: "Montserrat", sans-serif;
  }
  p {
    text-align: left;
    width: 85%;
    margin: 20px auto !important;
    font-family: "Russo One", sans-serif;
    font-size: 24px;
    text-shadow: 2px 3px #262626;
  }
}

.myWorkouts {
  height: 200px;
  background-color: #ffcb15;
  #title {
    font-family: "Russo One", sans-serif;
    font-size: 32px;
    text-shadow: none;
    margin: 0px !important;
    padding: 20px !important;
  }
  #sub {
    width: 90%;
    margin: auto !important;
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    font-weight: 700;
    text-align: right;
  }
}
</style>
