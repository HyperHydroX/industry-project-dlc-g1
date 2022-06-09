<template>
  <div class="q-background">
    <q-layout view="lHh Lpr lFf">
      <q-page-container>
        <router-view />
      </q-page-container>

      <q-btn-group spread class="bottom-tab-nav__buttons">
        <q-btn :to="`/score`">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
            class="bottom-tab-nav__button__icon"
            :class="{ active: this.currentUrl === '/score' }"
          >
            <g><rect fill="none" height="24" width="24" /></g>
            <g>
              <path
                d="M17.5,13.5H16v-3h1.5V13.5z M20,4h-3V2h-2v2H9V2H7v2H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6 C22,4.9,21.1,4,20,4z M9.5,11.5c0,0.55-0.45,1-1,1h-2v1h3V15H5v-2.5c0-0.55,0.45-1,1-1h2v-1H5V9h3.5c0.55,0,1,0.45,1,1V11.5z M12.75,18h-1.5v-1.5h1.5V18z M12.75,14.5h-1.5V13h1.5V14.5z M12.75,11h-1.5V9.5h1.5V11z M12.75,7.5h-1.5V6h1.5V7.5z M19,14 c0,0.55-0.45,1-1,1h-2.5c-0.55,0-1-0.45-1-1v-4c0-0.55,0.45-1,1-1H18c0.55,0,1,0.45,1,1V14z"
              />
            </g>
          </svg>
        </q-btn>
        <q-btn :to="`/schermen`">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
            class="bottom-tab-nav__button__icon"
            :class="{ active: this.currentUrl === '/schermen' }"
          >
            <rect fill="none" height="24" width="24" />
            <path
              d="M3,10h11v2H3V10z M3,8h11V6H3V8z M3,16h7v-2H3V16z M18.01,12.87l0.71-0.71c0.39-0.39,1.02-0.39,1.41,0l0.71,0.71 c0.39,0.39,0.39,1.02,0,1.41l-0.71,0.71L18.01,12.87z M17.3,13.58l-5.3,5.3V21h2.12l5.3-5.3L17.3,13.58z"
            />
          </svg>
        </q-btn>
        <q-btn :to="`/settings`">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
            class="bottom-tab-nav__button__icon"
            :class="{ active: this.currentUrl === '/settings' }"
          >
            <g><rect fill="none" height="24" width="24" /></g>
            <g>
              <g>
                <path
                  d="M17,11c0.34,0,0.67,0.04,1,0.09V6.27L10.5,3L3,6.27v4.91c0,4.54,3.2,8.79,7.5,9.82c0.55-0.13,1.08-0.32,1.6-0.55 C11.41,19.47,11,18.28,11,17C11,13.69,13.69,11,17,11z"
                />
                <path
                  d="M17,13c-2.21,0-4,1.79-4,4c0,2.21,1.79,4,4,4s4-1.79,4-4C21,14.79,19.21,13,17,13z M17,14.38c0.62,0,1.12,0.51,1.12,1.12 s-0.51,1.12-1.12,1.12s-1.12-0.51-1.12-1.12S16.38,14.38,17,14.38z M17,19.75c-0.93,0-1.74-0.46-2.24-1.17 c0.05-0.72,1.51-1.08,2.24-1.08s2.19,0.36,2.24,1.08C18.74,19.29,17.93,19.75,17,19.75z"
                />
              </g>
            </g>
          </svg>
        </q-btn>
      </q-btn-group>
    </q-layout>
  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import router from '../router/index.js'
export default {
  name: 'NavigationLayout',
  data() {
    return {
      homePageActive: false,
      screenPageActive: false,
      settingsPageActive: false,
      currentUrl: 'test',
    }
  },
  methods: {
    CheckUrl() {},
  },
  setup() {
    const $q = useQuasar()

    return {
      logout() {
        $q.notify({
          message:
            'U staat op het punt om uit te loggen, wilt u hiermee doorgaan?',
          color: 'primary',
          actions: [
            {
              label: 'Ja',
              color: 'white',
              handler: () => {
                router.push({ name: 'loginLayout' })
              },
            },
            {
              label: 'Neen',
              color: 'white',
              handler: () => {
                /* ... */
              },
            },
          ],
        })
      },
    }
  },
  created: function () {
    this.currentUrl = window.location.pathname
    console.log(this.currentUrl)
  },
  updated: function () {
    this.currentUrl = window.location.pathname
    console.log(this.currentUrl)
  },
}
</script>

<style lang="scss" scoped>
.q-page-container {
  padding-top: 3.6rem;
}

.q-background {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    135deg,
    rgba(16, 16, 16, 1) 0%,
    rgba(32, 32, 32, 1) 100%
  );
}

.q-toolbar {
  display: flex;
}

.q-toolbar > .q-btn {
  background: none;
}

.q-btn-group {
  width: 250px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 0;
  position: absolute;
  margin-bottom: 2rem;
  left: 0;
  bottom: 0;
  box-shadow: 0px 3px 6px 0px rgb(0 0 0 / 16%);
  right: 0;
}

.q-btn {
  padding: 0.8rem 1.2rem;
  background: #333333;
  color: #f9f9f9;
  cursor: pointer;
}

.bottom-tab-nav__button__icon {
  height: 32px;
  width: 32px;
  fill: #f9f9f9;
}

.q-btn:active svg {
  fill: #147e6d;
}

.active {
  fill: #147e6d !important;
}
</style>
