<template>
  <div id="app">
  <!-- <LandingPage/> -->
  <RouterView class="router-view" />
  </div>
</template>

<script>
// import LandingPage from './components/LandingPage.vue'
import { RouterView } from 'vue-router'


export default {
  name: 'App',
  components: {
    // LandingPage,
    RouterView}
}
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: cornsilk;

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
  padding: 0;
}

.landing-page div {
  text-align: center;
  padding: 20px;
  flex-shrink: 0;
  max-height: 20vh;
  background-color: cornsilk;
}

.router-view {
  margin: auto;
  flex-grow: 1;
  align-items: center;
}
</style>
