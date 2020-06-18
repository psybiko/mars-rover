const Direction = require("../models/Direction");

describe("Direction", () => {
  test("should have a directional value", () => {
    const value = "N";
    const direction = new Direction(value);

    expect(direction.value).toBe(value);
  });

  test("should have the right value after turning right", () => {
    const directionN = new Direction("N");
    const directionS = new Direction("S");
    const directionE = new Direction("E");
    const directionW = new Direction("W");

    const directions = [directionN, directionS, directionE, directionW];

    directions.forEach((dir) => dir.turnRight());

    const actualValues = directions.map((dir) => dir.value);
    const expectedValues = ["E", "W", "S", "N"];

    actualValues.forEach((actualValue, index) => {
      expect(expectedValues[index]).toBe(actualValue);
    });
  });

  test("should have the right value after turning left", () => {
    const directionN = new Direction("N");
    const directionS = new Direction("S");
    const directionE = new Direction("E");
    const directionW = new Direction("W");

    const directions = [directionN, directionS, directionE, directionW];

    directions.forEach((dir) => dir.turnLeft());

    const actualValues = directions.map((dir) => dir.value);
    const expectedValues = ["W", "E", "N", "S"];

    actualValues.forEach((actualValue, index) => {
      expect(expectedValues[index]).toBe(actualValue);
    });
  });
});
