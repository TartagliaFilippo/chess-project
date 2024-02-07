import {
  getPieceColor,
  getPieceType,
  getCoordinateLetter,
  getLetterCoordinate,
  getMovePossibilities,
} from "./get-functions.js";

import { kingMoves } from "./king-move.js";
import { queenMove } from "./queen-move.js";
import { rookMove } from "./rook-move.js";
import { bishopMove } from "./bishop-move.js";
import { knightMove } from "./knight-move.js";
import { pawnMove } from "./pawn-move.js";
import { movePiece } from "./move.js";
import { futureWhiteMoves, futureBlackMoves } from "./piece-position.js";

let whiteKingCell = { row: 1, column: "e" };

let blackKingCell = {
  row: 8,
  column: "e",
};

let checkToWhiteKing = false;
let checkToBlackKing = false;
let selectedCell;
let startCell;
let destinationCell;
let piece;
let pieceType;
let pieceColor;
let listPossibleMove = [];
let listBlackMoves = [];
let listWhiteMoves = [];
const maxCell = 8;
const minCell = 1;

document.querySelectorAll(".cell").forEach(function (cell) {
  cell.addEventListener("click", function (event) {
    // const listTotalMoves = futureBlackMoves();
    // getMovePossibilities(listTotalMoves);

    selectedCell = event.currentTarget;

    if (selectedCell.firstElementChild === null) {
      return;
    }

    if (!startCell) {
      startCell = selectedCell;
      piece = startCell.firstElementChild;
      pieceType = getPieceType(piece);
      pieceColor = getPieceColor(piece);
      piece.style.backgroundColor = "#d2ed4a";
      const startRow = parseInt(startCell.dataset.row);
      const startColumn = startCell.dataset.letter;
      console.log(startColumn, "-", startRow);
      if (pieceType === "king") {
        listPossibleMove = kingMoves(startRow, startColumn, pieceColor);
      } else if (pieceType === "queen") {
        listPossibleMove = queenMove(
          startRow,
          startColumn,
          pieceColor,
          maxCell
        );
      } else if (pieceType === "rook") {
        listPossibleMove = rookMove(startRow, startColumn, pieceColor, maxCell);
      } else if (pieceType === "bishop") {
        listPossibleMove = bishopMove(
          startRow,
          startColumn,
          pieceColor,
          maxCell
        );
      } else if (pieceType === "knight") {
        listPossibleMove = knightMove(startRow, startColumn, pieceColor);
      } else if (pieceType === "pawn") {
        listPossibleMove = pawnMove(startRow, startColumn, pieceColor);
      }
      getMovePossibilities(listPossibleMove);
    } else if (startCell && startCell !== selectedCell) {
      destinationCell = selectedCell;
      // elimino gli elementi "move"
      document.querySelectorAll(".cell .move").forEach(function (elementMove) {
        elementMove.parentNode.removeChild(elementMove);
      });

      if (destinationCell.firstElementChild) {
        const destinationCellElement = destinationCell.firstElementChild;
        const elementColor = getPieceColor(destinationCellElement);
        if (elementColor === pieceColor) {
          piece.style.backgroundColor = "";
          piece = null;
          startCell = null;
          pieceType = null;
          pieceColor = null;
          return;
        }
      }
      movePiece(
        piece,
        startCell,
        destinationCell,
        pieceColor,
        listPossibleMove,
        whiteKingCell,
        blackKingCell
      );
      console.log("king: ", whiteKingCell);
      piece.style.backgroundColor = "";
      startCell = null;
      destinationCell = null;
      piece = null;
      pieceType = null;
      pieceColor = null;
      listPossibleMove = [];
    }
  });
});
