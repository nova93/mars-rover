// 4 directions = N S W E
// movement = Back Forward

// x positive = east, negative = west
// y positive = north, negative = south

type Command = Rotation | Movement;

// TODO: clear up names, these are already confusing to me
type Rotation = "left" | "right";
type Direction = "north" | "east" | "west" | "south";

type Movement = "forward" | "backwards";
// every movement would be 1 tile

// starting position (0, 0) = (x, y);
// starting rotation North

// output = position after all commands
type Position = {
  x: number;
  y: number;
  direction: Direction;
};

export type Input = {
  startingPosition: Position;
  commands?: Command[];
};

export default (input: Input): Position => {
  const { startingPosition, commands } = input;
  if (!commands) return input.startingPosition;

  console.log("startingPosition", startingPosition);

  let currentPosition = startingPosition;
  commands.forEach((command, index) => {
    console.log(`command at index ${index}`, command);
    if (command === "forward" || command === "backwards") {
      const addition = command === "forward" ? 1 : -1;

      switch (currentPosition.direction) {
        case "north":
          currentPosition = {
            ...currentPosition,
            y: currentPosition.y + addition,
          };
          return;

        case "south": {
          currentPosition = {
            ...currentPosition,
            y: currentPosition.y - addition,
          };
          return;
        }

        case "east": {
          currentPosition = {
            ...currentPosition,
            x: currentPosition.x + addition,
          };
          return;
        }

        case "west": {
          currentPosition = {
            ...currentPosition,
            x: currentPosition.x - addition,
          };
          return;
        }

        default:
          console.error("this shouldn't be possible", {
            currentPosition,
            command,
          });
          throw Error("this shouldn't be possible");
      }
    }

    if (command === "left") {
      switch (currentPosition.direction) {
        case "north":
          currentPosition = {
            ...currentPosition,
            direction: "west",
          };
          return;
        case "south":
          currentPosition = {
            ...currentPosition,
            direction: "east",
          };
          return;
        case "east":
          currentPosition = {
            ...currentPosition,
            direction: "north",
          };
          return;
        case "west":
          currentPosition = {
            ...currentPosition,
            direction: "south",
          };
          return;

        default:
          console.error("this shouldn't be possible", {
            currentPosition,
            command,
          });
          throw Error("this shouldn't be possible");
      }
    }
  });

  return currentPosition;
};
