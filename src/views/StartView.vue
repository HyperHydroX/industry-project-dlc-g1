<template>
  <div class="q-start column no-wrap">
    <div class="q-body">
      <div>
        <h1 class="q-titel">KLEUREN PLOEGEN</h1>
      </div>
      <div class="q-pb-xl">
        <p class="q-subtitel">THUIS</p>
        <primaryColorPickerThuis />
        <secundaryColorPickerThuis />
      </div>
      <div class="q-pb-xl">
        <p class="q-subtitel">GASTEN</p>
        <primaryColorPickerGasten />
        <secundaryColorPickerGasten />
      </div>
      <div>
        <h1 class="q-titel">TYPE MATCH</h1>
        <q-select
          class="q-select"
          filled
          v-model="model"
          :options="options"
          label="Type match"
        />
        <q-btn
          class="q-btn"
          :to="`/score`"
          color="primary"
          text-color="white"
          label="start match"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.q-subtitel {
  color: white;
  text-align: center;
  font-size: 1.2em;
  font-weight: 500;
  margin-bottom: 0.46875em;
}
.q-btn {
  width: 100%;
  font-size: 1em;
  height: 3.5em;
}
.q-start {
  margin: 0 auto;
  max-width: 28.125em;
  padding: 0 2.5em;
}

.q-body {
  margin-top: 3.125em;
}

.q-titel {
  color: white;
  text-align: center;
  font-size: 1.5em;
  font-weight: 600;
  margin-bottom: -0.5em;
  margin-top: -2.5em;
}

.q-tekst {
  color: white;
}

.q-select {
  width: 100%;
  font-size: 1em;
  background-color: white;
  margin-bottom: 3em;
  border-radius: 5px;
}
</style>

<script>
import { ref } from 'vue'
import primaryColorPickerGasten from '../components/primaryColorPickerGasten.vue'
import secundaryColorPickerGasten from '../components/secundaryColorPickerGasten.vue'
import primaryColorPickerThuis from '../components/primaryColorPickerThuis.vue'
import secundaryColorPickerThuis from '../components/secundaryColorPickerThuis.vue'

export default {
  name: 'StartView',
  components: {
    primaryColorPickerGasten,
    secundaryColorPickerGasten,
    primaryColorPickerThuis,
    secundaryColorPickerThuis,
  },
  setup() {
    return {
      primaryColorThuis: ref('#C0D1EF'),
      secundaryColorThuis: ref('#2C73EC'),
      primaryColorGasten: ref('#F5E834'),
      secundaryColorGasten: ref('#F5AE34'),
      text: ref(''),
      model: ref(null),
      options: ['Volwassen ( 2 x 45min.)', 'Jeugd ( 4 x 20min.)'],
    }
  },
}
</script>

