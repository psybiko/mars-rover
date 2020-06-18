const Position = require("../models/Position");

describe("Position", () => {
  test("should take in an x value", () => {
    const xValue = 5;
    const position = new Position(xValue);

    expect(position.x).toBe(xValue);
  });

  test("should take in a y value", () => {
    const yValue = 5;
    const xValue = 5;
    const position = new Position(xValue, yValue);

    expect(position.y).toBe(yValue);
  });

  test("should take in a string for a compass point", () => {
    const compassPoint = "N";
    const position = new Position(1, 1, compassPoint);
    expect(position.direction).toBe(compassPoint);
  });
});
