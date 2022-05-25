<template>
  <q-layout view="lHh Lpr lFf">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'about' }">About</router-link> |
    </nav>
    <router-view />
  </q-layout>
</template>

<script>
export default {
  name: "LayoutDefault",

  components: {},

  setup() {},
};
</script>
