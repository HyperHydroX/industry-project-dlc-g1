<template>
  <div class="bg-background">
    <q-layout view="lHh Lpr lFf">
      <q-toolbar class="q-toolbar">
        <q-btn
          @click="showNotif"
          color="white"
          class="q-btn-back"
          :to="`/`"
          flat
          round
          dense
          icon="arrow_back"
        />
                <q-btn
          @click="showNotif"
          color="white"
          class="q-btn"
          :to="`/`"
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
export default {
  name: 'StartLayout',
}
</script>
