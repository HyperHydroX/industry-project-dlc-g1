<template>
  <div class="con-scorepagina">
    <section class="con-teams">
      <div class="con-team">
        <h2 class="con-team__title">Thuis</h2>
        <div class="con-vlag-delen">
          <div class="con-vlag-delen__thuisdeel1"></div>
          <div class="con-vlag-delen__thuisdeel2"></div>
        </div>
      </div>
      <div class="con-team">
        <h2 class="con-team__title con-team__title--uit">Uit</h2>
        <div class="con-vlag-delen">
          <div class="con-vlag-delen__uitdeel1"></div>
          <div class="con-vlag-delen__uitdeel2"></div>
        </div>
      </div>
    </section>
    <section class="con-scores"></section>
    <section class="con-btns">
      <div class="con-btn">Rust</div>
      <div class="con-btn con-btn-lg">Reset tijd</div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ScoreView',
}
</script>

<style lang="scss">
$vlag-kleur-uitdeel1: #128453;
$vlag-kleur-uitdeel2: #a3ffd7;
$vlag-kleur-thuisdeel1: #ffe600;
$vlag-kleur-thuisdeel2: #3c00ff;
$border-raduis-vlaggen: 3px;
$margin-between-childeren: 40px;
$primary-color: #8bd1b6;
$primary-color-dark: #8bd1b6;
$primary-color-darker: #8bd1b654;
$primary-text-color: black;

.con-scorepagina {
  margin: 0 auto;
  max-width: 450px;
  padding: 0 20px;
}

.con-teams {
  margin-top: 20px;
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
  justify-self: center;
  border-radius: 10px;
  margin-bottom: $margin-between-childeren;
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
@media screen and (max-width: 400px) {
  .con-btns {
    flex-direction: column;
  }
  .con-btn {
    flex-basis: 60px;
  }
}

@media screen and (max-width: 300px) {
  .con-teams {
    justify-content: center;
  }
  .con-team__title {
    align-self: center;
  }
}
</style>
