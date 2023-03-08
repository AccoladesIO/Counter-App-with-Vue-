<template>
  <div class="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
  .app{
    width: 100vw;
    max-width: 100%;
    height: 100vh;
  }
</style>
