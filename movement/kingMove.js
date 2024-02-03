import { movePiece } from "./moveLogic.js";
import { getLetterFromCoordinate } from "../getLogic.js";

import { shortCastling } from "./special/shortCastling.js";
import { longCastling } from "./special/longCastling.js";

function kingMove(
  selectedPiece,
  startCell,
  destinationCell,
  startCellRow,
  destinationCellRow,
  startCellColumn,
  destinationCellColumn,
  startCellColumnToNumber,
  destinationCellColumnToNumber
) {
  let countCellY = Math.abs(startCellRow - destinationCellRow);
  let countCellX = Math.abs(
    startCellColumnToNumber - destinationCellColumnToNumber
  );
  const stepDirectionY = startCellRow > destinationCellRow ? "down" : "up";
  const stepDirectionX =
    startCellColumnToNumber > destinationCellColumnToNumber ? "left" : "right";
  let checkCell;
  let isCellOccupied;
  let listOccupied = [];

  if (
    (pieceColor === "white" &&
      destinationCellRow === 1 &&
      destinationCellColumn === "g") ||
    (pieceColor === "black" &&
      destinationCellRow === 8 &&
      destinationCellColumn === "g")
  ) {
    shortCastling(
      selectedPiece,
      startCell,
      destinationCell,
      startCellRow,
      destinationCellRow,
      startCellColumn,
      destinationCellColumn,
      startCellColumnToNumber,
      destinationCellColumnToNumber,
      blackKingIsMoved,
      whiteKingIsMoved,
      blackRookIsMoved,
      whiteRookIsMoved
    );
  }

  if (
    (pieceColor === "white" &&
      destinationCellRow === 1 &&
      destinationCellColumn === "c") ||
    (pieceColor === "black" &&
      destinationCellRow === 8 &&
      destinationCellColumn === "c")
  ) {
    longCastling(
      selectedPiece,
      startCell,
      destinationCell,
      startCellRow,
      destinationCellRow,
      startCellColumn,
      destinationCellColumn,
      startCellColumnToNumber,
      destinationCellColumnToNumber,
      blackKingIsMoved,
      whiteKingIsMoved,
      blackRookIsMoved,
      whiteRookIsMoved
    );
  }

  if (startCellRow === destinationCellRow) {
    if (destinationCellColumnToNumber === startCellColumnToNumber - 1) {
      //orizzontale
      if (stepDirectionX === "left") {
        for (let i = 1; i < countCellX; i++) {
          checkCell = document.querySelector(
            `.box[data-letter="${getLetterFromCoordinate(
              startCellColumnToNumber - i
            )}"][data-row="${startCellRow}"]`
          );
          isCellOccupied = !!checkCell.firstChild;
          listOccupied.push(isCellOccupied);
          console.log("i:", i);
        }
        if (listOccupied.includes(true)) {
          return;
        } else {
          movePiece(selectedPiece, destinationCell);
          pieceColor === "white"
            ? (whiteKingIsMoved = true)
            : (blackKingIsMoved = true);
        }
      } else {
        return;
      }
    } else if (destinationCellColumnToNumber === startCellColumnToNumber + 1) {
      if (stepDirectionX === "right") {
        for (let i = 1; i < countCellX; i++) {
          checkCell = document.querySelector(
            `.box[data-letter="${getLetterFromCoordinate(
              startCellColumnToNumber + i
            )}"][data-row="${startCellRow}"]`
          );
          isCellOccupied = !!checkCell.firstChild;
          listOccupied.push(isCellOccupied);
          console.log("i:", i);
        }
        if (listOccupied.includes(true)) {
          return;
        } else {
          movePiece(selectedPiece, destinationCell);
          pieceColor === "white"
            ? (whiteKingIsMoved = true)
            : (blackKingIsMoved = true);
        }
      } else {
        return;
      }
    } else {
      return;
    }
  } else if (startCellColumnToNumber === destinationCellColumnToNumber) {
    if (destinationCellRow === startCellRow + 1) {
      //verticale
      if (stepDirectionY === "up") {
        for (let i = 1; i < countCellY; i++) {
          checkCell = document.querySelector(
            `.box[data-letter="${startCellColumn}"][data-row="${
              startCellRow + i
            }"]`
          );
          isCellOccupied = !!checkCell.firstChild;
          listOccupied.push(isCellOccupied);
        }
        if (listOccupied.includes(true)) {
          return;
        } else {
          movePiece(selectedPiece, destinationCell);
          pieceColor === "white"
            ? (whiteKingIsMoved = true)
            : (blackKingIsMoved = true);
        }
      } else {
        return;
      }
    } else if (destinationCellRow === startCellRow - 1) {
      if (stepDirectionY === "down") {
        for (let i = 1; i < countCellY; i++) {
          checkCell = document.querySelector(
            `.box[data-letter="${startCellColumn}"][data-row="${
              startCellRow - i
            }"]`
          );
          isCellOccupied = !!checkCell.firstChild;
          listOccupied.push(isCellOccupied);
        }
        if (listOccupied.includes(true)) {
          return;
        } else {
          movePiece(selectedPiece, destinationCell);
          pieceColor === "white"
            ? (whiteKingIsMoved = true)
            : (blackKingIsMoved = true);
        }
      } else {
        return;
      }
    } else {
      return;
    }
  } else if (stepDirectionY === "up" && stepDirectionX === "left") {
    if (
      destinationCellRow === startCellRow + 1 &&
      destinationCellColumnToNumber === startCellColumnToNumber - 1
    ) {
      //obliquo alto sinistra
      if (countCellX === countCellY) {
        for (let i = 1; i < countCellX; i++) {
          checkCell = document.querySelector(
            `.box[data-letter="${getLetterFromCoordinate(
              startCellColumnToNumber - i
            )}"][data-row="${startCellRow + i}"]`
          );
          isCellOccupied = !!checkCell.firstChild;
          listOccupied.push(isCellOccupied);
        }
        if (listOccupied.includes(true)) {
          return;
        } else {
          movePiece(selectedPiece, destinationCell);
          pieceColor === "white"
            ? (whiteKingIsMoved = true)
            : (blackKingIsMoved = true);
        }
      } else {
        return;
      }
    } else {
      return;
    }
  } else if (stepDirectionY === "up" && stepDirectionX === "right") {
    if (
      destinationCellRow === startCellRow + 1 &&
      destinationCellColumnToNumber === startCellColumnToNumber + 1
    ) {
      //obliquo alto destra
      if (countCellX === countCellY) {
        for (let i = 1; i < countCellX; i++) {
          checkCell = document.querySelector(
            `.box[data-letter="${getLetterFromCoordinate(
              startCellColumnToNumber + i
            )}"][data-row="${startCellRow + i}"]`
          );
          isCellOccupied = !!checkCell.firstChild;
          listOccupied.push(isCellOccupied);
        }
        if (listOccupied.includes(true)) {
          return;
        } else {
          movePiece(selectedPiece, destinationCell);
          pieceColor === "white"
            ? (whiteKingIsMoved = true)
            : (blackKingIsMoved = true);
        }
      } else {
        return;
      }
    } else {
      return;
    }
  } else if (stepDirectionY === "down" && stepDirectionX === "right") {
    if (
      destinationCellRow === startCellRow - 1 &&
      destinationCellColumnToNumber === startCellColumnToNumber + 1
    ) {
      //obliquo basso destra
      if (countCellX === countCellY) {
        for (let i = 1; i < countCellX; i++) {
          checkCell = document.querySelector(
            `.box[data-letter="${getLetterFromCoordinate(
              startCellColumnToNumber + i
            )}"][data-row="${startCellRow - i}"]`
          );
          isCellOccupied = !!checkCell.firstChild;
          listOccupied.push(isCellOccupied);
        }
        if (listOccupied.includes(true)) {
          return;
        } else {
          movePiece(selectedPiece, destinationCell);
          pieceColor === "white"
            ? (whiteKingIsMoved = true)
            : (blackKingIsMoved = true);
        }
      } else {
        return;
      }
    } else {
      return;
    }
  } else if (stepDirectionY === "down" && stepDirectionX === "left") {
    if (
      destinationCellRow === startCellRow - 1 &&
      destinationCellColumnToNumber === startCellColumnToNumber - 1
    ) {
      //obliquo basso sinistra
      if (countCellX === countCellY) {
        for (let i = 1; i < countCellX; i++) {
          checkCell = document.querySelector(
            `.box[data-letter="${getLetterFromCoordinate(
              startCellColumnToNumber - i
            )}"][data-row="${startCellRow - i}"]`
          );
          isCellOccupied = !!checkCell.firstChild;
          listOccupied.push(isCellOccupied);
        }
        if (listOccupied.includes(true)) {
          return;
        } else {
          movePiece(selectedPiece, destinationCell);
          pieceColor === "white"
            ? (whiteKingIsMoved = true)
            : (blackKingIsMoved = true);
        }
      } else {
        return;
      }
    } else {
      return;
    }
  } else {
    return;
  }
}

export { kingMove };
