import { getPieceType } from "./get-functions.js";
import { queenMove } from "./queen-move.js";
import { rookMove } from "./rook-move.js";
import { knightMove } from "./knight-move.js";
import { bishopMove } from "./bishop-move.js";
import { kingMoves } from "./king-move.js";
import { pawnMove } from "./pawn-move.js";

function whiteElementsOnBoard() {
  const listWhiteElements = [];
  document.querySelectorAll(".cell").forEach(function (cell) {
    const listWhiteCell = [];

    cell.classList.contains("white") ? listWhiteCell.push(cell) : "";

    for (let i = 0; i < listWhiteCell.length; i++) {
      const elementType = getPieceType(listWhiteCell[i].firstElementChild);
      const elementRow = listWhiteCell[i].dataset.row;
      const elementColumn = listWhiteCell[i].dataset.letter;

      const element = {
        type: elementType,
        row: elementRow,
        column: elementColumn,
      };

      listWhiteElements.push(element);
    }
  });
  return listWhiteElements;
}

function blackElementsOnBoard() {
  const listBlackElements = [];
  document.querySelectorAll(".cell").forEach(function (cell) {
    const listBlackCell = [];

    cell.classList.contains("black") ? listBlackCell.push(cell) : "";

    for (let i = 0; i < listBlackCell.length; i++) {
      const elementType = getPieceType(listBlackCell[i].firstElementChild);
      const elementRow = listBlackCell[i].dataset.row;
      const elementColumn = listBlackCell[i].dataset.letter;

      const element = {
        type: elementType,
        row: elementRow,
        column: elementColumn,
      };

      listBlackElements.push(element);
    }
  });
  return listBlackElements;
}

function futureWhiteMoves() {
  const listElements = whiteElementsOnBoard();
  let totalWhiteMoves = [];
  let listMoves = [];

  for (let i = 0; i < listElements.length; i++) {
    const elementType = listElements[i].type;
    const elementRow = parseInt(listElements[i].row);
    const elmentColumn = listElements[i].column;

    if (elementType === "king") {
      listMoves = kingMoves(elementRow, elmentColumn, "white");
    } else if (elementType === "queen") {
      listMoves = queenMove(elementRow, elmentColumn, "white", 8);
    } else if (elementType === "rook") {
      listMoves = rookMove(elementRow, elmentColumn, "white", 8);
    } else if (elementType === "bishop") {
      listMoves = bishopMove(elementRow, elmentColumn, "white", 8);
    } else if (elementType === "knight") {
      listMoves = knightMove(elementRow, elmentColumn, "white");
    } else if (elementType === "pawn") {
      listMoves = pawnMove(elementRow, elmentColumn, "white");
    }

    totalWhiteMoves = [...totalWhiteMoves, ...listMoves];
  }

  return totalWhiteMoves;
}

function futureBlackMoves() {
  const listElements = blackElementsOnBoard();
  let totalBlackMoves = [];
  let listMoves = [];

  for (let i = 0; i < listElements.length; i++) {
    const elementType = listElements[i].type;
    const elementRow = parseInt(listElements[i].row);
    const elmentColumn = listElements[i].column;

    if (elementType === "king") {
      listMoves = kingMoves(elementRow, elmentColumn, "white");
    } else if (elementType === "queen") {
      listMoves = queenMove(elementRow, elmentColumn, "white", 8);
    } else if (elementType === "rook") {
      listMoves = rookMove(elementRow, elmentColumn, "white", 8);
    } else if (elementType === "bishop") {
      listMoves = bishopMove(elementRow, elmentColumn, "white", 8);
    } else if (elementType === "knight") {
      listMoves = knightMove(elementRow, elmentColumn, "white");
    } else if (elementType === "pawn") {
      listMoves = pawnMove(elementRow, elmentColumn, "white");
    }

    totalBlackMoves = [...totalBlackMoves, ...listMoves];
  }

  return totalBlackMoves;
}

export {
  whiteElementsOnBoard,
  blackElementsOnBoard,
  futureWhiteMoves,
  futureBlackMoves,
};
