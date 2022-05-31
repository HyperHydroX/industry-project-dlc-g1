<template>
  <div class="start q-pa-xl">
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
    <q-btn class="q-btn" :to="`/score`" color="primary" text-color="white" label="start" />
  </div>
</template>

<style lang="sass" scoped>
.q-titel
    color: white
    text-align: center
.q-btn  
  width: 100%

</style>

<script>
import ColorPicker from "../components/ColorPicker.vue";
export default {
  name: "StartView",
  components: {
    ColorPicker,
  },
};
</script>
