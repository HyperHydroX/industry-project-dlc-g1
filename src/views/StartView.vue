<template>
  <div class="q-start column no-wrap items-center">
    <div class="q-body">
      <div class="Groep q-pb-xl">
        <p class="q-titel">THUIS</p>
        <primaryColorPickerThuis />
        <secundaryColorPickerThuis  />
      </div>
      <div class="Groep q-pb-xl">
        <p class="q-titel">GASTEN</p>
        <primaryColorPickerGasten  />
        <secundaryColorPickerGasten  />
      </div>
      <q-btn
        class="q-btn"
        :to="`/score`"
        color="primary"
        text-color="white"
        label="start"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.q-titel {
  color: white;
  text-align: center;
  font-size: 1.5em;
  font-weight: 600;
  margin-bottom: 7.5px;
}
.q-btn {
  width: 100%;
  font-size: 1em;
}
.q-start {
  margin: 0 auto;
  max-width: 450px;
  padding: 0 40px;
}

.q-body {
  margin-top: 50px;
}

@media screen and (max-width: 768px) {
  .q-titel {
    color: white;
    text-align: center;
  }
}

@media screen and (max-width: 425px) {
  .q-titel {
    color: white;
    text-align: center;
  }
}
</style>

<script>
import { ref } from 'vue'
import primaryColorPickerGasten from '../components/primaryColorPickerGasten.vue'
import secundaryColorPickerGasten from '../components/secundaryColorPickerGasten.vue'
import primaryColorPickerThuis from '../components/primaryColorPickerThuis.vue'
import secundaryColorPickerThuis from '../components/secundaryColorPickerThuis.vue'
export default {
  name: 'StartView',
  components: {
    primaryColorPickerGasten,
    secundaryColorPickerGasten,
    primaryColorPickerThuis,
    secundaryColorPickerThuis,
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

