<template>
  <q-layout view="lHh Lpr lFf">
    <div class="layout">
      <q-btn :to="`/`" color="white" text-color="black" label="Logout" />
      <q-btn :to="`/score`" color="white" text-color="black" label="Score" />
      <q-btn
        :to="`/schermen`"
        color="white"
        text-color="black"
        label="Schermen"
      />
      <q-btn
        :to="`/settings`"
        color="white"
        text-color="black"
        label="Settings"
      />
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
