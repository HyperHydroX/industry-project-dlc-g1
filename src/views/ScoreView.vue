<template>
  <div class="q-start column no-wrap">
    <div class="q-body">
      <div class="q-kleuren">
        <div>
          <HomeFlag />
        </div>
        <div class="container-timer">
          <span class="q-timer js-timer-minutes">00</span>
          <span class="q-timer q-timer--seperator">:</span>
          <span class="q-timer js-timer-seconds">00</span>
        </div>
        <div>
          <OutFlag />
        </div>
      </div>
      <h1 class="q-titel">Score</h1>
      <div class="con-scores">
        <div class="con-score-updaters">
          <svg
            @click="updateScore"
            class="con-score-icon"
            data-team="thuis-plus"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              class="reset-icons-pointers"
              d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
            />
          </svg>

          <svg
            class="con-score-icon"
            @click="updateScore"
            data-team="thuis-min"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path class="reset-icons-pointers" d="M19 13H5v-2h14v2z" />
          </svg>
        </div>
        <div class="con-team-scores">
          <div class="con-current-scores">
            <p class="js-thuis-score">0</p>
            <p>-</p>
            <p class="js-uit-score">0</p>
          </div>
        </div>
        <div class="con-score-updaters">
          <svg
            @click="updateScore"
            class="con-score-icon"
            data-team="uit-plus"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              class="reset-icons-pointers"
              d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
            />
          </svg>

          <div>
            <svg
              @click="updateScore"
              class="con-score-icon"
              data-team="uit-min"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path class="reset-icons-pointers" d="M19 13H5v-2h14v2z" />
            </svg>
          </div>
        </div>
      </div>
      <!-- @click="setTime('toggle')" -->
      <q-btn
        @click="setTime('toggle')"
        data-timer="toggle"
        class="q-btn timer-btn js-timer-toggle-btn"
        label="Start"
      />
      <q-btn
        @click="setTime('reset')"
        data-timer="reset"
        class="q-btn timer-btn"
        label="Rest timer"
      />
      <!-- syncDeviceAndPlayer -->
      <div class="q-btn--small" @click="syncDeviceAndPlayer">
        <svg
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) -->
          <path
            d="M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
import HomeFlag from '@/components/HomeFlag.vue'
import OutFlag from '@/components/OutFlag.vue'
import router from '../router/index.js'
import { useQuasar } from 'quasar'
import { updateTeamScore, getCurrentValues } from '../firebase/firebase'
import { updateTimer } from '../firebase/firebase2'

import {
  startLocalAndBordTimer,
  stopLocalAndBordTimer,
  resetLocalAndBordTimer,
  milliToMinsAndSecs,
  setLocalAndBordTimer
} from '../scoreboard/scoreboard'

