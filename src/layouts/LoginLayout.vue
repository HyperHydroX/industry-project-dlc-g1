<template>
  <div class="bg-background">
    <q-layout view="lHh Lpr lFf">
      <div class="column no-wrap items-center">
        <q-img
          class="q-img"
          src="../assets/dlc_sport-systems_cmyk-green-01.png"
        />
        <h4 class="q-titel">Welkom</h4>
        <CodeInput
          @complete="completed = true"
          :fields="4"
          :fieldWidth="56"
          :fieldHeight="56"
          :required="true"
        />

        <p class="q-text_input">
          Geef uw gekregen pin code in om verder te gaan
        </p>

        <q-btn
          class="User"
          :to="`/start`"
          color="primary"
          text-color="white"
          label="Login User"
          :disable="!completed"
        />
        <q-btn
          class="Admin"
          :to="`/settings`"
          color="primary"
          text-color="white"
          label="Login Admin"
          :disable="!completed"
        />
      </div>
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<style lang="sass" scoped>
.bg-background
    background: rgb(0,0,0)
    background: linear-gradient(170deg, rgba(0,0,0,1) 0%, rgba(32,32,32,1) 100%)
.q-img
    max-width: 150px
    max-height: 150px
    margin-top: 30%
.q-titel
    color: white
.Admin
    margin-top: 5%
.User
    margin-top: 5%
.q-text_input
    margin-top: 5%
    color: #F9F9F9
    text-align: center
    max-width: 200px

</style>



<script setup>
import CodeInput from "../components/CodeInput.vue";
import { ref } from "vue";
const completed = ref(false);
</script>
