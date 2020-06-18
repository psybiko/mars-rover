class Position {
  constructor(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  formatPosition() {
    if (
      typeof this.x === "number" &&
      typeof this.y === "number" &&
      typeof this.direction === "string" &&
      this.direction === ("N" || "E" || "S" || "W")
    ) {
      return `${this.x}, ${this.y}, ${this.direction}`;
    }
  }
}

module.exports = Position;
