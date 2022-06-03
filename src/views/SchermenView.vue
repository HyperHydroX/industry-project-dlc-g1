<template>
  <div class="q-start">
    <div class="q-body">
      <h1 class="q-titelTekst">SCHERM TEKSTWEERGAVE</h1>
      <div>
        <q-input
          class="q-input"
          v-model="text"
          filled
          type="textarea"
          label="Deze tekst is komt terecht op het scorebord"
        />
      </div>
      <q-btn
        class="q-btn"
        color="primary"
        text-color="white"
        label="Verzenden"
      />
      <h1 class="q-titelScherm">SCHERM WEERGAVE</h1>
      <q-select
        class="q-select"
        filled
        v-model="model"
        :options="options"
        label="Scherm weergave"
      />
    </div>
    <div>
      <h1 class="q-titelSponser">UPLOAD SPONSERS</h1>

      <q-file
        class="q-file"
        color="white"
        label-color="white"
        bg-color="primary"
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
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'SchermenView',
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
.q-btn {
  width: 100%;
  font-size: 1em;
  margin-top: 2em;
  height: 3.5em;
}

.q-titelTekst {
  color: white;
  text-align: center;
  font-size: 1.5em;
  font-weight: 600;
  margin-bottom: -0.5em;
  margin-top: -2.5em;
}

.q-titelScherm {
  color: white;
  text-align: center;
  font-size: 1.5em;
  font-weight: 600;
  margin-bottom: -3.5em;
}

.q-titelSponser {
  color: white;
  text-align: center;
  font-size: 1.5em;
  font-weight: 600;
  margin-bottom: -4em;
}

.q-input {
  font-size: 1em;
  background-color: white;
  color: white;
  width: 100%;
  border-radius: 5px;
}

.q-file {
  font-size: 1em;
  color: white;
  width: 100%;
  margin-top: 5em;
  border-bottom-left-radius: 5px;
}
.q-select {
  width: 100%;
  font-size: 1em;
  background-color: white;
  margin-top: 4em;
  border-radius: 5px;
}

.q-start {
  margin: 0 auto;
  max-width: 28.125em;
  padding: 0 2.5em;
}

.q-body {
  margin-top: 3.125em;
}
</style>
