<template>
  <div class="flag">
    <div
      @click="togglePrimaryColor"
      v-bind:style="{ backgroundColor: this.primaryColor }"
      class="flag-part"
      :class="{ flagPartLarge: Large === 'true' }"
    ></div>
    <div
      @click="toggleSecondaryColor"
      v-bind:style="{ backgroundColor: this.secondaryColor }"
      class="flag-part"
      :class="{ flagPartLarge: Large === 'true' }"
    ></div>
  </div>
  <q-popup-proxy
    cover
    transition-show="scale"
    transition-hide="scale"
    breakpoint="1920"
    class="popup-overlay"
  >
    <div class="colour-picker">
      <div class="colour-picker__flag">
        <div
          @click="togglePrimaryColor"
          v-bind:style="{ backgroundColor: this.primaryColor }"
          class="colour-picker__flag-part"
        >
          <div class="flag-icon__container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="flag-icon"
              :class="{ changeIconColor: this.primaryColor == '#ffffff' }"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
              />
            </svg>
          </div>
        </div>
        <div
          @click="toggleSecondaryColor"
          v-bind:style="{ backgroundColor: this.secondaryColor }"
          class="colour-picker__flag-part"
        >
          <div class="flag-icon__container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="flag-icon"
              :class="{ changeIconColor: this.secondaryColor == '#ffffff' }"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
              />
            </svg>
          </div>
        </div>
      </div>
      <q-color
        class="colour-picker"
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
    </div>
  </q-popup-proxy>
</template>

<script>
import { ref } from 'vue'
import { defineComponent } from 'vue'
import { GetFlagColours } from '@/firebase/firebase'
export default defineComponent({
  name: 'ColorPickerSmall',
  data() {
    return {
      colours: [],
    }
  },
  setup() {
    return {
      color: ref('#ffffff'),
      primaryColor: ref('#333333'),
      secondaryColor: ref('#000080'),
      flagId: String,
    }
  },
  props: ['Large'],
  mounted() {
    this.colours = GetFlagColours()
    console.log(this.colours)
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

<style lang="scss" scoped>
.popup-overlay {
  margin: 0 auto;
}
.flag {
}

.flag-part {
  width: 100px;
  height: 2em;
  cursor: pointer;
  // border-top: 1px solid #f9f9f9;
  // border-left: 1px solid #f9f9f9;
  // border-right: 1px solid #f9f9f9;
}

// .flag-part + .flag-part {
//   border-top: none;
//   border-bottom: 1px solid #f9f9f9;
// }

.flagPartLarge {
  width: 80%;
  height: 2.8rem;
  margin: auto;
}

.colour-picker {
  cursor: pointer;
  border-radius: 0;
}

// .q-color-picker__cube {
//   margin: 0.5rem !important;
// }

.colour-picker__flag {
  margin-bottom: 2rem;
}

.colour-picker__flag-part {
  width: 250px;
  height: 4em;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
}

.flag-icon {
  width: 24px;
  height: 24px;
  fill: #f9f9f9;
}

.flag-icon__container {
  padding: 0.5rem;
}

.changeIconColor {
  fill: #333333;
}
</style>
