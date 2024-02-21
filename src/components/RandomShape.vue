<template>
  <svg :width="width" :height="height" xmlns="http://www.w3.org/2000/svg">
    <path :d="pathData" fill="none" stroke="black" stroke-width="2"/>
    <text x="50%" y="50%" text-anchor="middle" stroke="#51c5cf" stroke-width="1px" dy=".3em">{{ label }}</text>
  </svg>
</template>

<script>
export default {
  data() {
    return {
      width: 300,
      height: 300,
      pathData: '',
      label: 'Organic Shape',
    };
  },
  created() {
    this.generatePath();
  },
  methods: {
    generatePath() {
    const controlPoints = [];
    let pathData = 'M';
    let maxAngleIncrement = (Math.PI * 2) / 6;
    let angleIncrement = Math.random() * maxAngleIncrement; // Random value between 0 and maxAngleIncrement
    let radius = this.width / 4; // Adjust radius for the size of the SVG

    // Generate control points for arcs
    for (let i = 0; i < 6; i++) {
      let angle = i * angleIncrement;
      let x = this.width / 2 + radius * Math.cos(angle);
      let y = this.height / 2 + radius * Math.sin(angle);
      controlPoints.push({ x, y });
    }

    // Construct the path data using arcs
    controlPoints.forEach((point, index) => {
      if (index === 0) {
        pathData += `${point.x},${point.y}`;
      } else {
        // Remove the line of code where 'prevPoint' is declared
        // let prevPoint = controlPoints[index - 1];
          pathData += ` A${radius},${radius} 0 0,1 ${point.x},${point.y}`;
        }
      });

      // Close the path to create a loop
      pathData += ` A${radius},${radius} 0 0,1 ${controlPoints[0].x},${controlPoints[0].y}`;
      pathData += ' Z';

      this.pathData = pathData;
      this.label = `Organic Shape`;
    },
  }
};
</script>

<style>
/* Add any additional styling here */
</style>
