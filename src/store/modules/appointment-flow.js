import authAxios from "../../utils/authAxios";
import appAxios from "../../utils/appAxios";
import auth from "./auth";
import qs from "qs";
import store from "../index";

export default {
  namespaced: true,

  state: { section: "lool" },

  mutations: {
    showHospitals(state) {
      // mutate state
      state.section = 3;
    },
  },

  actions: {
    async getUser() {
      await store.dispatch("auth/checkRefreshToken");
      let token = store.getters["auth/_token"];
      appAxios.defaults.headers.common["Authorization"] = "Bearer " + token;
      return await appAxios.get("endpoint/profile-service/profile");
      // .then((res) => {
      //   console.log(res.data);
      // });
    },

    async getHospitals() {
      await store.dispatch("auth/checkRefreshToken");
      let token = store.getters["auth/_token"];
      appAxios.defaults.headers.common["Authorization"] = "Bearer " + token;
      return await appAxios.get("endpoint/resource-service/facilities");
    },
  },

  getters: {},
};
