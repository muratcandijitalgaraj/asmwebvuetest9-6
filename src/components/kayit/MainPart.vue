<template>
  <div class="mainKayitComponent">
    <div class="container">
      <div class="upperSection">
        <div class="title">Hesap Oluştur</div>
        <div class="sections">
          <!-- section 1 -->
          <div class="section" id="section-1">
            <div
              v-bind:class="{
                currentSection: oneIsCurrent,
                sectionOnHold: oneIsOnHold,
                checked: isChecked,
              }"
            >
              <div v-if="one" class="currentSection">1</div>
              <div v-if="!one" class="vectorContainer">
                <img
                  src="../../assets/img//kayit/vector.svg"
                  alt=""
                  class="sectionChecked"
                />
              </div>
            </div>
          </div>
          <img src="../../assets/img//kayit/dots.svg" alt="" class="dots" />
          <!-- section 2 -->
          <div class="section" id="section-2">
            <div v-if="two" class="currentSection">2</div>
            <div v-else-if="one" class="sectionOnHold">2</div>
            <div v-else class="vectorContainer">
              <img
                src="../../assets/img//kayit/vector.svg"
                alt=""
                class="sectionChecked"
              />
            </div>
          </div>
          <img src="../../assets/img//kayit/dots.svg" alt="" class="dots" />
          <!-- section 3 -->
          <div class="section" id="section-3">
            <div v-if="three" class="currentSection">3</div>
            <div v-else-if="one" class="sectionOnHold">3</div>
            <div v-else-if="two" class="sectionOnHold">3</div>
            <div v-else class="vectorContainer">
              <img
                src="../../assets/img//kayit/vector.svg"
                alt=""
                class="sectionChecked"
              />
            </div>
            <!-- <div class="sectionOnHold">3</div> -->
          </div>
        </div>
      </div>
      <!-- ONE -->
      <div v-if="one" class="ONE">
        <!-- box -->
        <form class="box">
          <input
            v-model="stepOne.email"
            placeholder="E-posta"
            type="text"
            class="input"
            :class="{ 'is-invalid': stepOneValidate.email.$errors.length }"
          />

          <div
            v-for="error in stepOneValidate.email.$errors"
            :key="error.$uid"
            class="invalid-feedback"
          >
            {{ error.$message }}
          </div>
          <input
            v-model="stepOne.password"
            placeholder="Şifreniz"
            type="password"
            class="input"
            :class="{ 'is-invalid': stepOneValidate.password.$errors.length }"
          />
          <div
            v-for="error in stepOneValidate.password.$errors"
            :key="error.$uid"
            class="invalid-feedback"
          >
            {{ error.$message }}
          </div>
          <input
            v-model="stepOne.passwordRepeated"
            placeholder="Şifreniz (tekrar)"
            type="password"
            class="input"
            :class="{
              'is-invalid': stepOneValidate.passwordRepeated.$errors.length,
            }"
          />
          <div
            v-for="error in stepOneValidate.passwordRepeated.$errors"
            :key="error.$uid"
            class="invalid-feedback"
          >
            {{ error.$message }}
          </div>
          <button @click="buttonOne" id="buttonOne" class="button">
            <span class="buttonText">Devam</span>
          </button>
          <!-- <input v-model="message" placeholder="add multiple lines"></input> -->
        </form>
      </div>

      <!-- TWO -->
      <div v-if="two" class="TWO">
        <form action="" class="box">
          <div class="nationalityPart">
            <div>
              <select
                v-model="stepTwo.uyruk"
                @click="writeUyruk"
                class="uyruk"
                :class="{ 'is-invalid': stepTwoValidate.uyruk.$errors.length }"
              >
                <option class="optionValue" value="">Uyruk</option>
                <option
                  v-for="(item, key) in countries"
                  :key="key"
                  class="optionValue"
                  :value="item.id"
                >
                  {{ item.attributes.abbr }}
                </option>
              </select>
              <div
                v-for="error in stepTwoValidate.uyruk.$errors"
                :key="error.$uid"
                class="invalid-feedback"
              >
                {{ error.$message }}
              </div>
            </div>
            <div>
              <input
                v-model="stepTwo.tcNo"
                placeholder="T.C. Kimlik Numarası"
                type="text"
                class="tcNo"
                :class="{ 'is-invalid': stepTwoValidate.tcNo.$errors.length }"
              />
              <div
                v-for="error in stepTwoValidate.tcNo.$errors"
                :key="error.$uid"
                class="invalid-feedback"
              >
                {{ error.$message }}
              </div>
            </div>
          </div>
          <input
            v-model="stepTwo.name"
            placeholder="İsim"
            type="text"
            class="input"
            :class="{ 'is-invalid': stepTwoValidate.name.$errors.length }"
          />
          <div
            v-for="error in stepTwoValidate.name.$errors"
            :key="error.$uid"
            class="invalid-feedback"
          >
            {{ error.$message }}
          </div>
          <input
            v-model="stepTwo.surname"
            placeholder="Soyisim"
            type="text"
            class="input"
            :class="{ 'is-invalid': stepTwoValidate.surname.$errors.length }"
          />
          <div
            v-for="error in stepTwoValidate.surname.$errors"
            :key="error.$uid"
            class="invalid-feedback"
          >
            {{ error.$message }}
          </div>
          <!--///////// DATE PICKER HERE ///////////////////////////// -->
          <Datepicker
            placeholder="Doğum Tarihi (GG/AA/YYYY)"
            class="picker"
            :class="{ 'is-invalid': stepTwoValidate.date.$errors.length }"
            v-model="date"
            :format="format"
            autoApply
            locale="tr"
            :autoPosition="false"
            :start-date="startDate"
          />
          <div
            v-for="error in stepTwoValidate.date.$errors"
            :key="error.$uid"
            class="invalid-feedback"
          >
            {{ error.$message }}
          </div>

          <select
            v-model="stepTwo.gender"
            class="dropDownSelect"
            :class="{ 'is-invalid': stepTwoValidate.gender.$errors.length }"
          >
            <option class="optionValue" value="">Cinsiyet</option>
            <option class="optionValue" value="1">Erkek</option>
            <option class="optionValue" value="2">Kadın</option>
          </select>
          <div
            v-for="error in stepTwoValidate.gender.$errors"
            :key="error.$uid"
            class="invalid-feedback"
          >
            {{ error.$message }}
          </div>
          <button @click="buttonTwo" id="buttonTwo" class="button">
            <span class="buttonText">Devam</span>
          </button>
        </form>
      </div>

      <!-- THREE -->
      <div v-if="three" class="THREE">
        <form action="" class="box">
          <div @click="ppUpload" class="profilFotoContainer">
            <div class="uploadImageGroupContainer">
              <img
                src="../../assets/img//kayit/ppGroup.svg"
                alt=""
                class="uploadImageGroup"
              />
            </div>
            <div class="fileInputContainer">
              <img
                src="../../assets/img//kayit/ppUpload.svg"
                alt=""
                class="ppUploadLogo"
              />
              <div class="fileUploadPara">Profil Fotoğrafını Değiştir</div>
              <!-- this is hidden -->
              <input
                type="file"
                accept="image/png, image/jpeg"
                class="fileInput"
                ref="fileInput"
              />
            </div>
          </div>
          <select
            v-model="stepThree.country"
            @change="setCity"
            class="dropDownSelect"
            :class="{ 'is-invalid': stepThreeValidate.country.$errors.length }"
          >
            <option class="optionValue" value="">Ülke</option>
            <option
              v-for="(item, key) in countries"
              :key="key"
              class="optionValue"
              :value="item.id"
            >
              {{ item.title }}
            </option>
          </select>
          <div
            v-for="error in stepThreeValidate.country.$errors"
            :key="error.$uid"
            class="invalid-feedback"
          >
            {{ error.$message }}
          </div>
          <select
            v-model="stepThree.city"
            @change="setRegion"
            class="dropDownSelect"
            :class="{ 'is-invalid': stepThreeValidate.city.$errors.length }"
          >
            <option class="optionValue" value="">Şehir</option>
            <option
              v-for="(item, key) in cities"
              :key="key"
              class="optionValue"
              :value="item.id"
            >
              {{ item.title }}
            </option>
          </select>
          <div
            v-for="error in stepThreeValidate.city.$errors"
            :key="error.$uid"
            class="invalid-feedback"
          >
            {{ error.$message }}
          </div>
          <select
            v-model="stepThree.region"
            class="dropDownSelect"
            :class="{ 'is-invalid': stepThreeValidate.region.$errors.length }"
          >
            <option class="optionValue" value="">İlçe</option>
            <option
              v-for="(item, key) in regions"
              :key="key"
              class="optionValue"
              :value="item.id"
            >
              {{ item.title }}
            </option>
          </select>
          <div
            v-for="error in stepThreeValidate.region.$errors"
            :key="error.$uid"
            class="invalid-feedback"
          >
            {{ error.$message }}
          </div>
          <button @click="buttonThree" id="buttonThree" class="button">
            <span class="buttonText">Devam</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive, computed } from "vue";
