<template>
    <button @click="$router.push('/')">Back</button>

<!-- Contains conditional and iterative rendering with f-if and v-for directives. -->
  <div>
    <transition name="fly-in">
    <div v-if="star" class="star">
      <img src="@/assets/star.png" alt="star" />
    </div>
  </transition>     
   <h1>Drag the numbers to the correct order</h1>

    <vuedraggable class="mound" :list="objects" @end="checkOrder">
      <div v-for="object in objects" :key="object.id">{{ object.name }}
      </div>
      <RandomShape />
    </vuedraggable>
  </div>
</template>

<script>
import { VueDraggableNext } from 'vue-draggable-next'
export default {
  components: {
    vuedraggable: VueDraggableNext // Ensure this matches the tag in the template
  },
  data() {
    return {
      win: false,
      star: false,
      chimeSound: new Audio(require('@/assets/victory.mp3')), // Replace 'chime.mp3' with your chime sound file name
      objects: [
        { id: 1, name: '1' },
        { id: 3, name: '3' },
        { id: 4, name: '4'},
        { id: 5, name: '5' },
        { id: 6, name: '6' },
        { id: 2, name: '2' },
        { id: 7, name: '7' },
        { id: 8, name: '8' },
        { id: 9, name: '9' },
        { id: 10, name: '10' }
      ]
    };
  },
  created() {
    this.shuffleObject();
  },
  methods: {
    shuffleObject() {
      for (let i = this.objects.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.objects[i], this.objects[j]] = [this.objects[j], this.objects[i]];
      }
    },
    checkOrder() {
      const sortedObjects = [...this.objects].sort((a, b) => a.id - b.id);
      const isCorrectOrder = JSON.stringify(this.objects) === JSON.stringify(sortedObjects);
      if (isCorrectOrder) {
        this.chimeSound.play(); // Play the chime sound
        this.win = true;
        this.star = true;
      }
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

h1 {
  text-align: center;
  font-family: 'comic sans ms', cursive, sans-serif;
  font-size: 30px;
  color: #241313;
  margin-top: 300px;

}
.mound div {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 10px;
  border-radius: 50%; /* Circular shape */
  background-size: cover;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2); /* Slight shadow for depth */
  width: 60px; /* Fixed width */
  height: 60px; /* Fixed height */
  font-size: 60px;
  border: 2px solid #241313;
  background-color:#be7c7c;
}

.mound div:hover {
  cursor:grab;
  background-color:rgb(140, 140, 187);
  transition: background-color 0.5s ease-in-out;
}


.mound {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  margin: auto;
  width: 100%;
}

.star {
  position: absolute;
  top: 45%;
  left: 35%;
  animation: moveInArc 4s;
}

/* .moveInArc-active {
  animation: moveInArc 4s;
}

.moveInArc-leave-active {
  animation: moveInArc 5s infinite;
} */

@keyframes moveInArc {
  0% {
    transform: rotateY(0deg) translateZ(0);
  }
  20% {
    transform: rotateY(180deg) translateZ(500px);
  }
  100% {
    transform: rotateY(360deg) translateZ(0);
  }
}
</style>

