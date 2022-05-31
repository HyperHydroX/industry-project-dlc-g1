<template>
  <div class="start column no-wrap items-center  q-pa-xl">
    <div class="Groep q-pb-xl">
      <p class="q-titel">THUIS</p>
      <ColorPicker />
      <ColorPicker />
    </div>
    <div class="Groep q-pb-xl">
      <p class="q-titel">GASTEN</p>
      <ColorPicker />
      <ColorPicker />
    </div>
    <q-btn
      class="q-btn"
      :to="`/score`"
      color="primary"
      text-color="white"
      label="start"
    />
  </div>
</template>

<style lang="scss" scoped>
.q-titel {
  color: white;
  text-align: center;
  font-size: 1.5em;
  font-weight: 600;
}
.q-btn {
  width: 13%;
  font-size: 1em;
}

@media screen and (max-width: 768px) {
  .q-titel {
    color: white;
    text-align: center;
  }
  .q-btn {
    width: 32%;
  }
}

@media screen and (max-width: 425px) {
  .q-titel {
    color: white;
    text-align: center;
  }
  .q-btn {
    width: 50%;
  }
}
</style>

<script>
import ColorPicker from '../components/ColorPicker.vue'
export default {
  name: 'StartView',
  components: {
    ColorPicker,
  },
}
</script>
