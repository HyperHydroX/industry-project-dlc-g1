import { createRouter, createWebHistory } from 'vue-router'
import NavigationLayout from '../layouts/NavigationLayout.vue'
import LoginLayout from '../layouts/LoginLayout.vue'
import StartLayout from '../layouts/StartLayout.vue'
import ScoreView from '../views/ScoreView.vue'
import SchermenView from '../views/SchermenView.vue'
import SettingsView from '../views/SettingsView.vue'
import StartView from '../views/StartView.vue'

const routes = [
  {
    path: '/',
    name: 'loginLayout',
    component: LoginLayout,
  },
  {
    path: "/",
    name: 'startLayout',
    component: StartLayout,

    children: [
      {
        path: '/start',
        name: 'start',
        component: StartView
      }
    ],
  },
  {
    path: "/",
    name: 'navigation',
    component: NavigationLayout,

    children: [
      {
        path: '/score',
        name: 'score',
        component: ScoreView
      },

      {
        path: '/schermen',
        name: 'schermen',
        component: SchermenView
      },

      {
        path: '/settings',
        name: 'settings',
        component: SettingsView
      }
    ],
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
