<template>
  <div class="landing-page">
  <LandingPage />
  </div>
  <div class="router-view">
  <RouterView />
  </div>
</template>

<script>
import LandingPage from './components/LandingPage.vue'
import { RouterView } from 'vue-router'

export default {
  name: 'App',
  components: {
    LandingPage,
    RouterView}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}

.landing-page {
  text-align: center;
  padding: 20px;
  flex-shrink: 0;
  max-height: 20vh;
}

.router-view {
  padding-top: 3em;
  max-height:80vh;
  flex-grow: 1;
}
</style>
