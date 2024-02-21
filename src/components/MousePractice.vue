<template>
  <div>
    <vuedraggable class="mound" :list="objects">
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
  }
};
</script>

<style>
.mound div {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 50%; /* Circular shape */
  background-size: cover;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2); /* Slight shadow for depth */
  width: 60px; /* Fixed width */
  height: 60px; /* Fixed height */
}


.mound {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  border: 1px solid #ccc;
  margin: auto;
  width: 80%;
  background-color: #f2f2f2;
}
</style>

