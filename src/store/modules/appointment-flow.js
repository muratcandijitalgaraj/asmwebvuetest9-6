import authAxios from "../../utils/authAxios";
import appAxios from "../../utils/appAxios";
import auth from "./auth";
import qs from "qs";
import store from "../index";

export default {
  namespaced: true,

  state: {
    section: 3,
    userNote: "",
    userChoices: {
      hospital: "",
      clinic: "",
      doctor: "",
    },
    hospitalName: "Test Hastane İsmi",
    clinicName: "",
    doctorName: "",
  },

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
    getUserNote(state, payload) {
      state.userNote = payload;
    },

    setHospitalName(state, payload) {
      state.hospitalName = payload;
    },
    setClinicName(state, payload) {
      state.clinicName = payload;
    },
    setDoctorName(state, payload) {
      state.doctorName = payload;
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
    //this one returns only one item
    async getHospitals() {
      await store.dispatch("auth/checkRefreshToken");
      let token = store.getters["auth/_token"];
      appAxios.defaults.headers.common["Authorization"] = "Bearer " + token;
      return await appAxios.get(
        "endpoint/resource-service/facilities?facilityId=3a029fc2-135c-0e05-2d77-d817861825d8/tenants"
      );
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
    //will use this to choose an appointment to develop on randevu özet page
    //normal workflow will be different I guess
    async getAppointments() {
      await store.dispatch("auth/checkRefreshToken");
      let token = store.getters["auth/_token"];
      let profileID = store.getters["auth/_profile_id"];
      appAxios.defaults.headers.common["Authorization"] = "Bearer " + token;
      //return await appAxios.get('endpoint/timeline-service/visits/?facilityId=3a029fc2-135c-0e05-2d77-d817861825d8')
      return await appAxios.get(
        "endpoint/appointment-service/appointments/?facilityId=3a029fc2-135c-0e05-2d77-d817861825d8"
      );
      //return await appAxios.get('endpoint/profile-service/profile')
    },
  },

  // doktor endpoint =>         "endpoint/resource-service/resources/filter?facilityId=3a029fc2-135c-0e05-2d77-d817861825d8"

  getters: {
    _getHospitalName: (state) => state.hospitalName,
  },
};
