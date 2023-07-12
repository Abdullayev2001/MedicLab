
<template>
  <Navbar />
  <router-view />
  <TheFooter />
</template>

<script setup>
  import Navbar from './layouts/Navbar.vue';
  import TheFooter from './layouts/TheFooter.vue';
</script>

<style>
  @import '@/fonts/fonts.scss';
  @import '@/styles/main.scss';
</style>



