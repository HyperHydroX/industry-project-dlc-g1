<template>
  <div class="q-background">
    <q-layout view="lHh Lpr lFf">
      <div class="column no-wrap items-center">
        <div class="q-start column no-wrap">
          <div class="q-body">
            <q-img
              class="q-img"
              src="../assets/dlc_sport-systems_cmyk-green-01.png"
            />
            <div class="q-container">
              <h1 class="q-titel">Welkom</h1>
              <q-input
                standout
                square
                label="email"
                v-model="email"
                filled
                type="email"
                bgColor="primary"
                labelColor="secondary"
                :class="{ errorClass: isErrorClassEmail }"
              />
              <q-input
                standout
                square
                label="wachtwoord"
                v-model="password"
                filled
                :type="isPwd ? 'password' : 'text'"
                bgColor="primary"
                labelColor="secondary"
                :class="{ errorClass: isErrorClassPassword }"
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                    color="secondary"
                  />
                </template>
              </q-input>
              <p v-if="errMsg" class="q-text q-text--error">
                {{ this.errMsg }}
              </p>
            </div>
            <p class="q-text">
              Geef uw email & wachtwoord in om verder te gaan
            </p>
            <q-btn @click="signin" class="q-btn" label="login" />
            <a @click="resetPasswordPage" class="q-link"
              >Wachtwoord vergeten ?</a
            >
          </div>
          <q-page-container>
            <router-view />
          </q-page-container>
        </div>
      </div>
    </q-layout>
  </div>
</template>

<script>
import { ref } from 'vue'
import router from '../router/index.js'
import { loginUser } from '../firebase/firebase'

export default {
  name: 'LoginLayout',
  completed: ref(false),
  setup() {
    return {
      email: ref(),
      password: ref(),
      isPwd: ref(true),
      isErrorClassEmail: false,
      isErrorClassPassword: false,
      errMsg: ref(''),
    }
  },
  methods: {
    signin() {
      loginUser(this.email, this.password)
        .then((user) => {
          console.log('Succesfully signed in')
          console.log(user)
          this.isErrorClass = false
          router.push({ name: 'chooseSport' })
        })
        .catch((error) => {
          console.log(error.code)
          console.log(`test`, this.email, this.password)
          alert(error.message)

          switch (error.code) {
            case 'auth/invalid-email':
              this.errMsg = 'Ongeldig email.'
              this.isErrorClassEmail = true
              this.isErrorClassPassword = false
              break
            case 'auth/user-not-found':
              this.errMsg = 'Geen user was gevonden met het email.'
              this.isErrorClassEmail = true
              this.isErrorClassPassword = false
              break
            case 'auth/wrong-password':
              this.errMsg = 'Ongeldig wachtwoord.'
              this.isErrorClassEmail = false
              this.isErrorClassPassword = true
              break
            default:
              this.errMsg = 'Email of wachtwoord was incorrect.'
              this.isErrorClassEmail = true
              this.isErrorClassPassword = true
              break
          }
        })
    },

    signinAdmin() {
      loginUser(this.email, this.password)
        .then((user) => {
          console.log('Succesfully signed in')
          console.log(user)
          router.push({ name: 'settings' })
        })
        .catch((error) => {
          console.log(error.code)
          console.log(`test`, this.email, this.password)
          alert(error.message)
        })
    },
    resetPasswordPage() {
      router.push({ name: 'reset' })
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

// Universal

// Classes
.q-background {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    135deg,
    rgba(16, 16, 16, 1) 0%,
    rgba(32, 32, 32, 1) 100%
  );
}
.q-img {
  max-width: 60%;
  max-height: 60%;
  margin-top: 2rem;
}

.q-titel {
  color: #f9f9f9;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  font-size: 1.9rem;
  font-weight: normal;
  line-height: 1;
  margin: 1.5rem 0;
}

.q-text {
  margin: 1.5rem auto 0;
  color: #f9f9f9;
  text-align: center;
  max-width: 13.75em;
  font-size: 1rem;
  font-family: 'Rajdhani', sans-serif;
}

.q-text--error {
  color: #cb2828;
}

.errorClass {
  border: 0.1px solid #cb2828;
}

.q-link {
  color: #f9f9f9;
  text-align: center;
  max-width: 13.75em;
  font-size: 0.9rem;
  font-family: 'Rajdhani', sans-serif;
  cursor: pointer;
  transition: 0.1s ease-out;
}

.q-link:hover {
  color: rgba(20, 126, 109, 0.6);
}

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

.q-btn + .q-btn {
  margin-top: 0;
}

.q-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem auto;
}

.q-container {
  margin-top: 2rem;
}

.q-field {
  font-family: 'Rajdhani', sans-serif;
  font-size: 20px;
}

.q-input + .q-input {
  margin-top: 1rem;
}

@media screen and (min-width: 425px) {
  .q-input {
    width: 16rem;
  }
}

@media screen and (min-width: 768px) {
  .q-titel {
    font-size: 2.5em;
  }

  .q-text {
    font-size: 1.3rem;
  }
}
</style>
