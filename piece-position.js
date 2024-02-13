import { getPieceType } from "./get-functions.js";
import { queenMove } from "./queen-move.js";
import { rookMove } from "./rook-move.js";
import { knightMove } from "./knight-move.js";
import { bishopMove } from "./bishop-move.js";
import { kingMoves } from "./king-move.js";
import { pawnMove } from "./pawn-move.js";

function elementsOnBoard(color) {
  const listElements = [];
  document.querySelectorAll(".cell").forEach(function (cell) {
    if (cell.classList.contains(color)) {
      const elementType = getPieceType(cell.firstElementChild);
      const elementRow = parseInt(cell.dataset.row);
      const elementColumn = cell.dataset.letter;

      listElements.push({
        type: elementType,
        row: elementRow,
        column: elementColumn,
      });
    }
  });
  return listElements;
}

function futureMoves(color, lastMove) {
  const listElements = elementsOnBoard(color);
  let totalMoves = [];

  listElements.forEach((element) => {
    let listMoves = [];

    switch (element.type) {
      case "king":
        break;
      case "queen":
        listMoves = queenMove(element.row, element.column, color, 8);
        break;
      case "rook":
        listMoves = rookMove(element.row, element.column, color, 8);
        break;
      case "bishop":
        listMoves = bishopMove(element.row, element.column, color, 8);
        break;
      case "knight":
        listMoves = knightMove(element.row, element.column, color);
        break;
      case "pawn":
        listMoves = pawnMove(element.row, element.column, lastMove, color);
        break;
      default:
        break;
    }

    totalMoves.push(...listMoves);
  });

  return totalMoves;
}

export { elementsOnBoard, futureMoves };
