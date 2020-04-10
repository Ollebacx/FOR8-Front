import axios from "axios";

const API = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  async signup(newUser) {
    const response = await API.post("/auth/signup", {
      ...newUser
    });
    return response.data;
  },
  async login(logUser) {
    const response = await API.post("/auth/login", {
      ...logUser
    });
    return response.data;
  },
  async getTemplateWorkouts() {
    const response = await API.get("/workouts", {
      headers: {
        token: localStorage.getItem("token")
      }
    });
    return response.data;
  },
  async WorkoutById(workoutId) {
    const response = await API.get(`/workouts/${workoutId}`, {
      headers: {
        token: localStorage.getItem("token")
      }
    });
    return response.data;
  },
  async getExercises() {
    const response = await API.get("/exercises", {
      headers: {
        token: localStorage.getItem("token")
      }
    });
    return response.data;
  },
  async logWorkout(newWorkout) {
    const response = await API.post(
      "/me/workoutsLog",
      {
        ...newWorkout
      },
      {
        headers: {
          token: localStorage.getItem("token")
        }
      }
    );
    return response.data;
  },
  async createWorkout(userWorkout) {
    const response = await API.post(
      "/me/workouts",
      {
        ...userWorkout
      },
      {
        headers: {
          token: localStorage.getItem("token")
        }
      }
    );
    return response.data;
  }
};
