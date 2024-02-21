<template>
  <div class="keyboard-practice">
    <p>Score: {{ score }}</p>

    <h1>Press the key: <br/><br/>{{ currentKey }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentKey: this.getRandomKey(),
      score: 0
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
        this.currentKey = this.getRandomKey(); // Generate next key
      }
    }
  }
};
</script>

<style scoped>
.keyboard-practice {
  text-align: center;
  margin-top: 50px;
}
.keyboard-practice h1 {
  font-size: 40px;
}
.keyboard-practice p {
  margin-top: 100px;
  font-weight: bold;
  text-align: start;


}

</style>


