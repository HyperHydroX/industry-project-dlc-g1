      
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
              '#008048',
              '#D9B801',
              '#E8045A',
              '#B2028A',
              '#2A0449',
              '#019A9D',
            ]"
          />
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<style lang="scss" scoped>
.my-picker {
  width: 300px;
}
.my-input {
  width: 300px;
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
  width: 250px;
}
}
</style>

<script>
import { ref } from 'vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ColorPicker',
  setup() {
    return {
      color: ref('#242424'),
    }
  },
})
</script>
