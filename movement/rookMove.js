import { movePiece } from "./moveLogic.js";
import { getLetterFromCoordinate } from "../getLogic.js";

function rookMove(
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

  if (startCellColumn === destinationCellColumn) {
    //controllo le colonne
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
          ? (whiteRookIsMoved = true)
          : (blackRookIsMoved = true);
      }
    } else if (stepDirectionY === "down") {
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
          ? (whiteRookIsMoved = true)
          : (blackRookIsMoved = true);
      }
    } else {
      return;
    }
  } else if (startCellRow === destinationCellRow) {
    //controllo le righe
    if (stepDirectionX === "right") {
      for (let i = 1; i < countCellX; i++) {
        checkCell = document.querySelector(
          `.box[data-letter="${getLetterFromCoordinate(
            startCellColumnToNumber + i
          )}"][data-row="${startCellRow}"]`
        );
        isCellOccupied = !!checkCell.firstChild;
        listOccupied.push(isCellOccupied);
      }
      if (listOccupied.includes(true)) {
        return;
      } else {
        movePiece(selectedPiece, destinationCell);
        pieceColor === "white"
          ? (whiteRookIsMoved = true)
          : (blackRookIsMoved = true);
      }
    } else if (stepDirectionX === "left") {
      for (let i = 1; i < countCellX; i++) {
        checkCell = document.querySelector(
          `.box[data-letter="${getLetterFromCoordinate(
            startCellColumnToNumber - i
          )}"][data-row="${startCellRow}"]`
        );
        isCellOccupied = !!checkCell.firstChild;
        listOccupied.push(isCellOccupied);
      }
      if (listOccupied.includes(true)) {
        return;
      } else {
        movePiece(selectedPiece, destinationCell);
        pieceColor === "white"
          ? (whiteRookIsMoved = true)
          : (blackRookIsMoved = true);
      }
    } else {
      return;
    }
  } else {
    return;
  }
}

export { rookMove };
