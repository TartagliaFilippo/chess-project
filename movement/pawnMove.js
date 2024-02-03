import { movePiece } from "./moveLogic.js";
import { enPasantMoveLeft } from "./special/enPasantLeft.js";
import { enPasantMoveRight } from "./special/enPasantRight.js";

function pawnMove(
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
  pieceColor
) {
  let checkDestionationRow = parseInt(startCell.dataset.row);
  let checkCellElement = destinationCell.firstElementChild; // controllo se c'è un pezzo
  let isDestinationOccupied = !!checkCellElement;
  let countCell = Math.abs(destinationCellRow - startCellRow);
  let checkCell;
  let isOccupied;
  let listOccupied = [];

  if (lastMovePawn === startCellColumnToNumber + 1) {
    console.log("entro");
    enPasantMoveRight(selectedPiece, startCell, destinationCell);
  } else if (lastMovePawn === startCellColumnToNumber - 1) {
    enPasantMoveLeft(selectedPiece, startCell, destinationCell);
  }

  if (startCellColumn === destinationCellColumn) {
    //movimento pedoni
    if (pieceColor === "white") {
      if (destinationCellRow > startCellRow) {
        if (startCellRow === 2) {
          checkDestionationRow += 2;
          if (destinationCellRow <= checkDestionationRow) {
            for (let i = 1; i <= countCell; i++) {
              checkCell = document.querySelector(
                `.box[data-letter="${startCellColumn}"][data-row="${
                  startCellRow + i
                }"]`
              );
              isOccupied = !!checkCell.firstChild;
              listOccupied.push(isOccupied);
            }
            if (listOccupied.includes(true)) {
              return;
            } else {
              movePiece(selectedPiece, destinationCell);
              if (countCell === 2) {
                lastMovePawn = destinationCellColumnToNumber;
              } else {
                lastMovePawn = null;
              }
            }
          }
        } else if (startCellRow > 2) {
          checkDestionationRow++;
          if (destinationCellRow === checkDestionationRow) {
            if (isDestinationOccupied === true) {
              return;
            } else {
              movePiece(selectedPiece, destinationCell);
              lastMovePawn = null;
            }
          } else {
            return;
          }
        }
      } else {
        return;
      }
    } else if (pieceColor === "black") {
      if (destinationCellRow < startCellRow) {
        if (startCellRow === 7) {
          checkDestionationRow -= 2;
          if (destinationCellRow >= checkDestionationRow) {
            for (let i = 1; i <= countCell; i++) {
              checkCell = document.querySelector(
                `.box[data-letter="${startCellColumn}"][data-row="${
                  startCellRow - i
                }"]`
              );
              isOccupied = !!checkCell.firstChild;
              listOccupied.push(isOccupied);
            }
            if (listOccupied.includes(true)) {
              return;
            } else {
              movePiece(selectedPiece, destinationCell);
              if (countCell === 2) {
                lastMovePawn = destinationCellColumnToNumber;
              } else {
                lastMovePawn = null;
              }
            }
          }
        } else if (startCellRow < 7) {
          checkDestionationRow--;
          if (destinationCellRow === checkDestionationRow) {
            if (isDestinationOccupied === true) {
              return;
            } else {
              movePiece(selectedPiece, destinationCell);
              lastMovePawn = null;
            }
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
    //cattura pedoni
  } else if (startCellColumnToNumber++ || startCellColumnToNumber--) {
    if (pieceColor === "white") {
      if (destinationCellRow > startCellRow) {
        if (isDestinationOccupied === true) {
          movePiece(selectedPiece, destinationCell);
        } else {
          return;
        }
      }
    } else if (pieceColor == "black") {
      if (destinationCellRow < startCellRow) {
        if (isDestinationOccupied === true) {
          movePiece(selectedPiece, destinationCell);
        } else {
          return;
        }
      }
    } else {
      return;
    }
  } else {
    return;
  }
}

export { pawnMove };
