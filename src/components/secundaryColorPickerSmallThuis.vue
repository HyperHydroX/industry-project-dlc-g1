      
      <template>
  <q-input
    v-bind:style="{ backgroundColor: color }"
    filled
    v-model="color"
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
  width: 100px;
}
.my-input {
  width: 120px;
}

@media screen and (max-width: 768px) {
  .my-picker {
    width: 120px;
  }
}

@media screen and (max-width: 425px) {
  .my-picker {
    width: 100px;
  }
  .my-input {
  width: 120px;
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
      color: ref('#2C73EC'),
    }
  },
})
</script>
