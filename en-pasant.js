import { getCoordinateLetter } from "./get-functions.js";
import { addPossibleMove } from "./move.js";

function enPasantLeft(startRow, startColumnNumber, lastMove, color) {
  const lastMoveColumnNumber = getCoordinateLetter(lastMove.startColumn);

  if (lastMoveColumnNumber !== undefined) {
    if (color === "white") {
      if (startRow === 5) {
        const enPasantLeft = addPossibleMove(
          startRow + 1,
          startColumnNumber - 1
        );

        if (enPasantLeft !== null) {
          if (startColumnNumber === lastMoveColumnNumber + 1) {
            return enPasantLeft;
          } else {
            return;
          }
        }
      }
    } else if (color === "black") {
      if (startRow === 4) {
        const enPasantLeft = addPossibleMove(
          startRow - 1,
          startColumnNumber - 1
        );

        if (enPasantLeft !== null) {
          if (startColumnNumber === lastMoveColumnNumber + 1) {
            return enPasantLeft;
          } else {
            return;
          }
        }
      }
    }
  }
}

function enPasantRight(startRow, startColumnNumber, lastMove, color) {
  const lastMoveColumnNumber = getCoordinateLetter(lastMove.startColumn);

  if (lastMoveColumnNumber !== undefined) {
    if (color === "white") {
      if (startRow === 5) {
        const enPasantRight = addPossibleMove(
          startRow + 1,
          startColumnNumber + 1
        );

        if (enPasantRight !== null) {
          if (startColumnNumber === lastMoveColumnNumber - 1) {
            return enPasantRight;
          } else {
            return;
          }
        }
      }
    } else if (color === "black") {
      if (startRow === 4) {
        const enPasantRight = addPossibleMove(
          startRow - 1,
          startColumnNumber + 1
        );

        if (enPasantRight !== null) {
          if (startColumnNumber === lastMoveColumnNumber - 1) {
            return enPasantRight;
          } else {
            return;
          }
        }
      }
    }
  }
}

export { enPasantRight, enPasantLeft };