import Datepicker from "vue3-date-time-picker";
import "vue3-date-time-picker/dist/main.css";
import store from "../../store";
import useVuelidate from "@vuelidate/core";
import Swal from "sweetalert2/dist/sweetalert2.js";
import {
  required,
  email,
  minLength,
  maxLength,
  sameAs,
  helpers,
} from "@vuelidate/validators";
import { useRouter, useRoute } from "vue-router";
import moment from "moment";

const router = useRouter();
const route = useRoute();

const format = (dateObj) => {
  const date = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();

  let formatDate = moment(dateObj.toISOString()).format("DD/MM/YYYY");
  stepTwo.date = formatDate;
  return formatDate;
};
const startDate = ref(new Date(1985, 0, 1));

const date = ref("");

let one = ref(true);
let two = ref(false);
let three = ref(false);
//toggle
let oneIsCurrent = ref(true);
let oneIsOnHold = ref(false);
let isChecked = ref(false);
//date
// date: null,
//user inputs
//section One

const stepOne = reactive({
  email: null,
  password: null,
  passwordRepeated: null,
});

const stepTwo = reactive({
  uyruk: "",
  tcNo: null,
  name: null,
  date: null,
  surname: null,
  gender: "",
});

const stepThree = reactive({
  country: "",
  city: "",
  region: "",
});

