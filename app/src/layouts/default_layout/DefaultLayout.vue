<script setup lang="ts">
import { onMounted } from 'vue';



onMounted(() => {
  document.title = '';
});
</script>

<template>
  <v-layout>
    <v-main>
      <router-view />
    </v-main>
  </v-layout>
</template>

<style module="styles" lang="scss">
//
</style>
