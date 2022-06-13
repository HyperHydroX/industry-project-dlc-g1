<template>
  <div class="q-start">
    <div class="q-body">
      <div class="q-container">
        <h2 class="q-titel q-subtitel">Reset password</h2>
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
      </div>
      <q-btn @click="resetPassword" class="q-btn" label="reset" />
      <p
        v-if="msg"
        class="q-text q-text--succes"
        :class="{ ErrorMsg: isErrorMsg }"
      >
        {{ this.msg }}
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
// import router from '../router/index.js'
import { getAuth, sendPasswordResetEmail } from '@firebase/auth'

export default {
  name: 'SettingsView',
  setup() {
    return {
      email: ref(''),
      password: ref(''),
      msg: ref(''),
      isErrorMsg: false,
      admin: true,
    }
  },
  methods: {
    resetPassword() {
      const auth = getAuth()
      sendPasswordResetEmail(auth, this.email)
        .then(() => {
          console.log('Succesfully send email')

          console.log(auth.currentUser)
          this.isErrorMsg = false
          this.msg = 'Succesfully send reset password email'
          // router.push({ name: 'loginLayout' })
        })
        .catch((error) => {
          console.log(error.code)
          console.log(error.message)

          if (error.code == 'auth/invalid-email') {
            this.isErrorMsg = true
            this.msg = 'Ongeldig email'
          }
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

.q-text {
  margin-top: 1.5em;
  color: #f9f9f9;
  text-align: center;
  font-size: 1rem;
  font-family: 'Rajdhani', sans-serif;
}

.q-text--succes {
  color: rgba(20, 126, 109, 1);
}

.ErrorMsg {
  color: #cb2828;
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
  margin-top: 30vh;
}

.q-container {
  margin-top: 2rem;
}
</style>
