const Grid = require("../models/Grid");

describe("Grid class", () => {
  test("it takes an x value", () => {
    const value = "0";
    const position = new Grid(value);
    expect(position.x).toBe(value);
  });

  test("it takes a y value", () => {
    const xValue = "0";
    const value = "0";
    const position = new Grid(xValue, value);

    expect(position.y).toBe(value);
  });
});