const passwordMatch = (value) => {
  console.log(value, stepOne.password);
  const match = stepOne.password === value ? true : false;
  console.log(match);
  return match;
};

const stepOneRules = computed(() => ({
  email: {
    required: helpers.withMessage("Email zorunlu bir alandır.", required),
    email: helpers.withMessage("Email geçerli bir email olmaldır.", email),
  },
  password: {
    required: helpers.withMessage("Şifre zorunlu bir alandır.", required),
    minlength: helpers.withMessage("Şifre 6 haneli olmalıdır.", minLength(6)),
    maxlength: helpers.withMessage("Şifre 6 haneli olmalıdır.", maxLength(6)),
  },
  passwordRepeated: {
    required: helpers.withMessage(
      "Şifreniz(tekrar) zorunlu bir alandır.",
      required
    ),
    sameAs: helpers.withMessage(
      "Şifreniz(tekrar) Şifre ile uyuşmuyor.",
      sameAs(stepOne.password)
    ),
  },
}));

const stepTwoRules = computed(() => ({
  uyruk: {
    required: helpers.withMessage("Uyruk zorunlu bir alandır.", required),
  },
  tcNo: {
    required: helpers.withMessage(
      "T.C. Kimlik Numarası zorunlu bir alandır.",
      required
    ),
    minlength: helpers.withMessage(
      "T.C. Kimlik Numarası 11 haneli olmalıdır.",
      minLength(11)
    ),
    maxlength: helpers.withMessage(
      "T.C. Kimlik Numarası 11 haneli olmalıdır.",
      maxLength(11)
    ),
  },
  name: {
    required: helpers.withMessage("İsim zorunlu bir alandır.", required),
    minlength: helpers.withMessage(
      "İsim en az 3 haneli olmalıdır.",
      minLength(3)
    ),
  },
  surname: {
    required: helpers.withMessage("Soyisim zorunlu bir alandır.", required),
    minlength: helpers.withMessage(
      "Soyisim en az 3 haneli olmalıdır.",
      minLength(3)
    ),
  },
  date: {
    required: helpers.withMessage(
      "Doğum Tarihi zorunlu bir alandır.",
      required
    ),
  },
  gender: {
    required: helpers.withMessage("Cinsiyet zorunlu bir alandır.", required),
  },
}));

