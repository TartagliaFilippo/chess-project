import { getCoordinateLetter, toggleColor } from "./get-functions.js";
import { addPossibleMove } from "./move.js";

function bishopMove(startRow, startColumn, color, maxCell) {
  let listPossibleMove = [];
  const startColumnNumber = getCoordinateLetter(startColumn);
  const oppositeColor = toggleColor(color);
  const countCellYTop = maxCell - startRow;
  const countCellYDown = maxCell - countCellYTop + 1;
  const countCellXRight = maxCell - startColumnNumber;
  const countCellXLeft = maxCell - countCellXRight + 1;

  // mosse obliqua basso-sinistra
  for (let i = 1; i <= countCellXLeft; i++) {
    let element = addPossibleMove(startRow - i, startColumnNumber - i);
    if (element !== addPossibleMove(startRow, startColumn)) {
      if (!element.firstElementChild) {
        listPossibleMove.push(element);
      } else if (element.firstElementChild) {
        let checkIdPiece = element.firstElementChild.id;
        if (checkIdPiece.includes(oppositeColor)) {
          listPossibleMove.push(element);
          break;
        } else {
          break;
        }
      }
    }
  }

  // mosse obliqua alto-sinistra
  for (let i = 1; i <= countCellXLeft; i++) {
    let element = addPossibleMove(startRow + i, startColumnNumber - i);
    if (element !== addPossibleMove(startRow, startColumn)) {
      if (!element.firstElementChild) {
        listPossibleMove.push(element);
      } else if (element.firstElementChild) {
        let checkIdPiece = element.firstElementChild.id;
        if (checkIdPiece.includes(oppositeColor)) {
          listPossibleMove.push(element);
          break;
        } else {
          break;
        }
      }
    }
  }

  // mosse obliqua basso-destra
  for (let i = 1; i <= countCellXRight; i++) {
    let element = addPossibleMove(startRow - i, startColumnNumber + i);
    if (element !== addPossibleMove(startRow, startColumn)) {
      if (!element.firstElementChild) {
        listPossibleMove.push(element);
      } else if (element.firstElementChild) {
        let checkIdPiece = element.firstElementChild.id;
        if (checkIdPiece.includes(oppositeColor)) {
          listPossibleMove.push(element);
          break;
        } else {
          break;
        }
      }
    }
  }

  // mosse obliqua alto-destra
  for (let i = 1; i <= countCellXRight; i++) {
    let element = addPossibleMove(startRow + i, startColumnNumber + i);
    if (element !== addPossibleMove(startRow, startColumn)) {
      if (!element.firstElementChild) {
        listPossibleMove.push(element);
      } else if (element.firstElementChild) {
        let checkIdPiece = element.firstElementChild.id;
        if (checkIdPiece.includes(oppositeColor)) {
          listPossibleMove.push(element);
          break;
        } else {
          break;
        }
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

export { bishopMove };
