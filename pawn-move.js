import { getCoordinateLetter, toggleColor } from "./get-functions.js";
import { addPossibleMove } from "./move.js";

function pawnMove(startRow, startColumn, color) {
  let listPossibleMove = [];
  const startColumnNumber = getCoordinateLetter(startColumn);
  const oppositeColor = toggleColor(color);
  const basicWhiteRow = 2;
  const basicBlackRow = 7;

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

  for (let i = 0; i < listPossibleMove.length; i++) {
    let possibleCell = listPossibleMove[i];

    const elementMove = document.createElement("div");
    elementMove.classList.add("move");

    possibleCell.appendChild(elementMove);
  }

  return listPossibleMove;
}

export { pawnMove };