const stepThreeRules = computed(() => ({
  country: {
    required: helpers.withMessage("Ülke zorunlu bir alandır.", required),
  },
  city: {
    required: helpers.withMessage("Şehir zorunlu bir alandır.", required),
  },
  region: {
    required: helpers.withMessage("İlçe zorunlu bir alandır.", required),
  },
}));

const stepOneValidate = useVuelidate(stepOneRules, stepOne);
const stepTwoValidate = useVuelidate(stepTwoRules, stepTwo);
const stepThreeValidate = useVuelidate(stepThreeRules, stepThree);

const buttonOne = async (e) => {
  e.preventDefault();
  const stepOneIsValid = await stepOneValidate.value.$validate();

  if (!stepOneIsValid) return;

  one.value = false;
  two.value = true;
  //toggle
  oneIsCurrent.value = false;
  isChecked.value = true;

  //ülkeler çekiliyor
  await store
    .dispatch("register/getCountry")
    .then((res) => {
      //gelen ülkelerin abbr kodunu vfor ile uyruk selectine bağlanacak.
      console.log(res.data[0].items);
      countries.value = res.data[0].items;
    })
    .catch((err) => {
      console.log(err);
    });
};

const countries = ref(null);
const cities = ref(null);
const regions = ref(null);

//get cities form the API
const getCities = async (e) => {
  await store
    .dispatch("register/getCity", stepThree.country)
    .then((res) => {
      console.log(res.data.items);
      cities.value = res.data.items;
    })
    .catch((err) => {
      console.log(err);
    });
};

const getRegion = async (e) => {
  await store
    .dispatch("register/getRegion", stepThree.city)
    .then((res) => {
      console.log(res.data.items);
      regions.value = res.data.items;
    })
    .catch((err) => {
      console.log(err);
    });
};

const buttonTwo = async (e) => {
  e.preventDefault();

  const stepTwoIsValid = await stepTwoValidate.value.$validate();

  if (!stepTwoIsValid) return;

  one.value = false;
  two.value = false;
  three.value = true;
};

const setCity = async () => {
  cities.value = "";
  regions.value = "";
  await getCities();
};

const setRegion = async () => {
  regions.value = "";
  await getRegion();
};

const buttonThree = async (e) => {
  e.preventDefault();
  const stepThreeIsValid = await stepThreeValidate.value.$validate();
  if (!stepThreeIsValid) return;

  store.commit("register/setCredentials", {
    email: stepOne.email,
    password: stepOne.password,
    uyruk: stepTwo.uyruk,
    tcNo: stepTwo.tcNo,
    name: stepTwo.name,
    date: stepTwo.date,
    surname: stepTwo.surname,
    gender: stepTwo.gender,
    country: stepThree.country,
    city: stepThree.city,
    region: stepThree.region,
  });
  store
    .dispatch("register/registerUser")
    .then((res) => {
      new Swal({
        icon: "success",
        title:
          "Üyelik işleminiz başarılı bir şekilde tamamlandı.<br> Giriş yapabilirsiniz.",
        showConfirmButton: true,
        timer: 3000,
        confirmButtonText: "Tamam",
      }).then((isConfirm) => {
        router.push({ name: "Giris" });
      });
      console.log(res);
    })
    .catch((err) => {
      new Swal({
        icon: "error",
        title:
          "Üyelik işleminiz sırasında bir hata oluştu. <br> Lütfen daha sonra tekrar deneyiniz.",
        showConfirmButton: true,
        timer: 3000,
        confirmButtonText: "Tamam",
      }).then(() => {
        router.push({ name: "Giris" });
      });
      console.log(err.response);
    });
};

