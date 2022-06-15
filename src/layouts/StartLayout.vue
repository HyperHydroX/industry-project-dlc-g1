<template>
  <div class="q-background">
    <q-layout view="lHh Lpr lFf">
      <q-toolbar class="q-toolbar">
        <q-btn
          color="secondary"
          class="q-btn-back"
          @click="goBack"
          flat
          round
          dense
          icon="arrow_back"
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
    135deg,
    rgba(16, 16, 16, 1) 0%,
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

.q-page-container {
  margin: 0;
}
</style>

<script>
import router from '@/router'
export default {
  name: 'StartLayout',
  methods: {
    goBack() {
      router.go(-1)
    },
  },
}
</script>
