<template>
  <div class="q-start column no-wrap">
    <div class="q-body">
      <div class="q-ploegen">
        <h1 class="q-titel">Kleuren ploegen</h1>
        <div class="q-flag-container">
          <p class="q-titel q-subtitel">Thuis</p>
          <HomeFlag Large="true" />
        </div>
        <div class="q-flag-container">
          <p class="q-titel q-subtitel">Uit</p>
          <OutFlag Large="true" />
        </div>
      </div>
      <div class="q-container">
        <h1 class="q-titel">Type Match</h1>
        <q-select
          class="q-select"
          filled
          v-model="model"
          :options="options"
          label="Type match"
          label-color="secondary"
        />
        <q-btn class="q-btn" @click="start" label="start match" />
      </div>
    </div>
  </div>
</template>

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

// Classes

.q-btn {
  height: 3rem;
  margin: 1rem auto;
  width: 70%;
  display: flex;
  border-radius: 0;
  background: rgba(20, 126, 109, 0.6);
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

.q-titel {
  color: #f9f9f9;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1;
}

.q-subtitel {
  font-size: 1.2rem;
}

.q-tekst {
  color: #f9f9f9;
}

.q-select {
  margin: auto;
  border-radius: 0;
  background: rgba(20, 126, 109, 0.6);
  width: 70%;
  color: #f9f9f9;
  text-transform: capitalize;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  font-family: 'Raleway', sans-serif;
}

.q-field__native {
  color: #f9f9f9;
}
.q-flag-container {
  margin-top: 2rem;
}

.q-container {
  margin-top: 3rem;
}
</style>

<script>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import router from '../router/index.js'
import OutFlag from '@/components/OutFlag.vue'
import HomeFlag from '@/components/HomeFlag.vue'

export default {
  name: 'StartView',
  components: { HomeFlag, OutFlag },
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
          color: 'info',
          actions: [
            {
              label: 'Ja',
              color: 'secondary',
              handler: () => {
                router.push({ name: 'score' })
              },
            },
            {
              label: 'Neen',
              color: 'secondary',
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
