import authAxios from "../../utils/authAxios";
import appAxios from "../../utils/appAxios";
import auth from "./auth";
import qs from "qs";
import store from "../index";

export default {
  namespaced: true,

  state: { section: 3 },

  mutations: {
    switchContent(state, payload) {
      if (payload === "Bölüm") {
        state.section = 1;
      } else if (payload === "Doktor") {
        state.section = 2;
      } else if (payload === "Hastane") {
        state.section = 3;
      }
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
    async getClinics() {
      await store.dispatch("auth/checkRefreshToken");
      let token = store.getters["auth/_token"];
      appAxios.defaults.headers.common["Authorization"] = "Bearer " + token;
      return await appAxios.get(
        "endpoint/resource-service/departments/filter?facilityId=3a029fc2-135c-0e05-2d77-d817861825d8"
      );
    },
    async getDoctors() {
      await store.dispatch("auth/checkRefreshToken");
      let token = store.getters["auth/_token"];
      appAxios.defaults.headers.common["Authorization"] = "Bearer " + token;
      return await appAxios.get(
        "endpoint/resource-service/resources/filter?facilityId=3a029fc2-135c-0e05-2d77-d817861825d8"
      );
    },
  },

  // doktor endpoint =>         "endpoint/resource-service/resources/filter?facilityId=3a029fc2-135c-0e05-2d77-d817861825d8"

  getters: {},
};
