<template>
  <div class="q-start">
    <div class="q-body">
      <div v-if="admin">
        <h1 class="q-titel">instellingen</h1>
        <div class="q-container">
          <p class="q-titel q-subtitel">Registreer user</p>
          <q-input
            standout
            square
            label="email"
            v-model="email"
            filled
            type="email"
            bgColor="primary"
            labelColor="secondary"
          />
          <q-input
            standout
            square
            label="wachtwoord"
            v-model="password"
            filled
            bgColor="primary"
            labelColor="secondary"
          />
        </div>
        <q-btn @click="register" class="q-btn" label="register" />
      </div>
      <div class="q-container">
        <h1 class="q-titel">Log out</h1>
        <q-btn @click="logout" class="q-btn" label="Log out" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import router from '../router/index.js'
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
} from '@firebase/auth'

export default {
  name: 'SettingsView',
  setup() {
    const $q = useQuasar()
    return {
      email: ref(''),
      password: ref(''),
      admin: true,
      logout() {
        $q.notify({
          message:
            'U staat op het punt om uit te loggen, wilt u hiermee doorgaan?',
          color: 'info',
          actions: [
            {
              label: 'Ja',
              color: 'secondary',
              handler: () => {
                const auth = getAuth()
                signOut(auth).then(() => {
                  router.push({ name: 'loginLayout' })
                })
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
  methods: {
    register() {
      const auth = getAuth()

      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          console.log('Succesfully signed in')

          console.log(auth.currentUser)
        })
        .catch((error) => {
          console.log(error.code)
          console.log(`test`, this.email, this.password)
          alert(error.message)
        })
    },
  },
}
</script>

<style lang="scss" scoped>
// Fonts
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap');

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
  letter-spacing: normal;
}

// Classes
.q-btn {
  height: 3rem;
  margin: 1.5rem auto;
  width: 80%;
  display: flex;
  border-radius: 0;
  background: rgba(20, 126, 109, 0.6);
  color: #f9f9f9;
  text-transform: capitalize;
  font-size: 1rem;
  font-family: 'Raleway', sans-serif;
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

.q-start {
  margin: 0 auto;
  max-width: 28.125em;
  padding: 0 2.5em;
}

.q-input + .q-input {
  margin-top: 1rem;
}

.q-body {
  // margin-top: 3.125rem;
}

.q-container {
  margin-top: 2rem;
}
</style>
