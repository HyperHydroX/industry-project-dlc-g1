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
    <div class="q-navi fixed-bottom q-pa-md">
      <q-btn-group spread >
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
.bg-background{
  background: rgb(0,0,0);
  background: linear-gradient(170deg, rgba(0,0,0,1) 0%, rgba(32,32,32,1) 100%);}
.q-navi{
  margin-left: 30%;
  margin-right: 30%;
}

@media screen and (max-width: 768px) {
.q-navi{
  margin-left: 0%;
  margin-right: 0%;
}
}

@media screen and (max-width: 425px) {
.q-navi{
  margin-left: 0%;
  margin-right: 0%;
}
}
</style>

<script>
export default {
  name: "NavigationLayout",
};
</script>
