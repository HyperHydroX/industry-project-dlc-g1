<template>
  <div class="q-start">
    <div class="q-body">
      <h1 class="q-titelTekst">WIJZIG PINCODE</h1>
      <div>
        <p class="q-subtitel">USER</p>
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

      <div class="q-admin">
        <p class="q-subtitel">ADMIN</p>
        <CodeInputSettings
          @complete="completedAdmin = true"
          :fields="4"
          :fieldWidth="56"
          :fieldHeight="56"
          :required="true"
        />
      </div>
      <q-btn
        @click="pincodeAdmin"
        class="q-btn"
        label="bevestig"
        :disable="!completedAdmin"
      />
      <h1 class="q-titelLogout">LOG OUT</h1>
      <q-btn @click="logout" class="q-btn" label="Log out" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import CodeInputSettings from '../components/CodeInputSettings.vue'
import { useQuasar } from 'quasar'
import router from '../router/index.js'
export default {
  name: 'SettingsView',
  components: {
    CodeInputSettings,
  },
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
              color: 'white',
              handler: () => {
                /* ... */
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
      pincodeUser() {
        $q.notify({
          message:
            'U staat op het punt om de pincode van de user aan te passen, wilt u hiermee doorgaan?',
          color: 'primary',
          actions: [
            {
              label: 'Ja',
              color: 'white',
              handler: () => {
                /* ... */
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
      logout() {
        $q.notify({
          message:
            'U staat op het punt om uit te loggen, wilt u hiermee doorgaan?',
          color: 'primary',
          actions: [
            {
              label: 'Ja',
              color: 'white',
              handler: () => {
                router.push({ name: 'loginLayout' })
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
  height: 3rem;
  margin: 1.5rem auto;
  width: 80%;
  display: flex;
  border-radius: 0;
  background: rgba(20, 126, 109, 0.6);
  color: #f9f9f9;
  text-transform: capitalize;
  font-size: 1rem;
}

.q-titelTekst {
  color: white;
  text-align: center;
  font-size: 1.5em;
  font-weight: 600;
  margin-bottom: -0.5em;
  margin-top: -2.5em;
}

.q-titelLogout {
  color: white;
  text-align: center;
  font-size: 1.5em;
  font-weight: 600;
  margin-bottom: -2em;
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
  border-radius: 5px;
}
</style>
