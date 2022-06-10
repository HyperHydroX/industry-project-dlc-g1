<template>
  <div class="q-start">
    <div class="q-body">
      <h1 class="q-titel">Scherm tekstweergave</h1>
      <div>
        <q-input
          class="q-input"
          v-model="text"
          filled
          type="textarea"
          label="Deze tekst is komt terecht op het scorebord"
        />
      </div>
      <q-btn class="q-btn" label="Verzenden" @click="verzendenTekst(text)" />
      <div class="q-container">
        <h1 class="q-titel">Scherm weergave</h1>
        <q-select
          label-color="white"
          class="q-select"
          filled
          v-model="model"
          :options="options"
          label="Scherm weergave"
        />
      </div>
      <div class="q-container">
        <h1 class="q-titel">Upload sponsors</h1>
        <q-file
          class="q-file"
          color="white"
          label-color="white"
          standout
          v-model="model"
          label="Upload sponsers"
        >
          <template v-slot:append>
            <q-icon name="cloud_upload" color="white" />
          </template>
        </q-file>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'SchermenView',
        methods: {
        verzendenTekst() {
          var myHeaders = new Headers()
          myHeaders.append('apikey', 'MDcPUplgUhlPp23cHJmBLSHhklEAArya')

          var raw = this.text

          var requestOptions = {
            method: 'POST',
            redirect: 'follow',
            headers: myHeaders,
            body: raw,
          }

          fetch(
            'https://api.apilayer.com/bad_words?censor_character={censor_character}',
            requestOptions,
          )
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log('error', error))
        },
      },
  setup() {
    return {
      text: ref(''),
      model: ref(null),
      options: ['Scherm 1', 'Scherm 2'],
    }
  },
}
</script>

<style lang="scss" scoped>
// Fonts
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

// CSS Variables
$margin-between-childeren: 40px;
$primary-color: #8bd1b6;
$primary-color-dark: #8bd1b6;
$primary-color-darker: #8bd1b654;
$primary-text-color: black;
$updater-icon-size: 30%;
$update-icon-min-size: 32px;

// Universal
h1 {
  line-height: 2;
}

// Classes
.q-btn {
  height: 3rem;
  margin: 1.5rem auto;
  width: 70%;
  display: flex;
  border-radius: 0;
  background: rgba(20, 126, 109, 0.6);
  color: #f9f9f9;
  text-transform: capitalize;
  font-size: 1rem;
  font-family: 'Raleway', sans-serif;
}

.q-titel {
  color: white;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1;
}

.q-input {
  font-size: 1em;
  background-color: white;
  color: white;
  width: 100%;
  font-family: 'Rajdhani', sans-serif;
}

.q-file {
  margin: 1rem auto;
  border-radius: 0;
  background: rgba(20, 126, 109, 0.6);
  width: 70%;
  display: flex;
  color: #f9f9f9;
  text-transform: capitalize;
  font-size: 1rem;
  font-family: 'Raleway', sans-serif;
}
.q-select {
  margin: 1rem auto;
  border-radius: 0;
  background: rgba(20, 126, 109, 0.6);
  width: 70%;
  display: flex;
  color: #f9f9f9;
  text-transform: capitalize;
  font-size: 1rem;
  font-family: 'Raleway', sans-serif;
}

.q-start {
  margin: 0 auto;
  max-width: 28.125em;
  padding: 0 2.5em;
}

.q-body {
  // margin-top: 3.125rem;
}

.q-container {
  margin-top: 2rem;
}
</style>
