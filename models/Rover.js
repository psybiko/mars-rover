const Direction = require("../models/Direction");
const Position = require("../models/Position");

class Rover {
  constructor(instructions, position, direction) {
    this.instructions = instructions;
    this.position = position;
    this.direction = direction;
  }

  static create(x, y, dir, instructions) {
    const position = new Position(x, y);
    const direction = new Direction(dir);

    return new Rover(position, direction, instructions);
  }

  moveForward() {
    if (this.direction.value === "N") {
      this.position.y += 1;
    } else if (this.direction.value === "S") {
      this.position.y -= 1;
    } else if ((this.direction.value = "W")) {
      this.position.value -= 1;
    } else if ((this.direction.value = "E")) {
      this.position.x += 1;
    }
  }
}

module.exports = Rover;
