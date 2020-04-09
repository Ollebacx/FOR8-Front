<template>
  <div>
    <v-card class="mx-auto mt-2 mb-1" max-width="380" outlined color="#262626">
      <router-link :to="`/workouts/${workoutInfo._id}`">
        <v-list-item three-line>
          <v-list-item-avatar tile size="80px"
            ><img
              :src="workoutInfo.photo_url"
              alt=""
              id="img"
              height="100%"
              cover
          /></v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title mb-1">{{
              workoutInfo.name
            }}</v-list-item-title>
            <v-list-item-subtitle class="subtitle-2">{{
              workoutInfo.description
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider class="grey mx-4"></v-divider>
      </router-link>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "CardWorkout",
  data: () => ({}),
  props: {
    workoutInfo: Object
  }
};
</script>

<style lang="scss" scoped>
* {
  color: white !important;
  text-decoration-line: none;
}
</style>
