<template>
  <div class="landing-page">
    <div>
          <h1>Welcome!</h1>
    <h1>Computer Keyboard and Mouse Practice for Children!</h1>
    <h2>Choose an option below to get started!</h2>
    <h1>Have Fun!</h1>

    </div>

    <div class="center-image">
    <button @click="navigateToKeyboardPractice">Keyboard Practice</button>
    <button @click="navigateToMousePractice">Mouse Practice</button>
    <button @click="navigateToSpellingGame">Spelling Game</button>
    <img src="@/assets/mousecomputer.webp" alt="PLAY">

    </div>

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
.landing-page * {
  text-align: center;
  font-family: 'comic sans ms', cursive, sans-serif;
}

.landing-page h1 {
  margin-bottom: 20px;
}

button {
  margin: 15px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  background-color: rgb(162, 123, 168) ;
  border-radius: 10px;
}

button:hover {
  background-color: #61d3ea;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}

img {
  display: block;
  margin: auto;
}

</style>
