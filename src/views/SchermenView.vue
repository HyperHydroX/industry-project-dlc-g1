<template>
  <div class="start column no-wrap items-center q-pa-xl">
    <div class="q-pa-md">
      <q-input
        class="q-input"
        v-model="text"
        filled
        type="textarea"
        label="Deze tekst is komt terecht op het scorebord"
      />
    </div>
    <q-btn class="q-btn" color="primary" text-color="white" label="Verzenden" />
    <q-select
      class="q-select"
      filled
      v-model="model"
      :options="options"
      label="Scherm weergave"
    />
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
  width: 300px;
  font-size: 1em;
  margin-top: 1em;
}
.q-input {
  font-size: 1em;
  background-color: white;
  color: white;
  width: 300px;
  margin-top: 5em;

}
.q-select {
  width: 300px;
  font-size: 1em;
  background-color: white;
  margin-top: 4em;
}

@media screen and (max-width: 768px) {
  .q-btn {
  width: 300px;
  }
  .q-select {
  width: 300px;
  font-size: 1em;
  background-color: white;
  margin-top: 4em;
}
}

@media screen and (max-width: 425px) {
  .q-btn {
    width: 100%;
  }
  .q-select {
  width: 300px;
  font-size: 1em;
  background-color: white;
  margin-top: 4em;
}

}
</style>
