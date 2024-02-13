import {
  getPieceColor,
  getPieceType,
  getCoordinateLetter,
  getLetterCoordinate,
  getMovePossibilities,
  getKingPosition,
  getCurrentTurn,
} from "./get-functions.js";

import { kingMoves } from "./king-move.js";
import { queenMove } from "./queen-move.js";
import { rookMove } from "./rook-move.js";
import { bishopMove } from "./bishop-move.js";
import { knightMove } from "./knight-move.js";
import { pawnMove } from "./pawn-move.js";
import { movePiece, controlMove, getLastMove } from "./move.js";
import { futureMoves, elementsOnBoard } from "./piece-position.js";
import { checkToTheKing, getColorCheck } from "./check.js";

let whiteKingCell = { row: 1, column: "e" };

let blackKingCell = {
  row: 8,
  column: "e",
};

const lastMove = {
  pieceName: "",
  pieceColor: "",
  startCell: "",
  destinationCell: "",
  startRow: "",
  destinationRow: "",
  startColumn: "",
  destinationColumn: "",
};

let checkToWhiteKing = false;
let checkToBlackKing = false;
let whiteKingIsMoved = false;
let blackKingIsMoved = false;
let whiteARookIsMoved = false;
let blackARookIsMoved = false;
let whiteHRookIsMoved = false;
let blackHRookIsMoved = false;
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
let currentTurn = "white";
document.getElementById("turn").innerHTML = currentTurn;

document.querySelectorAll(".cell").forEach(function (cell) {
  cell.addEventListener("click", function (event) {
    //identifico la cella cliccata
    selectedCell = event.currentTarget;

    //se non c'è un elemento nella cella non succede nulla
    if (selectedCell.firstElementChild === null) {
      return;
    }

    if (!startCell) {
      //seleziono la cella cliccata
      startCell = selectedCell;
      //identifico l'elemento della cella
      piece = startCell.firstElementChild;
      //identifico il tipo di pezzo
      pieceType = getPieceType(piece);
      // identifico il colore
      pieceColor = getPieceColor(piece);
      //controllo se il colore del pezzo è corretto altrimenti non viene selezionato nessun pezzo
      if (pieceColor !== currentTurn) {
        selectedCell = null;
        startCell = null;
        return;
      }
      //al pezzo selezionato assegno un colore di background
      piece.style.backgroundColor = "#d2ed4a";
      //identifico la riga nella quale di trova il pezzo
      const startRow = parseInt(startCell.dataset.row);
      //identifico la colonna del pezzo
      const startColumn = startCell.dataset.letter;
      // console.log(startColumn, "-", startRow); identifica la cella
      // in base al tipo del pezzo identifico le caselle nelle quale può muoversi
      if (pieceType === "king") {
        listPossibleMove = kingMoves(
          startRow,
          startColumn,
          pieceColor,
          whiteKingIsMoved,
          blackKingIsMoved,
          whiteARookIsMoved,
          blackARookIsMoved,
          whiteHRookIsMoved,
          blackHRookIsMoved
        );
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
        listPossibleMove = pawnMove(
          startRow,
          startColumn,
          lastMove,
          pieceColor
        );
      }
      //identifico a livello visivo le celle che posso cliccare come destinazione
      getMovePossibilities(listPossibleMove);
      //condizione per la cella di destinazione
    } else if (startCell && startCell !== selectedCell) {
      //condizione per identificare la cella di destinazione
      if (listPossibleMove.includes(selectedCell)) {
        destinationCell = selectedCell;
      } else if (!listPossibleMove.includes(selectedCell)) {
        selectedCell = null;
        piece.style.backgroundColor = "";
        piece = null;
        startCell = null;
        pieceType = null;
        pieceColor = null;
        document
          .querySelectorAll(".cell .move")
          .forEach(function (elementMove) {
            elementMove.parentNode.removeChild(elementMove);
          });
        return;
      }

      // elimino gli elementi "move"
      document.querySelectorAll(".cell .move").forEach(function (elementMove) {
        elementMove.parentNode.removeChild(elementMove);
      });

      //condizione se seleziono un pezzo dello stesso colore
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

      //movimento o cattura dei pezzi
      movePiece(
        piece,
        startCell,
        destinationCell,
        pieceColor,
        listPossibleMove,
        whiteKingCell,
        blackKingCell,
        lastMove
      );

      //tengo traccia della posizione dei 2 re
      let whiteKing = getKingPosition(whiteKingCell.row, whiteKingCell.column);
      let blackKing = getKingPosition(blackKingCell.row, blackKingCell.column);

      //condizioni pper gestire l'arrocco
      if (piece.id === "white-king") {
        whiteKingIsMoved = controlMove(
          startCell,
          destinationCell,
          whiteKingIsMoved
        );
      } else if (piece.id === "black-king") {
        blackKingIsMoved = controlMove(
          startCell,
          destinationCell,
          blackKingIsMoved
        );
      } else if (piece.id === "white-rook-a") {
        whiteARookIsMoved = controlMove(
          startCell,
          destinationCell,
          whiteARookIsMoved
        );
      } else if (piece.id === "white-rook-h") {
        whiteHRookIsMoved = controlMove(
          startCell,
          destinationCell,
          whiteHRookIsMoved
        );
      } else if (piece.id === "black-rook-a") {
        blackARookIsMoved = controlMove(
          startCell,
          destinationCell,
          blackARookIsMoved
        );
      } else if (piece.id === "black-rook-h") {
        blackHRookIsMoved = controlMove(
          startCell,
          destinationCell,
          blackHRookIsMoved
        );
      }

      //tengo traccia dell'ultima mossa
      getLastMove(piece, startCell, destinationCell, lastMove);

      //elimino i dati del pezzo selezionato
      piece.style.backgroundColor = "";
      startCell = null;
      destinationCell = null;
      piece = null;
      pieceType = null;
      pieceColor = null;
      listPossibleMove = [];

      //identifico le varie mosse possono fare i pezzi sulla scacchiera
      listWhiteMoves = futureMoves("white", lastMove);
      listBlackMoves = futureMoves("black", lastMove);

      //gestione dello scacco al re
      checkToWhiteKing = checkToTheKing(
        listBlackMoves,
        whiteKing,
        checkToWhiteKing
      );

      checkToBlackKing = checkToTheKing(
        listWhiteMoves,
        blackKing,
        checkToBlackKing
      );

      //se c'è lo scacco cambio il background-color
      getColorCheck(whiteKing, checkToWhiteKing);
      getColorCheck(blackKing, checkToBlackKing);

      //gestisco il turno di gioco
      currentTurn = getCurrentTurn(currentTurn);
    }
  });
});
