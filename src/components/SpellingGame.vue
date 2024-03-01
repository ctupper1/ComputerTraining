<template>
    <button @click="$router.push('/')">Back</button>
  
  <div class="spelling-game">
    <h1>Arrange the letters to spell the word!</h1>
    <vuedraggable class="letters" :list="letters"  @end="checkSpelling">
  <div class="letter-card" v-for="letter in letters" :key="letter" :class="{ dragging: dragging }">{{ letter }}</div>
</vuedraggable>
    <img id="icon" :src="currentImageUrl" alt="Current Word" />
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
.spelling-game {
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  height: 100vh;
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
  width: 300px;
  height: 300px;
  margin: 2em auto;
  transition: border 0.3s ease;
  border: 2px solid #333;
  border-radius: 10%;
}

</style>
