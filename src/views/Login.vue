<template>
  <div>
    <v-app-bar fixed color="#262626" dense dark>
      <v-btn icon>
        <router-link to="/">
          <v-icon>mdi-arrow-left</v-icon>
        </router-link>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title>Login</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon></v-icon>
      </v-btn>
    </v-app-bar>
    <v-container>
      <v-row class="content">
        <v-col>
          <h3>¿Cuál es tu cuenta de correo electrónico?</h3>
          <v-text-field
            label="E-mail"
            v-model="email"
            :placeholder="email_placeholder"
            :rules="emailRules"
            :outlined="outlined"
            :solo="solo"
            :clearable="clearable"
          ></v-text-field>

          <h3>Introduce tu contraseña:</h3>
          <v-text-field
            label="Password"
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            :rules="passwordRule"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            :outlined="outlined"
            :solo="solo"
          ></v-text-field>
          <div id="err" v-if="userInvalid">Usuario no válido</div>
          <v-row class="btn">
            <v-col>
              <v-btn large color="#AAAAAA" @click="login">Siguiente</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import APIServices from "../services/Api";

export default {
  name: "Password",
  data: () => ({
    userInvalid: false,
    email: "ejemplo@email.com",
    email_placeholder: "ejemplo@email.com",
    emailRules: [
      v => !!v || "Introducir la cuenta de correo electrónico es obligatorio",
      v => /.+@.+\..+/.test(v) || "Formato incorrecto"
    ],
    showPassword: false,
    password: "123456789N",
    passwordRule: [
      v => !!v || "La contraseña es obligatoria",
      v =>
        v.length >= 10 || "La contraseña debe contener al menos 10 carácteres"
    ],
    outlined: true,
    solo: true,
    clearable: true
  }),
  methods: {
    login() {
      const logUser = {
        email: this.email,
        password: this.password
      };

      APIServices.login(logUser)
        .then(response => {
          if (response.error) {
            this.userInvalid = true;
          } else {
            localStorage.setItem("token", response.token);
            localStorage.setItem("id", response.id);
            this.$router.push("/workouts");
          }
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  color: white !important;
  text-decoration-line: none;
  font-family: "Montserrat", sans-serif;
}
h3 {
  margin: 10px auto;
}
.content {
  width: 90%;
  margin: auto;
  text-align: left;
  margin-top: 40px;
  .btn {
    text-align: right !important;
  }
}
#err {
  color: red;
}
</style>
