import { getCoordinateLetter } from "./get-functions.js";
import { addPossibleMove } from "./move.js";

function kingMoves(startRow, startColumn, color) {
  let listPossibleMove = [];
  const checkListMove = [];
  const startColumnNumber = getCoordinateLetter(startColumn);

  const elementRight = addPossibleMove(startRow, startColumnNumber + 1);
  checkListMove.push(elementRight);
  const elementLeft = addPossibleMove(startRow, startColumnNumber - 1);
  checkListMove.push(elementLeft);
  const elementTop = addPossibleMove(startRow + 1, startColumnNumber);
  checkListMove.push(elementTop);
  const elementDown = addPossibleMove(startRow - 1, startColumnNumber);
  checkListMove.push(elementDown);
  const elementDownRight = addPossibleMove(startRow - 1, startColumnNumber + 1);
  checkListMove.push(elementDownRight);
  const elementDownLeft = addPossibleMove(startRow - 1, startColumnNumber - 1);
  checkListMove.push(elementDownLeft);
  const elementTopRight = addPossibleMove(startRow + 1, startColumnNumber + 1);
  checkListMove.push(elementTopRight);
  const elementTopLeft = addPossibleMove(startRow + 1, startColumnNumber - 1);
  checkListMove.push(elementTopLeft);

  for (let index = 0; index < checkListMove.length; index++) {
    let checkMove = checkListMove[index];

    if (!checkMove.classList.contains(color)) {
      listPossibleMove.push(checkMove);
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

export { kingMoves };
