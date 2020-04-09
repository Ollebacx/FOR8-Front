<template>
  <div>
    <v-card class="mx-auto mt-2 mb-1" max-width="344" outlined color="#262626">
      <v-list-item three-line>
        <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1"
            >Headline 5</v-list-item-title
          >
          <v-list-item-subtitle
            >Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
    </v-card>
    <v-divider class="mx-4"></v-divider>
  </div>
</template>

<script>
export default {
  name: "CardWorkout",
  data: () => ({}),
  props: {}
};
</script>

<style lang="scss" scoped>
* {
  color: white !important;
}
</style>
