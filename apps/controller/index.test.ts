import rover, { Input } from "./index";

describe("rover", () => {
  it("returns starting position if no commands given", () => {
    const input: Input = {
      startingPosition: {
        x: 15,
        y: 25,
        direction: "south",
      },
    };

    expect(rover(input)).toEqual(input.startingPosition);
  });

  it("returns final position after a single forward movement command", () => {
    const input: Input = {
      startingPosition: {
        x: 10,
        y: 11,
        direction: "north",
      },
      commands: ["forward"],
    };

    const expected = {
      x: 10,
      y: 12,
      direction: "north",
    };

    expect(rover(input)).toEqual(expected);
  });

  it("returns final position after a single backwards movement command", () => {
    const input: Input = {
      startingPosition: {
        x: 10,
        y: 11,
        direction: "north",
      },
      commands: ["backwards"],
    };

    const expected = {
      x: 10,
      y: 10,
      direction: "north",
    };

    expect(rover(input)).toEqual(expected);
  });

  it("returns final position after multiple movement commands", () => {
    const input: Input = {
      startingPosition: {
        x: 10,
        y: 11,
        direction: "north",
      },
      commands: ["forward", "forward", "forward", "forward"],
    };

    const expected = {
      x: 10,
      y: 15,
      direction: "north",
    };

    expect(rover(input)).toEqual(expected);
  });

  it("returns final position after multiple left and forward commands", () => {
    const input: Input = {
      startingPosition: {
        x: 0,
        y: 0,
        direction: "north",
      },
      commands: ["left", "forward", "left", "left", "forward", "forward"],
    };

    const expected = {
      x: 1,
      y: 0,
      direction: "east",
    };

    expect(rover(input)).toEqual(expected);
  });
});
