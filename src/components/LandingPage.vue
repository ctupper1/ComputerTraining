<template>
  <div class="landing-page">
    <h1>Welcome!</h1>
    <h1>Computer Keyboard and Mouse Practice for Children!</h1>
    <h1>Have Fun!</h1>
     <img src="../assets/mousecomputer.webp" alt="PLAY" /> <br> 
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
  background-color: cornsilk;
}

.landing-page h1 {
  margin-bottom: 20px;
}

button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  background-color: yellow ;
}

button:hover {
  background-color: #FFC800;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}
  

</style>