//this doesn't work anymore since I changed to script setup
const ppUpload = function () {
  //$refs.fileInput.click();
};
// this function is just for test purposes
const writeUyruk = function () {
  console.log(stepTwo.uyruk);
  //denemeler
};

onMounted(() => {});
</script>

<style>
.mainKayitComponent {
  position: relative;
  bottom: 12rem;
  height: 423px;
  /* width: 468px; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
}
.container {
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.upperSection {
  width: auto;
  height: 5.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 53px;
  padding: 0;
}
.sections {
}
.ONE {
  width: 468px;
  height: 400px;
  /* display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center; */
}
.title {
  width: 146px;
  height: 29px;

  /* baslik3 */

  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 130%;
  /* identical to box height, or 29px */

  text-align: center;

  /* Beyaz */

  color: #ffffff;
  margin-bottom: 18px;
}
.sections {
  width: auto;
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.dots {
  height: 3px;
  width: 21px;
  border-radius: 0px;
  margin-right: 9px;
}
.section {
  height: 23px;
  width: 23px;
  border-radius: 0px;
  margin-right: 8px;
}
#section-1 {
}
.currentSection {
  width: 25px;
  height: 25px;

  /* Primary */

  background: #3c4e69;
  /* Form Shadow */

  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.03);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  /* text4-bold */

  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 130%;
  /* or 17px */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.01em;

  /* Beyaz */

  color: #ffffff;
}
.sectionOnHold {
  color: #3c4e69;
  border: 1.5px solid #3c4e69;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* .sectionNumber {
  display: none;
} */
.vectorContainer {
  height: 23px;
  width: 23px;
  background: #ff8038;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sectionChecked {
  height: 8px;
  width: 11px;
}
/* .checked {
  height: 100%;
  width: 100%;
  background-color: orange;
} */
.box {
  /* height: 423px; */
  width: 468px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
input {
  width: 468px;
  height: 60px;

  background: #ffffff;

  border-radius: 6px;
  margin-bottom: 20px;
  border: none;

  /* form-baslik */
  /* form-text */

  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 100%;
  /* identical to box height, or 16px */
  /* Primary */
  color: #3c4e69;
}

.picker {
  width: 468px;
  height: 60px;
  background: #ffffff;

  border-radius: 6px;
  margin-bottom: 20px;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 100%;
  /* identical to box height, or 16px */
  /* Primary */
  color: #3c4e69;
}
.dp__pointer,
.dp__input,
.dp__input_icon_pad {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 100%;
  /* identical to box height, or 16px */
  /* Primary */
  color: #3c4e69;
  border: none !important;
  padding: 0 12px 0 35px;
}
.dp__icon,
.dp__input_icon,
.dp__input_icons {
  /* border: 2px solid red; */
  padding-bottom: 1.8rem;
}
/* to style the placeholder separately from the input text */
input::placeholder {
  /* form-baslik */
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 100%;
  /* identical to box height, or 16px */
  letter-spacing: -0.01em;
  /* Gri */
  color: #818b9a;
  padding-left: 15px;
  padding-bottom: 5px;
}

.button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 20px 11px;
  width: 468px;
  height: 50px;
  /* Turuncu */
  background: #ff8038;
  border-radius: 6px;
  border: none;
}
.buttonText {
  width: 53px;
  height: 18px;
  /* buton-text-orta */
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 110%;
  /* identical to box height, or 18px */
  display: flex;
  align-items: center;
  text-align: center;
  /* Beyaz */
  color: #ffffff;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;
}
#buttonOne {
}

