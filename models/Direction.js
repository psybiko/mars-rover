class Direction {
  constructor(value) {
    this.value = value;
  }

  turnRight() {
    if (this.value === "N") {
      this.value = "E";
    } else if (this.value === "S") {
      this.value = "W";
    } else if (this.value === "E") {
      this.value = "S";
    } else if (this.value === "W") {
      this.value = "N";
    } else {
      throw new Error("not a valid directional value");
    }
  }

  turnLeft() {
    if (this.value === "N") {
      this.value = "W";
    } else if (this.value === "S") {
      this.value = "E";
    } else if (this.value === "E") {
      this.value = "N";
    } else if (this.value === "W") {
      this.value = "S";
    } else {
      throw new Error("not a valid directional value");
    }
  }
}

module.exports = Direction;
