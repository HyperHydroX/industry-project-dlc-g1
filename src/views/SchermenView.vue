<template>
  <div class="q-start">
    <div class="q-body">
    <div>
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
  margin-top: 1em;
}
.q-input {
  font-size: 1em;
  background-color: white;
  color: white;
  width: 410px;
}
.q-select {
  width: 410px;
  font-size: 1em;
  background-color: white;
  margin-top: 4em;
}

.q-start {
  margin: 0 auto;
  max-width: 450px;
  padding: 0 20px;
}

.q-body {
  margin-top: 50px;
}

@media screen and (max-width: 768px) {
  .q-btn {
    width: 100%;
  }

}

@media screen and (max-width: 425px) {
  .q-btn {
    width: 100%;
  }
.q-input {
  font-size: 1em;
  background-color: white;
  color: white;
  width: 383px;
}
.q-select {
  width: 383px;
  font-size: 1em;
  background-color: white;
  margin-top: 4em;
}
}

@media screen and (max-width: 375px) {
  .q-btn {
    width: 100%;
  }
.q-input {
  font-size: 1em;
  background-color: white;
  color: white;
  width: 333px;
}
.q-select {
  width: 333px;
  font-size: 1em;
  background-color: white;
  margin-top: 4em;
}
}

@media screen and (max-width: 320px) {
  .q-btn {
    width: 100%;
  }
.q-input {
  font-size: 1em;
  background-color: white;
  color: white;
  width: 279px;
}
.q-select {
  width: 279px;
  font-size: 1em;
  background-color: white;
  margin-top: 4em;
}
}
</style>
