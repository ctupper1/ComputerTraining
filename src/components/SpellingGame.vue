<template>
  <div class="spelling-game">
    <vuedraggable class="letters" :list="letters"  @end="checkSpelling">
  <div class="letter-card" v-for="letter in letters" :key="letter" :class="{ dragging: dragging }">{{ letter }}</div>
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
    // Import all images from the assets folder
    // Replace the regex pattern with your image file extension
    
    const images = require.context('@/assets/cartoon_animals_images', false, /\.jpg$/);
    const words = images.keys().map(image => ({
      text: image.replace(/(\.\/|\.jpg$)/g, ''),
      imageUrl: images(image),
    }));
    return {
      chimeSound: new Audio(require('@/assets/chime.mp3')),
      words,
      currentWord: '',
      letters: [],
      currentImageUrl: '',
      dragging: false

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
      this.dragging = false;
      if (this.letters.join('') === this.currentWord) {
        setTimeout(() => {
          this.dragging = true;
          this.loadNewWord();
        }, 100);
        this.chimeSound.play();
      }
    },
    shuffleLetters() {
      for (let i = this.letters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.letters[i], this.letters[j]] = [this.letters[j], this.letters[i]];
      }
    },
    loadNewWord() {
    const selectedWordObj = this.words[Math.floor(Math.random() * this.words.length)];
    this.currentWord = selectedWordObj.text;
    this.currentImageUrl = selectedWordObj.imageUrl;
    this.letters = this.currentWord.split('');
    this.shuffleLetters();
  },
  }
};
</script>

<style scoped>

.spelling-game {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-family: 'Comic Sans MS', cursive, sans-serif;
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
  transition: border 0.3s ease;

}
.letter-card.dragging {
  border-width: 4px; /* adjust as needed */
}

img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  flex-shrink: 1;
}

</style>
