import { movePiece } from "./moveLogic.js";
import { getLetterFromCoordinate } from "../getLogic.js";

function knightMove(
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
  const stepDirectionY = startCellRow > destinationCellRow ? "down" : "up";
  const stepDirectionX =
    startCellColumnToNumber > destinationCellColumnToNumber ? "left" : "right";
  let destinatonCellA;
  let destinatonCellB;
  let listCheck = [];

  if (stepDirectionY === "down" && stepDirectionX === "left") {
    destinatonCellA = document.querySelector(
      `.box[data-letter="${getLetterFromCoordinate(
        startCellColumnToNumber - 1
      )}"][data-row="${startCellRow - 2}"]`
    );
    destinatonCellB = document.querySelector(
      `.box[data-letter="${getLetterFromCoordinate(
        startCellColumnToNumber - 2
      )}"][data-row="${startCellRow - 1}"]`
    );
    listCheck.push(destinatonCellA, destinatonCellB);
    if (listCheck.includes(destinationCell)) {
      movePiece(selectedPiece, destinationCell);
    } else {
      return;
    }
  } else if (stepDirectionY === "up" && stepDirectionX === "left") {
    destinatonCellA = document.querySelector(
      `.box[data-letter="${getLetterFromCoordinate(
        startCellColumnToNumber - 1
      )}"][data-row="${startCellRow + 2}"]`
    );
    destinatonCellB = document.querySelector(
      `.box[data-letter="${getLetterFromCoordinate(
        startCellColumnToNumber - 2
      )}"][data-row="${startCellRow + 1}"]`
    );
    listCheck.push(destinatonCellA, destinatonCellB);
    if (listCheck.includes(destinationCell)) {
      movePiece(selectedPiece, destinationCell);
    } else {
      return;
    }
  } else if (stepDirectionY === "up" && stepDirectionX === "right") {
    destinatonCellA = document.querySelector(
      `.box[data-letter="${getLetterFromCoordinate(
        startCellColumnToNumber + 1
      )}"][data-row="${startCellRow + 2}"]`
    );
    destinatonCellB = document.querySelector(
      `.box[data-letter="${getLetterFromCoordinate(
        startCellColumnToNumber + 2
      )}"][data-row="${startCellRow + 1}"]`
    );
    listCheck.push(destinatonCellA, destinatonCellB);
    if (listCheck.includes(destinationCell)) {
      movePiece(selectedPiece, destinationCell);
    } else {
      return;
    }
  } else if (stepDirectionY === "down" && stepDirectionX === "right") {
    destinatonCellA = document.querySelector(
      `.box[data-letter="${getLetterFromCoordinate(
        startCellColumnToNumber + 1
      )}"][data-row="${startCellRow - 2}"]`
    );
    destinatonCellB = document.querySelector(
      `.box[data-letter="${getLetterFromCoordinate(
        startCellColumnToNumber + 2
      )}"][data-row="${startCellRow - 1}"]`
    );
    listCheck.push(destinatonCellA, destinatonCellB);
    if (listCheck.includes(destinationCell)) {
      movePiece(selectedPiece, destinationCell);
    } else {
      return;
    }
  } else {
    return;
  }
}

export { knightMove };
