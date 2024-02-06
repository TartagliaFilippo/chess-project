import { getCoordinateLetter } from "./get-functions.js";
import { addPossibleMove } from "./move.js";

function knightMove(startRow, startColumn, color) {
  let listPossibleMove = [];
  const checkListMove = [];
  const startColumnNumber = getCoordinateLetter(startColumn);

  const elementTopRight = addPossibleMove(startRow + 2, startColumnNumber + 1);
  checkListMove.push(elementTopRight);
  const elementTopLeft = addPossibleMove(startRow + 2, startColumnNumber - 1);
  checkListMove.push(elementTopLeft);
  const elementDownRight = addPossibleMove(startRow - 2, startColumnNumber + 1);
  checkListMove.push(elementDownRight);
  const elementDownLeft = addPossibleMove(startRow - 2, startColumnNumber - 1);
  checkListMove.push(elementDownLeft);
  const elementLeftTop = addPossibleMove(startRow + 1, startColumnNumber - 2);
  checkListMove.push(elementLeftTop);
  const elementLeftDown = addPossibleMove(startRow - 1, startColumnNumber - 2);
  checkListMove.push(elementLeftDown);
  const elementRightTop = addPossibleMove(startRow + 1, startColumnNumber + 2);
  checkListMove.push(elementRightTop);
  const elementRightDown = addPossibleMove(startRow - 1, startColumnNumber + 2);
  checkListMove.push(elementRightDown);

  for (let index = 0; index < checkListMove.length; index++) {
    let checkMove = checkListMove[index];
    if (checkMove !== null) {
      if (!checkMove.classList.contains(color)) {
        listPossibleMove.push(checkMove);
      }
    }
  }

  for (let i = 0; i < listPossibleMove.length; i++) {
    let possibleCell = listPossibleMove[i];

    const elementMove = document.createElement("div");
    elementMove.classList.add("move");

    possibleCell.appendChild(elementMove);
  }

  return listPossibleMove;
}

export { knightMove };
