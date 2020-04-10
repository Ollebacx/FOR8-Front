<template>
  <div>
    <v-row class="message">
      <v-overlay :value="overlay" opacity="0.9">
        <span>
          ¡Enhorabuena! <br />
          Has terminado tu workout de hoy. <br />
          Recuerda estirar y mantenerte hidratado después de cada sesión. <br />
        </span>
        <router-link to="/workouts"
          ><v-btn class="btn" x-large color="success" @click="overlay = false">
            Ok
          </v-btn></router-link
        >
      </v-overlay>
    </v-row>
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
      totalTime: 5 * 1,
      resetButton: false,
      overlay: false,
      zIndex: 0
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
      this.totalTime = 8 * 60 * this.rounds;
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
        this.$emit("logworkout");
        this.resetTimer();
        this.overlay = !this.overlay;
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
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
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
