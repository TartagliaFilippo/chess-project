import { movePiece } from "./moveLogic.js";
import { getLetterFromCoordinate } from "../getLogic.js";

function queenMove(
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

  //direzionalità
  if (startCellRow === destinationCellRow) {
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
      }
    } else if (stepDirectionX === "right") {
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
      }
    } else {
      return;
    }
  } else if (startCellColumnToNumber === destinationCellColumnToNumber) {
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
      }
    } else {
      return;
    }
  } else if (stepDirectionY === "up" && stepDirectionX === "left") {
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
      }
    } else {
      return;
    }
  } else if (stepDirectionY === "up" && stepDirectionX === "right") {
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
      }
    } else {
      return;
    }
  } else if (stepDirectionY === "down" && stepDirectionX === "right") {
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
      }
    } else {
      return;
    }
  } else if (stepDirectionY === "down" && stepDirectionX === "left") {
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
      }
    } else {
      return;
    }
  } else {
    return;
  }
}

export { queenMove };
