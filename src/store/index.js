import { createStore } from "vuex";
import auth from "./modules/auth.js";
import appointments from "./modules/appointments";
import register from "./modules/register";
import appointmentFlow from "./modules/appointment-flow.js";

const store = createStore({
  modules: {
    auth,
    appointments,
    register,
    appointmentFlow,
  },

  state: {},

  mutations: {},

  actions: {},

  getters: {},
});

export default store;
