<template>
  <div>
    <v-container class="structure">
      <v-row class="main">
        <v-col>
          <h1 id="brand">
            FOR
            <span id="eight">8</span>
          </h1>
          <!-- <h4>
            Ponte en forma en ocho semanas.
          </h4> -->
        </v-col>
      </v-row>
      <v-row class="buttons">
        <v-col>
          <router-link to="/signup">
            <v-btn x-large color="#FFCB15" dark block>Regístrate gratis</v-btn>
          </router-link>
          <router-link to="/login">
            <v-btn text x-large color="white" block>Iniciar sesión</v-btn>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {}
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
  }
  h4 {
    width: 90%;
    margin: 5% auto;
  }
}
#brand {
  font-family: "Russo One", sans-serif;
  color: white;
  font-size: 48px;
  #eight {
    color: #ffcb15;
  }
}
.main {
  margin-top: 50%;
}
.buttons {
  position: fixed;
  width: 100%;
  margin-bottom: 40px;
  padding: 10px;
  bottom: 0;
}
</style>
