import {
  getCoordinateLetter,
  toggleColor,
  getMovePossibilities,
} from "./get-functions.js";
import { addPossibleMove } from "./move.js";

function queenMove(startRow, startColumn, color, maxCell) {
  let listPossibleMove = [];
  const startColumnNumber = getCoordinateLetter(startColumn);
  const oppositeColor = toggleColor(color);
  const countCellYTop = maxCell - startRow;
  const countCellYDown = maxCell - countCellYTop + 1;
  const countCellXRight = maxCell - startColumnNumber;
  const countCellXLeft = maxCell - countCellXRight + 1;

  // mosse in alto
  for (let i = 1; i <= countCellYTop; i++) {
    let element = addPossibleMove(startRow + i, startColumnNumber);
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

  // mosse in basso
  for (let i = 1; i <= countCellYDown; i++) {
    let element = addPossibleMove(startRow - i, startColumnNumber);
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

  // mosse in destra
  for (let i = 1; i <= countCellXRight; i++) {
    let element = addPossibleMove(startRow, startColumnNumber + i);
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

  // mosse in sinistra
  for (let i = 1; i <= countCellXLeft; i++) {
    let element = addPossibleMove(startRow, startColumnNumber - i);
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

  return listPossibleMove;
}

export { queenMove };
