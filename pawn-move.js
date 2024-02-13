import { enPasantRight, enPasantLeft } from "./en-pasant.js";
import { getCoordinateLetter, toggleColor } from "./get-functions.js";
import { addPossibleMove } from "./move.js";

function pawnMove(startRow, startColumn, lastMove, color) {
  let listPossibleMove = [];
  const startColumnNumber = getCoordinateLetter(startColumn);
  const oppositeColor = toggleColor(color);
  const basicWhiteRow = 2;
  const basicBlackRow = 7;
  if (lastMove !== undefined) {
    if (lastMove.pieceName !== "") {
      const specialRightMove = enPasantRight(
        startRow,
        startColumnNumber,
        lastMove,
        color
      );

      const specialLeftMove = enPasantLeft(
        startRow,
        startColumnNumber,
        lastMove,
        color
      );

      if (lastMove.pieceName.includes("pawn")) {
        if (specialRightMove !== undefined) {
          listPossibleMove.push(specialRightMove);
        } else if (specialLeftMove !== undefined) {
          listPossibleMove.push(specialLeftMove);
        }
      }
    }
  }

  if (color === "white") {
    if (startRow >= basicWhiteRow) {
      let element = addPossibleMove(startRow + 1, startColumnNumber);
      if (startRow === basicWhiteRow) {
        let firstPawnMove = addPossibleMove(startRow + 2, startColumnNumber);
        if (!firstPawnMove.firstElementChild && !element.firstChild) {
          listPossibleMove.push(firstPawnMove);
        }
      }
      if (!element.firstElementChild) {
        listPossibleMove.push(element);
      }
      let oppositeElementRight = addPossibleMove(
        startRow + 1,
        startColumnNumber + 1
      );
      let oppositeElementLeft = addPossibleMove(
        startRow + 1,
        startColumnNumber - 1
      );
      if (oppositeElementRight !== null) {
        if (oppositeElementRight.firstElementChild) {
          let oppositeElement = oppositeElementRight.classList;
          if (oppositeElement.contains(oppositeColor)) {
            listPossibleMove.push(oppositeElementRight);
          }
        }
      }
      if (oppositeElementLeft !== null) {
        if (oppositeElementLeft.firstElementChild) {
          let oppositeElement = oppositeElementLeft.classList;
          if (oppositeElement.contains(oppositeColor)) {
            listPossibleMove.push(oppositeElementLeft);
          }
        }
      }
    } else {
      return;
    }
  } else if (color === "black") {
    if (startRow <= basicBlackRow) {
      let element = addPossibleMove(startRow - 1, startColumnNumber);
      if (startRow === basicBlackRow) {
        let firstPawnMove = addPossibleMove(startRow - 2, startColumnNumber);
        if (!firstPawnMove.firstElementChild && !element.firstElementChild) {
          listPossibleMove.push(firstPawnMove);
        }
      }
      if (!element.firstChild) {
        listPossibleMove.push(element);
      }
      let oppositeElementRight = addPossibleMove(
        startRow - 1,
        startColumnNumber + 1
      );
      let oppositeElementLeft = addPossibleMove(
        startRow - 1,
        startColumnNumber - 1
      );
      if (oppositeElementRight !== null) {
        if (oppositeElementRight.firstElementChild) {
          let oppositeElement = oppositeElementRight.classList;
          if (oppositeElement.contains(oppositeColor)) {
            listPossibleMove.push(oppositeElementRight);
          }
        }
      }
      if (oppositeElementLeft !== null) {
        if (oppositeElementLeft.firstElementChild) {
          let oppositeElement = oppositeElementLeft.classList;
          if (oppositeElement.contains(oppositeColor)) {
            listPossibleMove.push(oppositeElementLeft);
          }
        }
      }
    } else {
      return;
    }
  } else {
    return;
  }

  return listPossibleMove;
}

export { pawnMove };
