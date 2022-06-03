      
      <template>
  <q-input
    v-bind:style="{ backgroundColor: color }"
    filled
    class="my-input"
  >
    <template v-slot:append>
      <q-icon color="white" name="colorize" class="cursor-pointer">
        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
          <q-color
            class="my-picker"
            no-header-tabs
            no-footer
            default-view="palette"
            v-model="color"
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
      </q-icon>
    </template>
  </q-input>
</template>

<style lang="scss" scoped>
.my-picker {
  width: 370px;
}
.my-input {
  width: 80%;
    margin-left: 1.9em
}

@media screen and (max-width: 768px) {
  .my-picker {
    width: 300px;
  }
}

@media screen and (max-width: 425px) {
  .my-picker {
    width: 300px;
  }
  .my-input {
  width: 80%;
}
}
</style>

<script>
import { ref } from 'vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ColorPickerSmall',
  setup() {
    return {
      color: ref('#F5E834'),
    }
  },
})
</script>