export default {
  name: 'ScoreView',
  methods: {
    updateScore(e) {
      console.log('clicked ')
      let team = e.target.getAttribute('data-team')
      console.log(team)
      if (team == 'thuis-plus') {
        this.scoreThuis += 1
        console.log('thuis-score: ' + this.scoreThuis)
        updateTeamScore('thuis', this.scoreThuis, true)
          .then((e) => {
            console.log(e)
            document.querySelector('.js-thuis-score').innerHTML =
              this.scoreThuis
          })
          .catch((err) => console.log(err))
      } else if (team == 'thuis-min') {
        if (0 < this.scoreThuis) {
          this.scoreThuis -= 1
          updateTeamScore('thuis', this.scoreThuis, false)
            .then((e) => {
              console.log(e)
              document.querySelector('.js-thuis-score').innerHTML =
                this.scoreThuis
            })
            .catch((err) => console.log(err))
        }
        console.log('thuis-score: ' + this.scoreThuis)
      } else if (team == 'uit-plus') {
        this.scoreUit += 1
        console.log('uit-score: ' + this.scoreUit)
        updateTeamScore('uit', this.scoreUit, true)
          .then((e) => {
            console.log(e)
            document.querySelector('.js-uit-score').innerHTML = this.scoreUit
          })
          .catch((err) => console.log(err))
      } else if (team == 'uit-min') {
        if (0 < this.scoreUit) {
          this.scoreUit -= 1
          updateTeamScore('uit', this.scoreUit, false)
            .then((e) => {
              console.log(e)
              document.querySelector('.js-uit-score').innerHTML = this.scoreUit
            })
            .catch((err) => console.log(err))
        }
        console.log('uit-score: ' + this.scoreUit)
      }
    },
    setTime(inputType) {
      console.log('clicked: ' + inputType)
      let label = document
        .querySelector('.js-timer-toggle-btn')
        .querySelector('.q-btn__content')
        .querySelector('span')

      let isTimerInit = localStorage.getItem('isTimerInit')

      if (!isTimerInit) {
        localStorage.setItem('isTimerInit', 'true')
      }

      // logica timer naar firebase of local
      if (isTimerInit == 'true') {
        localStorage.setItem('isTimerInit', 'false')
        label.innerHTML = 'stop'
        startLocalAndBordTimer()
        console.log('starttime setting in firebase store')
        if (inputType == 'toggle') {
          updateTimer('starttimer')
            .then(() => {
              label.innerHTML = 'stop'
              // hier moet startLocalAndBordTimer() komen

              this.isTimerStarted = !this.isTimerStarted
            })
            .catch((err) => {
              console.log(err)
            })
        }
      } else {
        if (inputType == 'toggle') {
          console.log('only local timer is being set')
          this.isTimerStarted == true ? 'pauze' : 'start'
          let test = label.innerHTML
          label.innerHTML = test == 'stop' ? 'start' : 'stop'
          if (test == 'stop') {
            stopLocalAndBordTimer()
          } else {
            startLocalAndBordTimer()
          }
        } else if (inputType == 'reset') {
          resetLocalAndBordTimer()
          localStorage.setItem('isTimerInit', 'true')
          updateTimer('resettimer')
            .then(() => {
              // stopLocalAndBordTimer moet hierkomen

              this.isTimerStarted = !this.isTimerStarted
              localStorage.setItem('isTimerInit', true)
              label.innerHTML = 'start'
            })
            .catch((err) => {
              console.log(err)
            })
        }
      }
    },
    syncDeviceAndPlayer() {
      getCurrentValues()
        .then((jsonObject) => {
          console.log(jsonObject.StartTime)
          let currentTimeArray = milliToMinsAndSecs(jsonObject.StartTime)
          document.querySelector('.js-thuis-score').innerHTML = jsonObject.ScoreThuis
          document.querySelector('.js-uit-score').innerHTML = jsonObject.ScoreUit
          localStorage.setItem("recentbericht", jsonObject.TekstOpScherm)
          // jsonObject.TekstOpScherm
          setLocalAndBordTimer(currentTimeArray)
          localStorage.setItem('isTimerInit', 'false')
          document
        .querySelector('.js-timer-toggle-btn')
        .querySelector('.q-btn__content')
        .querySelector('span').innerHTML = 'stop'
        })
        .catch((err) => {
          console.log(err)
        })
    },

  },
  components: {
    HomeFlag,
    OutFlag,
  },
  props: ['startMatch'],
  setup() {
    const $q = useQuasar()

    return {
      showNotif() {
        $q.notify({
          message: 'De Voetbalmatch is begonnen ',
          color: 'info',
          position: 'top',
          actions: [
            {
              label: 'Terug',
              color: 'secondary',
              handler: () => {
                router.push({ name: 'start' })
              },
            },
            {
              label: 'Ok',
              color: 'secondary',
              handler: () => {
                /* console.log('wooow') */
              },
            },
          ],
          timeout: Math.random() * 5000 + 3000,
        })
      },
    }
  },
  data() {
    this.scoreThuis = 0
    this.scoreUit = 0
    this.isTimerStarted = false
  },
  created() {
    console.log(this.startMatch)
    if (this.startMatch) {
      this.showNotif()
    }
  },
}
</script>
<style lang="scss" scoped>
.container-timer {
  display: flex;
}
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
p {
  margin: 0;
}

