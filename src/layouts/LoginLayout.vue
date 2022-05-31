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

<style lang="scss" scoped>
.bg-background {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    170deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(32, 32, 32, 1) 100%
  );
}
.q-img {
  max-width: 200px;
  max-height: 200px;
  margin-top: 11em;
}
.q-titel {
  color: white;
  font-size: 2.5em;
}
.Admin {
  margin-top: 1em;
  width: 13%;
}
.User {
  margin-top: 2em;
  width: 13%;
}
.q-text_input {
  margin-top: 1.5em;
  color: #f9f9f9;
  text-align: center;
  max-width: 220px;
  font-size: 1.2em;
}

@media screen and (max-width: 768px) {
  .q-img {
    max-width: 200px;
    max-height: 200px;
    margin-top: 7.5em;
  }
  .Admin {
    margin-top: 1em;
    width: 32%;
  }
  .User {
    margin-top: 1.5em;
    width: 32%;
  }
  .q-text_input {
    margin-top: 2em;
    color: #f9f9f9;
    text-align: center;
    max-width: 300px;
    font-size: 1.3em;
  }
  .q-titel {
    font-size: 2.5em;
  }
}

@media screen and (max-width: 425px) {
  .q-img {
    max-width: 150px;
    max-height: 150px;
    margin-top: 40%;
  }
  .Admin {
    margin-top: 5%;
    width: 50%;
  }
  .User {
    margin-top: 5%;
    width: 50%;
  }
  .q-text_input {
    margin-top: 5%;
    color: #f9f9f9;
    text-align: center;
    max-width: 200px;
    font-size: 1em;
  }
  .q-titel {
    font-size: 2.2em;
  }
}
</style>



<script setup>
import CodeInput from '../components/CodeInput.vue'
import { ref } from 'vue'
const completed = ref(false)
</script>
