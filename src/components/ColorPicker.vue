      
      <template>
  <q-input bg-color= {{color}} filled v-model="color" class="my-input">
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
              '#019A9D',
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

<style lang="sass" scoped>
.my-picker
    width: 300px
</style>

<script>
import { ref } from 'vue'
import { defineComponent } from "vue";
export default defineComponent({
  name: "ColorPicker",
    setup () {
    return {
      color: ref('#FF00FF'),
      secondColor: ref('#027be3')
    }
  }
});
</script>
