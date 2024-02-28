<template>

<!-- Contains conditional and iterative rendering with f-if and v-for directives. -->
  <div>
    <transition name="fly-in">
    <div v-if="star" class="star">
      <img src="@/assets/star.png" alt="star" />
    </div>
  </transition>
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



<style>
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
  background-color: #f0f0f0;
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
  /* Add your star styles here... */
}

.fly-in-enter-active {
  animation: fly-in 4s;
}

.fly-in-leave-active {
  animation: fly-in 1s reverse;
}

@keyframes fly-in {
  0% {
    transform: translateX(-100%) scale(0.9);
  }
  /* 20% {
    transform: translateX(-80%) scale(0.8);
  }
  40% {
    transform: translateX(-60%) scale(0.96);
  }
  60% {
    transform: translateX(-40%) scale(1.04);
  }
  80% {
    transform: translateX(-20%) scale(1.12);
  } */
  100% {
    transform: translateX(0) scale(1.0);
  }
}
</style>

