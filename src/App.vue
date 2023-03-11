<template>
  <div class="app">
    <Navbar />
    <ToggleSwitch />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/NavBar.vue'
import ToggleSwitch from "./components/ToggleSwitch.vue";

export default {
  name: 'App',
  components: {
    Navbar,
    ToggleSwitch,
  }
};


</script>

<style>
  .app{
    width: 100vw;
    max-width: 100%;
    height: 100vh;
  }
</style>
