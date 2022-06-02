<template>

</template>

<script setup>
import { ref } from "vue";
const data = ref([
  {
    "id": "2199",
    "tenantId": 0,
    "tenantName": null,
    "departments": [
      {
        "departmentId": "768",
        "name": "Ağrı Tedavisi",
        "tenants": [{ "id": "1", "name": "TEST ASM Gebze" }]
      }
    ],
    "name": "AYŞEN",
    "surname": "YÜCEL",
    "titleName": "Prof.Dr.",
    "fullName": "Prof.Dr. AYŞEN YÜCEL",
    "canVideoAppointment": true
  },
  {
    "id": "2480",
    "tenantId": 0,
    "tenantName": null,
    "departments": [
      {
        "departmentId": "752",
        "name": "Fizik Tedavi",
        "tenants": [{ "id": "1", "name": "TEST ASM Gebze" }]
      },
      {
        "departmentId": "20070",
        "name": "Fiziksel Aktivite",
        "tenants": [{ "id": "1", "name": "TEST ASM Gebze" }]
      }
    ],
    "name": "MEHMET SEMİH",
    "surname": "AKİ",
    "titleName": "Prof.Dr.",
    "fullName": "Prof.Dr. MEHMET SEMİH AKİ",
    "canVideoAppointment": false
  },
  {
    "id": "2549",
    "tenantId": 0,
    "tenantName": null,
    "departments": [
      {
        "departmentId": "751",
        "name": "Çocuk Sağlığı",
        "tenants": [
          { "id": "1", "name": "TEST ASM Gebze" },
          { "id": "8", "name": "TEST Atasehir TM" }
        ]
      }
    ],
    "name": "NAMIK KEMAL",
    "surname": "AKPINAR",
    "titleName": "Uzm.Dr.",
    "fullName": "Uzm.Dr. NAMIK KEMAL AKPINAR",
    "canVideoAppointment": false
  },
  {
    "id": "2480",
    "tenantId": 0,
    "tenantName": null,
    "departments": [
      {
        "departmentId": "752",
        "name": "Fizik Tedavi",
        "tenants": [
          { "id": "1", "name": "TEST ASM Gebze" },
          { "id": "8", "name": "TEST Atasehir TM" }
        ]
      },
      {
        "departmentId": "20070",
        "name": "Fiziksel Aktivite",
        "tenants": [{ "id": "1", "name": "TEST ASM Gebze" }]
      }
    ],
    "name": "MEHMET SEMİH",
    "surname": "AKİ",
    "titleName": "Prof.Dr.",
    "fullName": "Prof.Dr. MEHMET SEMİH AKİ",
    "canVideoAppointment": false
  },
])


/**
 * 1 tek hastane tek bölüm
 * 2 iki hastane
 * 3 tek hastane iki bölüm
 * @type {{"1": string, "2": string, "3": string}}
 */
const departmentType = {1: "departmentType1", 2: "departmentType2", 3: "departmentType3"}

const findDepartmentType = (data) => {
  let returnValue,
      tenants = [];
  if (data.departments.length > 1) {
    returnValue = departmentType[3]
    data.departments.forEach( (value, index) => {
      value.tenants.forEach( (inValue, _index) => {
        tenants.push(inValue.id)
      })
    })

    if (tenants.filter((a,b) => tenants.indexOf(a) === b).length > 1) {
      returnValue = departmentType[2]
    } else {
      returnValue = departmentType[3]
    }

  } else {
    if (data.departments[0].tenants.length > 1) {
      returnValue = departmentType[2]
    } else {
      returnValue = departmentType[1]
    }
  }
  return returnValue
}

console.log(findDepartmentType(data.value[0]));

</script>

<style scoped lang="scss">

</style>
