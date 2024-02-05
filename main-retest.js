import {
  getPieceColor,
  getPieceType,
  getCoordinateLetter,
  getLetterCoordinate,
} from "./get-functions.js";

import { kingMoves } from "./king-move.js";

import { movePiece } from "./move.js";

let checkToWhiteKing = false;
let checkToBlackKing = false;
let selectedCell;
let startCell;
let destinationCell;
let piece;
let pieceType;
let pieceColor;
let listPossibleMove = [];
let listPossibleCapture = [];
const maxCell = 9;
const minCell = 0;

document.querySelectorAll(".cell").forEach(function (cell) {
  cell.addEventListener("click", function (event) {
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
      }
    } else if (startCell && startCell !== selectedCell) {
      destinationCell = selectedCell;
      if (destinationCell.firstElementChild) {
        const destinationCellElement = destinationCell.firstElementChild;
        const elementColor = getPieceColor(destinationCellElement);
        if (elementColor === pieceColor) {
          document
            .querySelectorAll(".cell .move")
            .forEach(function (elementMove) {
              elementMove.parentNode.removeChild(elementMove);
            });
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
        listPossibleMove
      );
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
