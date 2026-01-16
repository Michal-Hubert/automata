// BFS-like expanding circle search logic
const BFS = {
  RADIUS_INCREMENT: 10,
  ANGLE_STEP: 0.15, // radians per step (smaller = smoother circle)

  currentRadius: 0,
  currentAngle: 0,
  centerX: 0,
  centerY: 0,

  // Initialize/reset the search state
  reset(centerX, centerY) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.currentRadius = this.RADIUS_INCREMENT;
    this.currentAngle = 0;
  },

  // Calculate next position - expanding circles from center
  getNextPosition(currentX, currentY) {
    // Move along the current circle
    this.currentAngle += this.ANGLE_STEP;

    // When we complete a circle, expand to next radius
    if (this.currentAngle >= 2 * Math.PI) {
      this.currentAngle = 0;
      this.currentRadius += this.RADIUS_INCREMENT;
    }

    // Calculate position on the circle
    const x = this.centerX + Math.cos(this.currentAngle) * this.currentRadius;
    const y = this.centerY + Math.sin(this.currentAngle) * this.currentRadius;

    return { x, y };
  }
};
