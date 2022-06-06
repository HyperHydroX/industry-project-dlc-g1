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
      <h1 class="q-titel">SCORE</h1>
      <div class="con-scores">
        <div class="con-score-updaters">
          <svg
            class="con-plus-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"
            />
          </svg>
          <svg
            class="con-minus-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z"
            />
          </svg>
        </div>
        <div class="con-team-scores">
          <div class="con-current-scores">
            <p class="con-current-score__team">2</p>
            <p class="con-current-score__sperator">-</p>
            <p class="con-current-score__team">0</p>
          </div>
        </div>
        <div class="con-score-updaters">
          <svg
            class="con-plus-icon con-plus-icon--team2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"
            />
          </svg>
          <svg
            class="con-minus-icon con-minus-icon--team2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z"
            />
          </svg>
        </div>
      </div>
      <q-btn class="q-btn" color="primary" text-color="white" label="rust" />
      <q-btn
        class="q-btn"
        color="primary"
        text-color="white"
        label="tijd resetten"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import HomeFlag from '@/components/HomeFlag.vue'
import OutFlag from '@/components/OutFlag.vue'
export default {
  name: 'ScoreView',
  components: {
    HomeFlag,
    OutFlag,
  },
  setup() {
    return {
      primaryColorThuis: ref('#C0D1EF'),
      secundaryColorThuis: ref('#2C73EC'),
      primaryColorGasten: ref('#F5E834'),
      secundaryColorGasten: ref('#F5AE34'),
    }
  },
}
</script>

<style lang="scss" scoped>
.q-kleuren {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.q-btn {
  width: 100%;
  font-size: 1em;
  height: 3.5em;
  margin-bottom: 1em;
}
.q-subtitel {
  color: white;
  font-size: 1.2em;
  font-weight: 500;
  margin-bottom: 7.5px;
}

.q-timer {
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  min-width: max-content;
  padding: 0 1.5rem;
}
.q-titel {
  color: white;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
}
.q-start {
  margin: 0 auto;
  max-width: 450px;
  padding: 0 40px;
}

.q-body {
  margin-top: 50px;
}
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

.con-scorepagina {
  margin: 0 auto;
  max-width: 450px;
  padding: 0 20px;
}

.con-teams {
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: $margin-between-childeren;
}

.con-team {
  display: flex;
  flex-direction: column;
}

.con-vlag-delen {
  height: 70px;
  width: 120px;
}

.con-team__title {
  line-height: 1;
  margin: 0;
  font-size: 25px;
  font-weight: 500;
  color: white;
  margin-bottom: 5px;
}

.con-team__title--uit {
  align-self: flex-end;
}

.con-vlag-delen__thuisdeel1 {
  height: 50%;
  width: 100%;
  background: $vlag-kleur-thuisdeel1;
  border-top-left-radius: $border-raduis-vlaggen;
  border-top-right-radius: $border-raduis-vlaggen;
}

.con-vlag-delen__thuisdeel2 {
  height: 50%;
  width: 100%;
  background: $vlag-kleur-thuisdeel2;
  border-bottom-left-radius: $border-raduis-vlaggen;
  border-bottom-right-radius: $border-raduis-vlaggen;
}

.con-vlag-delen__uitdeel1 {
  height: 50%;
  width: 100%;
  background: $vlag-kleur-uitdeel1;
  border-top-left-radius: $border-raduis-vlaggen;
  border-top-right-radius: $border-raduis-vlaggen;
}

.con-vlag-delen__uitdeel2 {
  height: 50%;
  width: 100%;
  background: $vlag-kleur-uitdeel2;
  border-bottom-left-radius: $border-raduis-vlaggen;
  border-bottom-right-radius: $border-raduis-vlaggen;
}

.con-scores {
  height: 160px;
  background-color: rgb(57, 57, 57);
  border-radius: 10px;
  display: flex;
  padding: 30px;
  justify-content: space-between;
  margin-bottom: 3em;
}

.con-btns {
  display: flex;
  gap: 20px;
}

.con-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  flex-basis: 200px;
  height: 60px;
  border-radius: 5px;
  background-color: $primary-color;
  flex-wrap: wrap;
}

.con-btn-lg {
  flex-basis: 370px;
  height: 60px;
}

.con-score-updaters {
  display: flex;
  align-items: space-between;
  justify-content: space-between;
  flex-direction: column;
  overflow: auto;
  width: 30%;
}

.con-plus-icon {
  fill: white;
  width: $updater-icon-size;
  min-width: $update-icon-min-size;
}

.con-minus-icon {
  fill: white;
  width: $updater-icon-size;
  min-width: $update-icon-min-size;
}

.con-plus-icon--team2 {
  align-self: flex-end;
}

.con-minus-icon--team2 {
  align-self: flex-end;
}

.con-team-scores {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.con-team-scores__timer {
  color: white;
  font-size: 20px;
  font-weight: 600;
}

.con-current-scores {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  overflow: hidden;
  color: white;
}

.con-current-score__team {
  font-size: 70px;
  margin: 0;
}

.con-current-score__sperator {
  font-size: 70px;
  margin: 0;
}

.q-btn {
  margin-top: 1em;
  width: 100%;
}

@media screen and (max-width: 400px) {
  .con-btns {
    flex-direction: column;
  }
  .con-btn {
    flex-basis: 60px;
  }
}

@media screen and (max-width: 330px) {
  .con-teams {
    justify-content: center;
  }
  .con-team__title {
    align-self: center;
  }
  .con-scores {
    height: auto;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  .con-score-updaters {
    flex-direction: row;
    width: 100%;
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
