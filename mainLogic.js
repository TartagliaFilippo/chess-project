import {
  getPieceType,
  getPieceColor,
  getCoordinateLetter,
} from "./getLogic.js";
import { pawnMove } from "./movement/pawnMove.js";
import { rookMove } from "./movement/rookMove.js";
import { bishopMove } from "./movement/bishopMove.js";
import { knightMove } from "./movement/knightMove.js";
import { queenMove } from "./movement/queenMove.js";
import { kingMove } from "./movement/kingMove.js";

let selectedPiece;
let pieceType;
let pieceColor;
let startCell;
let destinationCell;
let startCellRow;
let startCellColumn;
let destinationCellRow;
let destinationCellColumn;
let lastMovePawn = null;
let whiteKingIsMoved = false;
let blackKingIsMoved = false;
let whiteRookIsMoved = false;
let blackRookIsMoved = false;
let startCellColumnToNumber;
let destinationCellColumnToNumber;
let currentPlayer = "white";
document.getElementById("turn").innerHTML = currentPlayer;

document.querySelectorAll(".box").forEach(function (cell) {
  cell.addEventListener("click", function (event) {
    const clickedCell = event.currentTarget;
    const clickedRow = event.currentTarget.dataset.row;
    const clickedColumn = event.currentTarget.dataset.letter;

    if (!selectedPiece) {
      // seleziona il pezzo cliccato
      selectedPiece = clickedCell.firstElementChild;
      startCell = clickedCell;
      pieceType = getPieceType(selectedPiece);
      pieceColor = getPieceColor(selectedPiece);
      console.log(pieceColor + "-" + pieceType);

      startCellRow = parseInt(startCell.dataset.row);
      startCellColumn = startCell.dataset.letter;
      let startCellColumnToNumber = getCoordinateLetter(startCell);

      if (pieceColor === currentPlayer) {
        selectedPiece.style.backgroundColor = "#d2ed4a";
      } else {
        selectedPiece = null;
      }
    } else {
      // gestisco il clic sulla casella di destinazione solo se un pezzo è stato selezionato
      destinationCell = clickedCell;
      destinationCellRow = parseInt(destinationCell.dataset.row);
      destinationCellColumn = destinationCell.dataset.letter;
      let destinationCellColumnToNumber = getCoordinateLetter(destinationCell);

      // MUOVO il pezzo
      if (pieceType === "pawn") {
        pawnMove(
          selectedPiece,
          startCell,
          destinationCell,
          startCellRow,
          destinationCellRow,
          startCellColumn,
          destinationCellColumn,
          startCellColumnToNumber,
          destinationCellColumnToNumber,
          lastMovePawn,
          pieceColor,
          currentPlayer
        );
      } else if (pieceType === "rook") {
        rookMove(
          selectedPiece,
          startCell,
          destinationCell,
          startCellRow,
          destinationCellRow,
          startCellColumn,
          destinationCellColumn,
          startCellColumnToNumber,
          destinationCellColumnToNumber,
          currentPlayer
        );
      } else if (pieceType === "bishop") {
        bishopMove(
          selectedPiece,
          startCell,
          destinationCell,
          startCellRow,
          destinationCellRow,
          startCellColumn,
          destinationCellColumn,
          startCellColumnToNumber,
          destinationCellColumnToNumber,
          currentPlayer
        );
      } else if (pieceType === "knight") {
        knightMove(
          selectedPiece,
          startCell,
          destinationCell,
          startCellRow,
          destinationCellRow,
          startCellColumn,
          destinationCellColumn,
          startCellColumnToNumber,
          destinationCellColumnToNumber,
          currentPlayer
        );
      } else if (pieceType === "queen") {
        queenMove(
          selectedPiece,
          startCell,
          destinationCell,
          startCellRow,
          destinationCellRow,
          startCellColumn,
          destinationCellColumn,
          startCellColumnToNumber,
          destinationCellColumnToNumber,
          currentPlayer
        );
      } else if (pieceType === "king") {
        kingMove(
          selectedPiece,
          startCell,
          destinationCell,
          startCellRow,
          destinationCellRow,
          startCellColumn,
          destinationCellColumn,
          startCellColumnToNumber,
          destinationCellColumnToNumber,
          currentPlayer
        );
      }

      selectedPiece.style.backgroundColor = "";
      selectedPiece = null;
    }
  });
});
