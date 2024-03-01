<!-- TODO: fix score display, update style and add a timer -->
<template>
    <button @click="$router.push('/')">Back</button>

  <div class="keyboard-practice">
    <h2>Press the key: <br/><br/><h1>{{ currentKey }}</h1></h2>
    <p>Score: {{ score }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentKey: this.getRandomKey(),
      score: 0,
      chimeSound: new Audio(require('@/assets/chime.mp3')) // Replace 'chime.mp3' with your chime sound file name
    };
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeyPress);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  },
  methods: {
    getRandomKey() {
      const keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; // Add more characters if needed
      const randomIndex = Math.floor(Math.random() * keys.length);
      return keys[randomIndex];
    },
    handleKeyPress(event) {
      if (event.key.toUpperCase() === this.currentKey) {
        this.score++;
        this.chimeSound.play(); // Play the chime sound
        this.currentKey = this.getRandomKey(); // Generate next key
      }
    }
  }
};
</script>

<style scoped>
button {
  margin: 15px auto;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  background-color: rgb(162, 123, 168) ;
  border-radius: 10px;
  width:10%;
}
button:hover {
  background-color: #61d3ea;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}
.keyboard-practice {
  text-align: center;
  margin-top: 50px;
  justify-content: center;
  
}
.keyboard-practice h1 {
  color:coral;
  font-size: 180px;
  font-family: 'Comic Sans MS', cursive, sans-serif;
}
.keyboard-practice p {
  padding-bottom: 10px;
  padding-right: 10px;
  font-weight: bold;
  text-align: end;
}
</style>


