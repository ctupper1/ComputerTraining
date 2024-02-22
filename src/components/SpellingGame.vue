<template>
  <div>
    <h2>Spelling Game</h2>
    <vuedraggable class="letters" :list="letters" @end="checkSpelling">
      <div v-for="letter in letters" :key="letter">{{ letter }}</div>
    </vuedraggable>
  </div>
</template>

<script>
import {VueDraggableNext} from 'vue-draggable-next'

export default {
  components: {
    vuedraggable: VueDraggableNext
  },
  data() {
    return {
      words: ['cat', 'dog', 'fish', 'bird'],
      currentWord: '',
      letters: []
    };
  },
  created() {
    this.currentWord = this.words[Math.floor(Math.random() * this.words.length)];
    this.letters = this.currentWord.split('');
  },
  methods: {
    checkSpelling() {
      if (this.letters.join('') === this.currentWord) {
        alert('Correct spelling!');
      }
    }
  }
};
</script>

<style scoped>
.letters {
  display: flex;
  justify-content: center;
  gap: 15px;
  font-size: 60px;
}
</style>