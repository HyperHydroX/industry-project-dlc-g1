<template>
<div class="bg-background">
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
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
  </div>
</template>

<style lang="sass" scoped>
.bg-background
  background: rgb(0,0,0)
  background: linear-gradient(170deg, rgba(0,0,0,1) 0%, rgba(32,32,32,1) 100%)
</style>

<script>
export default {
  name: "StartLayout",
};
</script>
