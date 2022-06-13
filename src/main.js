import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCRaJ9itsKcoXq9_XHcF715IoZCOm15Qbc',
  authDomain: 'project-dlc.firebaseapp.com',
  projectId: 'project-dlc',
  storageBucket: 'project-dlc.appspot.com',
  messagingSenderId: '776741185029',
  appId: '1:776741185029:web:7b43b24e0c38c43acfde6c',
}

// Initialize Firebase
initializeApp(firebaseConfig)

// Global variables

library.add(fas)

createApp(App)
  .component('fa', FontAwesomeIcon)
  .use(Quasar, quasarUserOptions)
  .use(router)
  .mount('#app')