.Two {
  display: flex;
}
.nationalityPart {
  height: auto;
  width: auto;
  display: flex;
  flex-direction: row;
  /* justify-content: center;
  align-items: center; */
}
.uyruk {
  width: 100px;
  height: 60px;
  background: #ffffff;

  border-radius: 6px;
  margin-bottom: 20px;
  border: none;

  /* form-baslik */
  /* form-text */

  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 100%;
  /* identical to box height, or 16px */
  /* Primary */

  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 100%;
  /* identical to box height, or 16px */
  letter-spacing: -0.01em;
  /* Gri */
  color: #818b9a;
  margin-right: 20px;
  padding-left: 1.3rem;
}

.tcNo {
  height: 60px;
  width: 348px;

  border-radius: 6px;
}
.dropDownSelect {
  width: 468px;
  height: 60px;

  background: #ffffff;

  border-radius: 6px;
  margin-bottom: 20px;
  border: none;

  /* form-baslik */
  /* form-text */

  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 100%;
  /* identical to box height, or 16px */
  /* Primary */

  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 100%;
  /* identical to box height, or 16px */
  letter-spacing: -0.01em;
  /* Gri */
  color: #818b9a;
}

.skipStep {
  /* baslik-alt2 */

  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 130%;
  /* identical to box height, or 26px */

  text-align: center;
  letter-spacing: -0.01em;

  /* Turuncu */

  color: #ff8038;
  border: none;
  background: #e9f3f9;
  margin-top: 35px;
}

.dropDownSelect {
  padding-left: 15px;
}
.profilFotoContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 160px;
  position: absolute;
  /* bottom: 12rem; */
  top: 4.5rem;
  border-radius: 50%;
}
.uploadImageGroupContainer {
  position: relative;
  height: 160px;
  width: 160px;
  border-radius: 0px;
  /* display: none; */
  z-index: 0;
  top: 4rem;
}
.uploadImageGroup {
  width: auto;
  height: auto;
}
.fileInputContainer {
  width: 220px;
  height: 36px;
  background: #ffffff;
  box-shadow: 0px 1px 4px #e3ebee;
  border-radius: 60px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 55px;
  position: relative;
  z-index: 1;
}
.fileInput {
  width: 10px;
  height: 36px;

  /* opacity: 0; */
  display: none;
}
.ppUploadLogo {
  height: 50px;
  width: 20px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 0px;
}
.fileUploadPara {
  width: 100%;
  height: 21px;

  /* text3 */

  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 140%;
  /* identical to box height, or 21px */

  letter-spacing: -0.01em;

  /* Primary */
  color: #3c4e69;
}
.THREE {
  margin-top: 145px;
}
::placeholder {
  /* form-baslik */

  font-family: Nunito Sans !important;
  font-style: normal !important;
  font-weight: normal !important;
  font-size: 16px !important;
  line-height: 100% !important;
  /* identical to box height, or 16px */

  letter-spacing: -0.01em !important;

  /* Gri */

  color: #818b9a !important;
}
/* for some reason, datepicker's color doesn't follow the other colors
so I had to fix it by choosing a color by hand */
.dp__input::placeholder {
  color: #575d66 !important;
}
.dp__button,
.dp__button_bottom {
  display: none;
}

@media only screen and (max-width: 550px) {
  input {
    /* height: 100%; */
    width: 325px;
  }
  .picker {
    width: 325px;
  }

  .button {
    width: 325px;
  }
  .uyruk {
    width: 100px;
    height: 60px;
  }
  .tcNo {
    height: 60px;
    width: 200px;
  }
  .dropDownSelect {
    width: 325px;
    /* height: 60px; */
  }
}
</style>