// Classes

.q-notify > .q-notifications > .q-notifications__list .q-notification {
  width: 20rem;
}
.q-kleuren {
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
}

@media screen and (max-width: 380px) {
  .q-kleuren {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
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

.q-btn--small {
  margin: 2rem auto;
  width: 7%;
}

.q-btn--small:hover {
  opacity: 0.7;
  cursor: pointer;
}

.q-btn--small:active {
  margin: 2rem auto;
  width: 8%;
  opacity: 0.4;
}

.q-btn--alert {
  height: fit-content;
  margin: 0;
  width: fit-content;
  border-radius: 0;
  background: none;
  color: #f9f9f9;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-family: 'Raleway', sans-serif;
}

.q-btn--alert:focus {
  color: rgba(20, 126, 109, 0.6);
  background: #f9f9f9;
}

.q-banner {
  color: #f9f9f9;
  background: rgba(20, 126, 109, 0.6);
  transition: opacity 0.5s ease-out;
}

.q-titel {
  color: #f9f9f9;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1;
  margin: 1.5rem 0;
}

.q-timer {
  color: #f9f9f9;
  font-size: 1.5rem;
  font-weight: 700;
  min-width: max-content;
  font-family: 'Opens Sans', sans-serif;
}

.q-timer--seperator {
  padding-inline: 0.3em;
}

.q-start {
  margin: 0 auto;
  max-width: 450px;
  padding: 0 40px;
}

.q-body {
  // margin-top: 3.125rem;
}

.con-scorepagina {
  margin: 0 auto;
  max-width: 450px;
  padding: 0 20px;
}

.con-scores {
  height: 145px;
  background-color: #222222;
  display: flex;
  padding: 1.5rem;
  justify-content: space-between;
  margin-bottom: 3em;
}

.con-score-updaters {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  overflow: auto;
  width: 30%;
}

.con-score-icon {
  height: 32px;
  width: 32px;
  fill: #f9f9f9;
}

.con-score-icon:active {
  opacity: 0.4;
}
.con-score-icon:hover {
  opacity: 0.7;
  cursor: pointer;
}

.con-team-scores {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.con-team-scores__timer {
  color: #f9f9f9;
  font-size: 20px;
  font-weight: 600;
}

.con-current-scores {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  overflow: hidden;
  color: #f9f9f9;
  font-weight: 500;
  font-size: 4.2rem;
  margin: 0;
  font-family: 'Open Sans', sans-serif;
}

@media screen and (max-width: 330px) {
  .con-scores {
    height: auto;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  .con-score-updaters {
    flex-direction: row;
    width: 75%;
  }
  .con-plus-icon {
    align-self: center;
  }
  .con-minus-icon {
    align-self: center;
  }
  .con-scorepagina {
    padding-bottom: 100px;
  }
}

@media screen and (max-width: 230px) {
  .con-current-score__team {
    font-size: 50px;
  }
  .con-current-score__sperator {
    font-size: 50px;
  }
  .con-scores {
    padding-left: 20px;
    padding-right: 20px;
  }
}

@media screen and (max-width: 180px) {
  .con-current-score__team {
    font-size: 30px;
    font-weight: 600;
  }
  .con-current-score__sperator {
    font-size: 30px;
    font-weight: 600;
  }

  .con-team-scores__timer {
    font-weight: 400;
    font-size: 18px;
  }
  .con-score-updaters {
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }

  .con-scores {
    padding-left: 0;
    padding-right: 0;
  }
}

.reset-icons-pointers {
  pointer-events: none;
}
</style>
