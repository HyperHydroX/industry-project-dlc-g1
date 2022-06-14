import { createRouter, createWebHistory } from 'vue-router'
import NavigationLayout from '../layouts/NavigationLayout.vue'
import LoginLayout from '../layouts/LoginLayout.vue'
import StartLayout from '../layouts/StartLayout.vue'
import ScoreView from '../views/ScoreView.vue'
import SchermenView from '../views/SchermenView.vue'
import SettingsView from '../views/SettingsView.vue'
import StartView from '../views/StartView.vue'
import ResetPasswordView from '../views/ResetPasswordView.vue'

const routes = [
  {
    path: '/',
    name: 'loginLayout',
    component: LoginLayout,
    props: true,
  },
  {
    path: '/',
    name: 'startLayout',
    component: StartLayout,
    props: true,

    children: [
      {
        path: '/reset',
        name: 'reset',
        component: ResetPasswordView,
        props: true,
      },
      {
        path: '/start',
        name: 'start',
        component: StartView,
        props: true,
      },
    ],
  },
  {
    path: '/',
    name: 'navigation',
    component: NavigationLayout,
    props: true,

    children: [
      {
        path: '/score',
        name: 'score',
        component: ScoreView,
        props: true,
      },

      {
        path: '/schermen',
        name: 'schermen',
        component: SchermenView,
        props: true,
      },

      {
        path: '/settings',
        name: 'settings',
        component: SettingsView,
        props: true,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
