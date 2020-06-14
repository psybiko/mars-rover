const Position = require("../models/Position");

describe("Position", () => {
  test("should take in an x value", () => {
    const xValue = "5";
    const position = new Position(xValue);

    expect(position.x).toBe(xValue);
  });

  test("should take in a y value", () => {
    const yValue = "5";
    const xValue = "5";
    const position = new Position(xValue, yValue);

    expect(position.y).toBe(yValue);
  });
});
