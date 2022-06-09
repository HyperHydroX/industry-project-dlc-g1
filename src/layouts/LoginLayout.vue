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
              <CodeInput
                v-on:complete="onEnter"
                :fields="4"
                :fieldWidth="56"
                :fieldHeight="56"
                :required="true"
                
              />
            </div>
            <p class="q-text_input">
              Geef uw gekregen pin code in om verder te gaan
            </p>
          </div>
          <q-page-container>
            <router-view />
          </q-page-container>
        </div>
      </div>
    </q-layout>
  </div>
</template>

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
  max-width: 12.5em;
  max-height: 12.5em;
  margin-top: 11em;
}

.q-titel {
  color: white;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  font-size: 1.5rem;
  font-weight: normal;
  line-height: 1;
  margin: 1.5rem 0;
}

.q-text_input {
  margin-top: 1.5em;
  color: #f9f9f9;
  text-align: center;
  max-width: 13.75em;
  font-size: 1.3rem;
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
}

.q-container {
  margin-top: 2rem;
}

@media screen and (max-width: 768px) {
  .q-img {
    max-width: 12.5em;
    max-height: 12.5em;
    margin-top: 7.5em;
  }

  .q-text_input {
    margin-top: 2em;
    color: #f9f9f9;
    text-align: center;
    max-width: 18.75em;
    font-size: 1.3em;
  }

  .q-titel {
    font-size: 2.5em;
  }

  .Admin {
    height: 3rem;
    margin: 0.5rem auto;
    width: 30%;
    display: flex;
    border-radius: 0;
    background: rgba(20, 126, 109, 0.6);
    color: #f9f9f9;
    text-transform: capitalize;
    font-size: 1rem;
  }

  .User {
    height: 3rem;
    margin: 0.5rem auto;
    width: 30%;
    display: flex;
    border-radius: 0;
    background: rgba(20, 126, 109, 0.6);
    color: #f9f9f9;
    text-transform: capitalize;
    font-size: 1rem;
  }
}

@media screen and (max-width: 425px) {
  .q-img {
    max-width: 9.375em;
    max-height: 9.375em;
    margin-top: 40%;
  }

  .q-text_input {
    margin-top: 5%;
    color: #f9f9f9;
    text-align: center;
    max-width: 12.5em;
    font-size: 1em;
  }

  .q-titel {
    font-size: 2.2em;
  }

  .Admin {
    height: 3rem;
    margin: 0.5rem auto;
    width: 50%;
    display: flex;
    border-radius: 0;
    background: rgba(20, 126, 109, 0.6);
    color: #f9f9f9;
    text-transform: capitalize;
    font-size: 1rem;
  }

  .User {
    height: 3rem;
    margin: 0.5rem auto;
    width: 50%;
    display: flex;
    border-radius: 0;
    background: rgba(20, 126, 109, 0.6);
    color: #f9f9f9;
    text-transform: capitalize;
    font-size: 1rem;
  }
}
</style>

<script>
import { ref } from 'vue'
import CodeInput from '../components/CodeInput.vue'
import router from '../router/index.js'
export default {
  name: 'LoginLayout',
  components: { CodeInput },
  completed: ref(false),
  setup() {
    return {
      onEnter() {
        router.push({ name: 'start' })
      },
    }
  },
}
</script>
