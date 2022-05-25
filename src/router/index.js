import { createRouter, createWebHistory } from 'vue-router'
import NavigationLayout from '../layouts/NavigationLayout.vue'
import ScoreView from '../views/ScoreView.vue'
import SchermenView from '../views/SchermenView.vue'
import SettingsView from '../views/SettingsView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
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
