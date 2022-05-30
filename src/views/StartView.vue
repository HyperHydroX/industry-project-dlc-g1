<template>
  <div class="start q-pa-xl">
    <div class="Groep q-pb-xl">
      <p>THUIS</p>
      <ColorPicker />
      <ColorPicker />
    </div>
    <div class="Groep q-pb-xl">
      <p>GASTEN</p>
      <ColorPicker />
      <ColorPicker />
    </div>
    <q-btn :to="`/score`" color="white" text-color="black" label="start" />
  </div>
</template>

<script>
import ColorPicker from "../components/ColorPicker.vue";
export default {
  name: "StartView",
  components: {
    ColorPicker,
  },
};
</script>
