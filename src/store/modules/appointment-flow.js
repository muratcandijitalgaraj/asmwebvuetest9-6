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
    dropdownClinicData: [],
    dropdownTenantData: "",
    departmentsWithIdOf1: [],
    departmentsWithIdOf8: [],
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
    setDropdownClinicData(state, payload) {
      state.dropdownClinicData = payload;
    },
    setDropdownTenantData(state, payload) {
      state.dropdownTenantData = payload;
    },
    setDepartmentsWithIdOf1(state, payload) {
      state.departmentsWithIdOf1 = payload;
    },
    setDepartmentsWithIdOf8(state, payload) {
      state.departmentsWithIdOf8 = payload;
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

    async getPhysicianSlots() {
      await store.dispatch("auth/checkRefreshToken");
      let token = store.getters["auth/_token"];
      let clinicId = store.getters["appointmentFlow/_getClinicId"];
      let doctorId = store.getters["appointmentFlow/_getDoctorId"];
      let hospitalId = store.getters["appointmentFlow/_getHospitalId"];
      appAxios.defaults.headers.common["Authorization"] = "Bearer " + token;
      return await appAxios.get(
        `endpoint/appointment-service/calendars/physician-slots?departmentId=${clinicId}&physicianId=${doctorId}&facilityId=3a029fc2-135c-0e05-2d77-d817861825d8&tenantId=${hospitalId}&appointmentType=1&from=${new Date().toISOString()}&to=${new Date(
          new Date().setDate(new Date().getDate() + 31)
        ).toISOString()}`
      );
    },
    async filterDoctorsByDepartment() {
      await store.dispatch("auth/checkRefreshToken");
      let token = store.getters["auth/_token"];
      let clinicId = store.getters["appointmentFlow/_getClinicId"];

      appAxios.defaults.headers.common["Authorization"] = "Bearer " + token;
      return await appAxios.get(
        "endpoint/resource-service/resources/filter?facilityId=3a029fc2-135c-0e05-2d77-d817861825d8" +
          "&departmentId=" +
          clinicId
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
    _getDropdownClinicData: (state) => state.dropdownClinicData,
    _getDropdownTenantData: (state) => state.dropdownTenantData,
    _getDepartmentsWithIdOf1: (state) => state.departmentsWithIdOf1,
    _getDepartmentsWithIdOf8: (state) => state.departmentsWithIdOf8,
  },
};
