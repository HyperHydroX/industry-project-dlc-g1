<template>
  <div class="bg-background">
    <q-layout view="lHh Lpr lFf">
      <q-toolbar class="q-toolbar">
        <q-btn @click="showNotif" color="white" class="q-btn" :to="`/`" flat round dense icon="logout" />
      </q-toolbar>
      <div class="q-navi fixed-bottom">
        <q-btn-group spread>
          <q-btn :to="`/score`" color="primary" icon="score" />
          <q-btn :to="`/schermen`" color="primary" icon="visibility" />
          <q-btn :to="`/settings`" color="primary" icon="settings" />
        </q-btn-group>
      </div>
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<style lang="scss" scoped>
.bg-background {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    170deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(32, 32, 32, 1) 100%
  );
}



.q-btn {
  margin-top: 1em;
}

.q-toolbar{
  display: flex;
  justify-content: flex-end;
  margin-left: -1em;
}

@media screen and (max-width: 768px) {
  // .q-navi {
  //   margin-left: 0%;
  //   margin-right: 0%;
  // }
}

@media screen and (max-width: 425px) {
  // .q-navi {
  //   margin-left: 0%;
  //   margin-right: 0%;
  // }
}
</style>

<script>
import { useQuasar } from 'quasar'
export default {
  name: 'NavigationLayout',
    setup () {
    const $q = useQuasar()

    return {
      showNotif () {
        $q.notify({
          message: 'U staat op het punt om uit te loggen, wilt u hiermee doorgaan?',
          color: 'primary',
          actions: [
            { label: 'Ja', color: 'white', handler: () => { /* ... */ } },
            { label: 'Neen', color: 'white', handler: () => { /* ... */ } }
          ]
        })
      }
    }
  }
}
</script>
