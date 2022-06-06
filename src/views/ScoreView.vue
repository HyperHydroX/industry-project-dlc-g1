<template>
  <div class="q-start column no-wrap">
    <div class="q-body">
      <div class="q-kleuren">
        <div>
          <HomeFlag />
        </div>
        <div>
          <h2 class="q-timer">20 : 01</h2>
        </div>
        <div>
          <OutFlag />
        </div>
      </div>
      <h1 class="q-titel">score</h1>
      <div class="con-scores">
        <div class="con-score-updaters">
          <svg
            class="con-score-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </svg>
          <svg
            class="con-score-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M19 13H5v-2h14v2z" />
          </svg>
        </div>
        <div class="con-team-scores">
          <div class="con-current-scores">
            <p>2</p>
            <p>-</p>
            <p>0</p>
          </div>
        </div>
        <div class="con-score-updaters">
          <svg
            class="con-score-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </svg>
          <svg
            class="con-score-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M19 13H5v-2h14v2z" />
          </svg>
        </div>
      </div>
      <q-btn class="q-btn" label="rust" />
      <q-btn class="q-btn" label="tijd resetten" />
    </div>
  </div>
</template>

<script>
import HomeFlag from '@/components/HomeFlag.vue'
import OutFlag from '@/components/OutFlag.vue'

export default {
  name: 'ScoreView',
  components: {
    HomeFlag,
    OutFlag,
  },
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
// Fonts
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

// CSS Variables
$vlag-kleur-uitdeel1: #ff1e00;
$vlag-kleur-uitdeel2: #323232;
$vlag-kleur-thuisdeel1: #ffe600;
$vlag-kleur-thuisdeel2: #2500c7;
$border-raduis-vlaggen: 3px;
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

.q-kleuren {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
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
  font-weight: bold;
}

.q-titel {
  color: white;
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
  padding: 0 1.5rem;
}

.q-start {
  margin: 0 auto;
  max-width: 450px;
  padding: 0 40px;
}

.q-body {
  margin-top: 50px;
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
}

@media screen and (min-width: 360px) {
  .q-timer {
    font-size: 2rem;
  }
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
</style>
