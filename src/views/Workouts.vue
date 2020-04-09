<template>
  <div>
    <v-container class="structure">
      <v-row>
        <v-col>
          <div class="myWorkouts"></div>
          <v-img
            src="https://images.unsplash.com/photo-1585342565162-3704ff9b221d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
            aspect-ratio="2"
          >
            <p>Crear entrenamiento personalizado</p>
          </v-img>
          <v-img
            src="https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80"
            aspect-ratio="2"
          >
            <p>Ejercicios individuales</p>
          </v-img>
        </v-col>
      </v-row>
      <Bottom-Nav />
    </v-container>
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
  background-color: #262626;
  max-height: 100vh;
  min-height: 100vh;
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
  }
}
.myWorkouts {
  height: 220px;
  background-color: #ffcb15;
}
</style>
