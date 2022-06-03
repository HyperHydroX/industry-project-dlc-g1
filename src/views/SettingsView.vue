<template>
  <div class="q-start">
    <div class="q-body">
      <h1 class="q-titelTekst">WIJZIG PINCODE</h1>
      <div>
        <p class="q-subtitel">USER</p>
        <q-input class="q-input" v-model="text" filled label="User" />
      </div>
      <q-btn class="q-btn" color="primary" text-color="white" label="wijzig" />

      <div class="q-admin">
        <p class="q-subtitel">ADMIN</p>
        <q-input class="q-input" v-model="text" filled label="Admin" />
      </div>
      <q-btn class="q-btn" color="primary" text-color="white" label="wijzig" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'SettingsView',
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
.q-subtitel {
  color: white;
  text-align: center;
  font-size: 1.2em;
  font-weight: 500;
  margin-bottom: 0.46875em;
}

.q-admin {
  margin-top: 3em;
}

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

.q-start {
  margin: 0 auto;
  max-width: 28.125em;
  padding: 0 2.5em;
}

.q-body {
  margin-top: 3.125em;
}

.q-input {
  font-size: 1em;
  background-color: white;
  color: white;
  width: 100%;
}
</style>
