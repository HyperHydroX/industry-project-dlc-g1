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
            </div>
            <p class="q-text">
              Geef uw email & wachtwoord in om verder te gaan
            </p>
            <q-btn @click="singin" class="q-btn" label="Login" />
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
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

// const email = ref('')
// const password = ref('')
// const errMsg = ref()

export default {
  name: 'LoginLayout',
  completed: ref(false),
  setup() {
    return {
      email: ref(),
      password: ref(),
      isPwd: ref(true),

      onEnter() {
        router.push({ name: 'start' })
      },
    }
  },
  methods: {
    singin() {
      const auth = getAuth()

      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          console.log('Succesfully signed in')

          console.log(auth.currentUser)

          router.push({ name: 'start' })
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
  margin-top: 5rem;
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
  margin-top: 1.5em;
  color: #f9f9f9;
  text-align: center;
  max-width: 13.75em;
  font-size: 1rem;
  font-family: 'Rajdhani', sans-serif;
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
