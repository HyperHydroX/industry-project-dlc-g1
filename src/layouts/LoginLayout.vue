<template>
  <div class="bg-background">
    <q-layout view="lHh Lpr lFf">
      <div class="column no-wrap items-center">
        <q-img
          class="q-img"
          src="../assets/dlc_sport-systems_cmyk-green-01.png"
        />

        <h4 class="q-titel">Welkom</h4>
        <q-btn :to="`/start`" color="primary" text-color="white" label="Login" />
        <q-btn :to="`/start`" color="primary" text-color="white" label="Login" />
      </div>
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
.q-img
    max-width: 150px
    max-height: 150px
    margin-top: 40%
.q-titel
    color: white
</style>

<script>
export default {
  name: "LoginLayout",
};
</script>
