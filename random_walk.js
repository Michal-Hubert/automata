// Random Walk movement logic
const RandomWalk = {
  STEP_SIZE: 5,

  // Direction vectors: up, down, left, right
  directions: [
    { x: 0, y: -5 },  // up
    { x: 0, y: 5 },   // down
    { x: -5, y: 0 },  // left
    { x: 5, y: 0 }    // right
  ],

  // Calculate next position for random walk
  getNextPosition(currentX, currentY) {
    const dir = this.directions[Math.floor(Math.random() * this.directions.length)];
    return {
      x: currentX + dir.x,
      y: currentY + dir.y
    };
  }
};
