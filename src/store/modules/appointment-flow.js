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
    hospitalName: "",
    clinicName: "",
    doctorName: "",
    hospitalId: "",
    clinicId: "",
    doctorId: "",
    flowToken: 1,
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
    setHospitalId(state, payload) {
      state.hospitalId = payload;
    },
    setClinicId(state, payload) {
      state.clinicId = payload;
    },
    setDoctorId(state, payload) {
      state.doctorId = payload;
    },
    setFlowToken(state, payload) {
      state.flowToken = payload;
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
    // async getPhysicianSlots() {
    //   await store.dispatch("auth/checkRefreshToken");
    //   let token = store.getters["auth/_token"];
    //   appAxios.defaults.headers.common["Authorization"] = "Bearer " + token;
    //   return await appAxios.get(
    //     `endpoint/appointment-service/calendars/physician-slots?departmentId=751&physicianId=2549&facilityId=3a029fc2-135c-0e05-2d77-d817861825d8&tenantId=1&appointmentType=1&from=1964-06-20T13:02:18.328Z&to=1964-06-20T13:02:18.328Z`
    //   );
    // },

    async getPhysicianSlots(clinicId, doctorId, hospitalId) {
      await store.dispatch("auth/checkRefreshToken");
      let token = store.getters["auth/_token"];
      appAxios.defaults.headers.common["Authorization"] = "Bearer " + token;
      return await appAxios.get(
        `endpoint/appointment-service/calendars/physician-slots?departmentId=${clinicId}&physicianId=${doctorId}&facilityId=3a029fc2-135c-0e05-2d77-d817861825d8&tenantId=${hospitalId}&appointmentType=1&from=1964-06-20T13:02:18.328Z&to=1964-06-20T13:02:18.328Z`
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
    _getClinicName: (state) => state.clinicName,
    _getDoctorName: (state) => state.doctorName,
    _getHospitalId: (state) => state.hospitalId,
    _getClinicId: (state) => state.clinicId,
    _getDoctorId: (state) => state.doctorId,
    _getFlowToken: (state) => state.flowToken,
  },
};
