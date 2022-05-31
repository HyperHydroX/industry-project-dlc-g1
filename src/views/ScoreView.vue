<template>
  <div class="con-scorepagina">
    <section class="con-vlaggen">
      <div>
        <h2 class="con-vlag__title">Thuis</h2>
        <div class="con-vlag-delen"></div>
      </div>
      <div>
        <h2 class="con-vlag__title">Uit</h2>
        <div class="con-vlag-delen"></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ScoreView',
}
</script>

<style lang="scss">
.con-scorepagina {
  margin: 0 auto;
  max-width: 500px;
}

.con-vlaggen {
  margin-top: 20px;
  background-color: white;
  display: flex;
  justify-content: space-between;
}

.con-vlag-delen {
  height: 70px;
  width: 120px;
  background-color: red;
}

.con-vlag__title {
  line-height: 1;
  margin: 0;
}
</style>
