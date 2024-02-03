import { getLetterFromCoordinate } from "../../getLogic.js";

function enPasantMoveRight(
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
  if (pieceColor === "white") {
    if (startCellRow === 5) {
      const pawnMoveElement = startCell.firstChild;
      const opponentCell = document.querySelector(
        `.box[data-letter="${getLetterFromCoordinate(
          startCellColumnToNumber + 1
        )}"][data-row="${startCellRow}"]`
      );
      if (
        destinationCellColumnToNumber === startCellColumnToNumber + 1 &&
        destinationCellRow === startCellRow + 1
      ) {
        const opponentPawnElement = opponentCell.firstChild;
        const putPawn = document.querySelector(
          `.box[data-letter="${getLetterFromCoordinate(
            startCellColumnToNumber + 1
          )}"][data-row="${startCellRow + 1}"]`
        );

        const pawnWhiteElement = document.createElement("img");
        pawnWhiteElement.src = "./img/chess-pieces/white-pawn.svg";
        pawnWhiteElement.id = `white-pawn-${startCellColumnToNumber - 10}`;

        startCell.removeChild(pawnMoveElement);
        opponentCell.removeChild(opponentPawnElement);
        putPawn.appendChild(pawnWhiteElement);

        if (startCell !== destinationCell) {
          currentPlayer = currentPlayer === "white" ? "black" : "white";
          document.getElementById("turn").innerHTML = currentPlayer;
        }
      } else {
        return;
      }
    } else {
      return;
    }
  } else if (pieceColor === "black") {
    if (startCellRow === 4) {
      const pawnMoveElement = startCell.firstChild;
      const opponentCell = document.querySelector(
        `.box[data-letter="${getLetterFromCoordinate(
          startCellColumnToNumber + 1
        )}"][data-row="${startCellRow}"]`
      );
      if (
        destinationCellColumnToNumber === startCellColumnToNumber + 1 &&
        destinationCellRow === startCellRow - 1
      ) {
        const opponentPawnElement = opponentCell.firstChild;
        const putPawn = document.querySelector(
          `.box[data-letter="${getLetterFromCoordinate(
            startCellColumnToNumber + 1
          )}"][data-row="${startCellRow - 1}"]`
        );

        const pawnBlackElement = document.createElement("img");
        pawnBlackElement.src = "./img/chess-pieces/black-pawn.svg";
        pawnBlackElement.id = `black-pawn-${startCellColumnToNumber - 10}`;

        startCell.removeChild(pawnMoveElement);
        opponentCell.removeChild(opponentPawnElement);
        putPawn.appendChild(pawnBlackElement);

        if (startCell !== destinationCell) {
          currentPlayer = currentPlayer === "white" ? "black" : "white";
          document.getElementById("turn").innerHTML = currentPlayer;
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

export { enPasantMoveRight };
