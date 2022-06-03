<template>
  <div class="q-background">
    <q-layout view="lHh Lpr lFf">
      <q-toolbar class="q-toolbar">
        <q-btn
          color="white"
          class="q-btn-back"
          :to="`/`"
          flat
          round
          dense
          icon="arrow_back"
        />
        <q-btn
          @click="logout"
          color="white"
          class="q-btn"
          flat
          round
          dense
          icon="logout"
        />
      </q-toolbar>
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<style lang="scss" scoped>
.q-background {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    170deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(32, 32, 32, 1) 100%
  );
}

.q-btn {
  margin-top: 1em;
  margin-right: 1em;
}

.q-btn-back {
  margin-top: 1em;
  margin-left: 1em;
}

.q-toolbar {
  display: flex;
  justify-content: space-between;
}
</style>

<script>
import { useQuasar } from 'quasar'
import router from '../router/index.js'
export default {
  name: 'StartLayout',
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
}
</script>
