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
          label-color="white"
        />
        <q-btn
          class="q-btn"
          @click="start"
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
  height: 3rem;
  margin: 2rem auto;
  width: 70%;
  display: flex;
  border-radius: 0;
  background: rgba(20, 126, 109, 0.6);
  color: #f9f9f9;
  text-transform: capitalize;
  font-size: 1rem;
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
  margin: auto;
  border-radius: 0;
  background: rgba(20, 126, 109, 0.6);
  width: 70%;
  display: flex;
  color: #f9f9f9;
  text-transform: capitalize;
  font-size: 1rem;
  font-weight: bold;
  margin-top: -1em;
}
</style>

<script>
import { ref } from 'vue'
import primaryColorPickerGasten from '../components/primaryColorPickerGasten.vue'
import secundaryColorPickerGasten from '../components/secundaryColorPickerGasten.vue'
import primaryColorPickerThuis from '../components/primaryColorPickerThuis.vue'
import secundaryColorPickerThuis from '../components/secundaryColorPickerThuis.vue'
import { useQuasar } from 'quasar'
import router from '../router/index.js'

export default {
  name: 'StartView',
  components: {
    primaryColorPickerGasten,
    secundaryColorPickerGasten,
    primaryColorPickerThuis,
    secundaryColorPickerThuis,
  },
  setup() {
    const $q = useQuasar()
    return {
      primaryColorThuis: ref('#C0D1EF'),
      secundaryColorThuis: ref('#2C73EC'),
      primaryColorGasten: ref('#F5E834'),
      secundaryColorGasten: ref('#F5AE34'),
      text: ref(''),
      model: ref(null),
      options: ['Volwassen ( 2 x 45min.)', 'Jeugd ( 4 x 20min.)'],
      start() {
        $q.notify({
          message:
            'U staat op het punt om de match te starten, wilt u hiermee doorgaan?',
          color: 'primary',
          actions: [
            {
              label: 'Ja',
              color: 'white',
              handler: () => {
                router.push({ name: 'score' })
              },
            },
            {
              label: 'Neen',
              color: 'white',
              handler: () => {
                /* ... */
              },
            },
          ],
        })
      },
    }
  },
}
</script>

