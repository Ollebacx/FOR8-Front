<template>
  <div>
    <!-- Rounds Counter -->
    <v-sheet dark class="rounds" color="#262626" tile width="100%" height="40px"
      ><v-icon color="white">mdi-chevron-left</v-icon>
      <span>Rondas: {{ rounds }}</span>
      <v-icon color="white">mdi-chevron-right</v-icon>
    </v-sheet>
    <div id="timer">
      <span id="minutes">{{ minutes }}</span>
      <span id="middle">:</span>
      <span id="seconds">{{ seconds }}</span>
    </div>

    <div id="buttons">
      <!--     Start TImer -->
      <v-btn tile large block color="#FFCB15" v-if="!timer" @click="startTimer">
        <h3>EMPEZAR</h3></v-btn
      >
      <!--     Pause Timer -->
      <v-btn tile large block color="red" dark v-if="timer" @click="stopTimer">
        <h3>PARAR</h3>
      </v-btn>
      <!--     Restart Timer -->
      <v-btn
        tile
        large
        block
        color="#CCCCCC"
        v-if="resetButton"
        @click="resetTimer"
      >
        <h3>RESET</h3>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "Timer",
  data: function() {
    return {
      timer: null,
      totalTime: this.rounds * 8 * 60,
      resetButton: false
    };
  },
  props: {
    rounds: Number
  },
  methods: {
    startTimer: function() {
      this.timer = setInterval(() => this.countdown(), 1000);
      this.resetButton = true;
    },
    stopTimer: function() {
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = true;
    },
    resetTimer: function() {
      this.totalTime = this.rounds * 8 * 60;
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = false;
    },
    padTime: function(time) {
      return (time < 10 ? "0" : "") + time;
    },
    countdown: function() {
      if (this.totalTime >= 1) {
        this.totalTime--;
      } else {
        this.totalTime = 0;
        this.resetTimer();
      }
    }
  },
  computed: {
    minutes: function() {
      const minutes = Math.floor(this.totalTime / 60);
      return this.padTime(minutes);
    },
    seconds: function() {
      const seconds = this.totalTime - this.minutes * 60;
      return this.padTime(seconds);
    }
  }
};
</script>

<style lang="scss" scoped>
#timer {
  font-size: 120px;
  font-family: "Russo One", sans-serif;
  text-align: center;
  line-height: 100px;
  margin-bottom: 40px;
}
.rounds {
  text-align: center;
  line-height: 40px;
  margin: 10px 0px;
  span {
    font-size: 16px;
    font-weight: 700;
    margin: 0px 15px;
  }
}
</style>
