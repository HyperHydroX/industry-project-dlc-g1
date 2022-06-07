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
          label="Login User"
          :disable="!completed"
        />
        <q-btn
          class="Admin"
          :to="`/settings`"
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
  max-width: 12.5em;
  max-height: 12.5em;
  margin-top: 11em;
}
.q-titel {
  color: white;
  font-size: 2.5em;
}
.Admin {
  height: 3rem;
  margin: 0.5rem auto;
  width: 10%;
  display: flex;
  border-radius: 0;
  background: rgba(20, 126, 109, 0.6);
  color: #f9f9f9;
  text-transform: capitalize;
  font-size: 1rem;
}
.User {
  height: 3rem;
  margin: 0.5rem auto;
  width: 10%;
  display: flex;
  border-radius: 0;
  background: rgba(20, 126, 109, 0.6);
  color: #f9f9f9;
  text-transform: capitalize;
  font-size: 1rem;
}
.q-text_input {
  margin-top: 1.5em;
  color: #f9f9f9;
  text-align: center;
  max-width: 13.75em;
  font-size: 1.2em;
}

@media screen and (max-width: 768px) {
  .q-img {
    max-width: 12.5em;
    max-height: 12.5em;
    margin-top: 7.5em;
  }
  .q-text_input {
    margin-top: 2em;
    color: #f9f9f9;
    text-align: center;
    max-width: 18.75em;
    font-size: 1.3em;
  }
  .q-titel {
    font-size: 2.5em;
  }
  .Admin {
  height: 3rem;
  margin: 0.5rem auto;
  width: 30%;
  display: flex;
  border-radius: 0;
  background: rgba(20, 126, 109, 0.6);
  color: #f9f9f9;
  text-transform: capitalize;
  font-size: 1rem;
}
.User {
  height: 3rem;
  margin: 0.5rem auto;
  width: 30%;
  display: flex;
  border-radius: 0;
  background: rgba(20, 126, 109, 0.6);
  color: #f9f9f9;
  text-transform: capitalize;
  font-size: 1rem;
}
}

@media screen and (max-width: 425px) {
  .q-img {
    max-width: 9.375em;
    max-height: 9.375em;
    margin-top: 40%;
  }

  .q-text_input {
    margin-top: 5%;
    color: #f9f9f9;
    text-align: center;
    max-width: 12.5em;
    font-size: 1em;
  }
  .q-titel {
    font-size: 2.2em;
  }
  .Admin {
  height: 3rem;
  margin: 0.5rem auto;
  width: 50%;
  display: flex;
  border-radius: 0;
  background: rgba(20, 126, 109, 0.6);
  color: #f9f9f9;
  text-transform: capitalize;
  font-size: 1rem;
}
.User {
  height: 3rem;
  margin: 0.5rem auto;
  width: 50%;
  display: flex;
  border-radius: 0;
  background: rgba(20, 126, 109, 0.6);
  color: #f9f9f9;
  text-transform: capitalize;
  font-size: 1rem;
}
}
</style>



<script setup>
import CodeInput from '../components/CodeInput.vue'
import { ref } from 'vue'
const completed = ref(false)
</script>
