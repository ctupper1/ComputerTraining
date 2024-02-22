<template>
  <div class="spelling-game">
    <h2>Spelling Game</h2>
    <vuedraggable class="letters" :list="letters" @end="checkSpelling">
      <div class="letter-card" v-for="letter in letters" :key="letter">{{ letter }}</div>
    </vuedraggable>
    <img :src="currentImageUrl" alt="Current Word" />
  </div>
</template>


<script>
import {VueDraggableNext} from 'vue-draggable-next'

export default {
  components: {
    vuedraggable: VueDraggableNext
  },
  data() {
    const images = require.context('@/assets', false, /\.png$/);
    const words = images.keys().map(image => ({
      text: image.replace(/(\.\/|\.png$)/g, ''),
      imageUrl: images(image),
    }));
    return {
      words,
      currentWord: '',
      letters: [],
      currentImageUrl: ''

    };
  },
  created() {
  const selectedWordObj = this.words[Math.floor(Math.random() * this.words.length)];
  this.currentWord = selectedWordObj.text;
  this.currentImageUrl = selectedWordObj.imageUrl;
  this.letters = this.currentWord.split('');
  this.shuffleLetters();
},

  methods: {
    checkSpelling() {
      if (this.letters.join('') === this.currentWord) {
        alert('Correct spelling!');
      }
    },
    shuffleLetters() {
      for (let i = this.letters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.letters[i], this.letters[j]] = [this.letters[j], this.letters[i]];
      }
    }
  }
};
</script>

<style scoped>

.spelling-game {
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 40vh;
}

.letters {
  display: flex;
  justify-content: center;
  gap: 15px;
  font-size: 60px;
}

.letter-card {
  border: 2px solid #333; /* solid border */
  padding: 10px 20px; /* padding around the letter */
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2); /* subtle shadow for depth */
  background-color: #fff; /* white background */
  border-radius: 10px; /* rounded corners */
  cursor: pointer; /* cursor changes to pointer to indicate interactivity */
}

img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  flex-shrink: 1;
}

</style>
