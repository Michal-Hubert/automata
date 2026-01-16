// Lévy Flight movement logic
const LevyFlight = {
  MIN_STEP: 2,
  MAX_STEP: 100,
  MU: 1.5, // power-law exponent (typically 1 < μ < 3)

  // Generate step length using inverse transform sampling
  // Power-law distribution: P(l) ∝ l^(-μ)
  getStepLength() {
    const u = Math.random();
    const length = this.MIN_STEP * Math.pow(1 - u, -1 / (this.MU - 1));
    return Math.min(length, this.MAX_STEP);
  },

  // Calculate next position for Lévy flight
  getNextPosition(currentX, currentY) {
    const angle = Math.random() * 2 * Math.PI;
    const stepLength = this.getStepLength();
    return {
      x: currentX + Math.cos(angle) * stepLength,
      y: currentY + Math.sin(angle) * stepLength
    };
  }
};
