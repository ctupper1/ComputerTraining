<template>
  <div class="landing-page">
    <h1>Welcome to the Practice App</h1>
    <button @click="navigateToKeyboardPractice">Keyboard Practice</button>
    <button @click="navigateToMousePractice">Mouse Practice</button>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  methods: {
    navigateToKeyboardPractice() {
      this.$router.push('/keyboard-practice');
    },
    navigateToMousePractice() {
      this.$router.push('/mouse-practice');
    }
  }
};
</script>

<style>
.landing-page {
  text-align: center;
  padding: 20px;
}

.landing-page h1 {
  margin-bottom: 20px;
}

.landing-page button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
}
</style>
