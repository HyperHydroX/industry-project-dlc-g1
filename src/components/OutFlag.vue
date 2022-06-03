<template>
  <div class="flag">
    <div
      @click="togglePrimaryColor"
      v-bind:style="{ backgroundColor: this.primaryColor }"
      class="flag-part"
    >
      <!-- <q-icon color="white" name="colorize" class="cursor-pointer" /> -->
    </div>
    <div
      @click="toggleSecondaryColor"
      v-bind:style="{ backgroundColor: this.secondaryColor }"
      class="flag-part"
    ></div>
  </div>
  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
    <div class="flag">
      <div
        @click="togglePrimaryColor"
        v-bind:style="{ backgroundColor: this.primaryColor }"
        class="flag-part"
      >
        <!-- <q-icon color="white" name="colorize" class="cursor-pointer" /> -->
      </div>
      <div
        @click="toggleSecondaryColor"
        v-bind:style="{ backgroundColor: this.secondaryColor }"
        class="flag-part"
      ></div>
    </div>
    <q-color
      class="my-picker"
      no-header-tabs
      no-footer
      default-view="palette"
      v-model="this.color"
      @click="changeColor"
      :palette="[
        '#145703',
        '#C0D1EF',
        '#2C73EC',
        '#072964',
        '#3D18BB',
        '#FFFFFF',
        '#000000',
        '#F5E834',
        '#F5AE34',
        '#8B3030',
      ]"
    />
  </q-popup-proxy>
</template>

<style lang="scss" scoped>
// .flag {
//   height: 50%;
//   width: 50%;
// }
.flag-part {
  width: 100px;
  height: 2em;
}
</style>

<script>
import { ref } from 'vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ColorPickerSmall',
  setup() {
    return {
      color: ref('#ffffff'),
      primaryColor: ref('#C0D1EF'),
      secondaryColor: ref('#111111'),
      flagId: String,
    }
  },
  methods: {
    togglePrimaryColor() {
      this.color = this.primaryColor
      this.flagId = 'upperFlag'
    },

    toggleSecondaryColor() {
      this.color = this.secondaryColor
      this.flagId = 'downFlag'
    },
    changeColor() {
      // console.log(
      //   `color = ${
      //     this.color
      //   } primary color = ${this.primaryColor.toLowerCase()} secondary color = ${
      //     this.secondaryColor
      //   } id = ${this.$refs.upperFlag}`,
      // )
      if (
        this.flagId == 'upperFlag' &&
        this.color != this.primaryColor.toLowerCase()
      ) {
        this.primaryColor = this.color
        console.log(this.primaryColor)
      } else if (
        this.flagId == 'downFlag' &&
        this.color != this.secondaryColor.toLowerCase()
      ) {
        this.secondaryColor = this.color
      }
    },
  },
})
</script>
