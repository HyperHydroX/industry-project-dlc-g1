import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Style from

library.add(fas)

createApp(App)
  .component('fa', FontAwesomeIcon)
  .use(Quasar, quasarUserOptions)
  .use(router)
  .mount('#app')
