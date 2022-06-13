<template>
  <div class="q-start">
    <div class="q-body">
      <!-- <h1 class="q-titel">Wijzig pincode</h1>
      <div class="q-container">
        <p class="q-titel q-subtitel">User</p>
        <CodeInputSettings
          class=""
          @complete="completedUser = true"
          :fields="4"
          :fieldWidth="56"
          :fieldHeight="56"
          :required="true"
        />
      </div>
      <q-btn
        @click="pincodeUser"
        class="q-btn"
        label="bevestig"
        :disable="!completedUser"
      />

      <div class="q-container">
        <p class="q-titel q-subtitel">Admin</p>
        <CodeInputSettings
          @complete="completedAdmin = true"
          :fields="4"
          :fieldWidth="56"
          :fieldHeight="56"
          :required="true"
        />
        <q-btn
          @click="pincodeAdmin"
          class="q-btn"
          label="bevestig"
          :disable="!completedAdmin"
        />
      </div> -->
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
import { getAuth, signOut } from '@firebase/auth'
export default {
  name: 'SettingsView',
  setup() {
    const $q = useQuasar()
    return {
      text: ref(''),
      model: ref(null),
      options: ['Scherm 1', 'Scherm 2'],
      completedUser: ref(false),
      completedAdmin: ref(false),
      pincodeAdmin() {
        $q.notify({
          message:
            'U staat op het punt om de pincode van de admin aan te passen, wilt u hiermee doorgaan?',
          color: 'primary',
          actions: [
            {
              label: 'Ja',
              color: '#f9f9f9',
              handler: () => {
                /* ... */
              },
            },
            {
              label: 'Neen',
              color: '#f9f9f9',
              handler: () => {
                /* ... */
              },
            },
          ],
        })
      },
      pincodeUser() {
        $q.notify({
          message:
            'U staat op het punt om de pincode van de user aan te passen, wilt u hiermee doorgaan?',
          color: 'primary',
          actions: [
            {
              label: 'Ja',
              color: '#f9f9f9',
              handler: () => {
                /* ... */
              },
            },
            {
              label: 'Neen',
              color: '#f9f9f9',
              handler: () => {
                /* ... */
              },
            },
          ],
        })
      },
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

.q-body {
  // margin-top: 3.125rem;
}

.q-input {
  font-size: 1em;
  background-color: #f9f9f9;
  color: #f9f9f9;
  width: 100%;
  border-radius: 5px;
}
.q-container {
  margin-top: 2rem;
}
</style>
