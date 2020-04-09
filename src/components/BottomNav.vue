<template>
  <v-bottom-navigation :value="activeBtn" grow color="white" dark fixed bottom>
    <v-btn>
      <span>Inicio</span>
      <v-icon>mdi-home-variant</v-icon>
    </v-btn>

    <v-btn>
      <span>Workouts</span>
      <v-icon>mdi-dumbbell</v-icon>
    </v-btn>

    <v-btn>
      <span>Actividad</span>
      <v-icon>mdi-poll</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "BottomNav",
  data() {
    return {
      activeBtn: 1
    };
  }
};
</script>
