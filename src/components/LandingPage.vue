<template>
  <div class="landing-page">
    <h1>Welcome to the Practice App</h1>
    <h2>Choose an activity to get started!</h2>
    <button class="cartoonish-button" @click="navigateToKeyboardPractice">Keyboard Game</button>
    <button class="cartoonish-button" @click="navigateToMousePractice">Mouse Game</button>
    <button class="cartoonish-button" @click="navigateToSpellingGame">Spelling Game</button>
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
    },
    navigateToSpellingGame() {
      this.$router.push('/spelling-game');
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

.cartoonish-button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  background-color: #FFD700;
  border: none;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  color: #000;
  text-transform: uppercase;
  font-weight: bold;
}

.cartoonish-button:hover {
  background-color: #FFC800;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}
  

</style>
