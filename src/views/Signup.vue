<template>
  <div>
    <v-app-bar fixed color="#262626" dense dark>
      <v-btn icon>
        <router-link to="/">
          <v-icon>mdi-arrow-left</v-icon>
        </router-link>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title>Crear cuenta</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon></v-icon>
      </v-btn>
    </v-app-bar>
    <v-container>
      <v-row class="content">
        <v-col>
          <h3>¿Cómo te llamas?</h3>
          <v-text-field
            label="Name"
            v-model="name"
            :placeholder="name_placeholder"
            :rules="userRules"
            :outlined="outlined"
            :solo="solo"
            :clearable="clearable"
          ></v-text-field>

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

          <h3>Escribe una contraseña:</h3>
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
          <v-row class="btn">
            <v-col>
              <v-btn large color="#AAAAAA" @click="signup">Siguiente</v-btn>
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
  name: "Signup",
  data: () => ({
    name: "Nestor",
    name_placeholder: " ",
    userRules: [v => !!v || "El nombre es obligatorio"],
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
    signup() {
      const newUser = {
        name: this.name,
        email: this.email,
        password: this.password
      };

      APIServices.signup(newUser)
        .then(response => {
          localStorage.setItem("token", response.token);
          this.$router.push("/workouts");
        })
        .catch(alert("Esta cuenta ya existe"));
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
</style>
