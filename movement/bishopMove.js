import { movePiece } from "./moveLogic.js";
import { getLetterFromCoordinate } from "../getLogic.js";

function bishopMove(
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

  if (stepDirectionY === "down" && stepDirectionX === "left") {
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
  } else if (stepDirectionY === "down" && stepDirectionX === "right") {
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
  } else if (stepDirectionY === "up" && stepDirectionX === "left") {
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
  } else {
    return;
  }
}

export { bishopMove };
