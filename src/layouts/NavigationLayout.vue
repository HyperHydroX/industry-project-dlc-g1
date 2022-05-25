<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
        </q-avatar>

        <q-toolbar-title> DLC </q-toolbar-title>

        <q-btn :to="`/`" flat round dense icon="logout" />
      </q-toolbar>
    </q-header>
    <div class="fixed-bottom q-pa-md">
      <q-btn-group spread>
        <q-btn :to="`/score`" color="blue" icon="score" />
        <q-btn :to="`/schermen`" color="blue" icon="visibility" />
        <q-btn :to="`/settings`" color="blue" icon="settings" />
      </q-btn-group>
    </div>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "NavigationLayout",
};
</script>
