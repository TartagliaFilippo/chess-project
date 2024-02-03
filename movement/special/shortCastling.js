import { getLetterFromCoordinate } from "../../getLogic.js";

function shortCastling(
  selectedPiece,
  startCell,
  destinationCell,
  startCellRow,
  destinationCellRow,
  startCellColumn,
  destinationCellColumn,
  startCellColumnToNumber,
  destinationCellColumnToNumber,
  whiteKingIsMoved,
  blackKingIsMoved,
  whiteRookIsMoved,
  blackRookIsMoved
) {
  const pieceColor = selectedPiece.id.includes("white") ? "white" : "black";
  const stepDirectionX =
    startCellColumnToNumber > destinationCellColumnToNumber ? "left" : "right";
  const rookElement = document.getElementById(`${pieceColor}-rook-1`);
  let checkCell;
  let isCellOccupied;
  let listOccupied = [];
  let checkRookCell;
  let checkRookElement;
  const checkListOccupied = [false, false, true];

  if (whiteKingIsMoved === false && whiteRookIsMoved === false) {
    if (pieceColor === "white") {
      for (let i = 1; i <= 3; i++) {
        checkCell = document.querySelector(
          `.box[data-letter="${getLetterFromCoordinate(
            startCellColumnToNumber + i
          )}"][data-row="${startCellRow}"]`
        );
        isCellOccupied = !!checkCell.firstChild;
        if (i === 3) {
          checkRookCell = checkCell;
          checkRookElement = checkCell.firstChild;
        }
        listOccupied.push(isCellOccupied);
      }
      if (
        listOccupied.length === checkListOccupied.length &&
        listOccupied.every((value, index) => value === checkListOccupied[index])
      ) {
        if (checkRookElement === rookElement) {
          const firstKingElement = startCell.firstChild;

          const rookElement = document.createElement("img");
          rookElement.src = "./img/chess-pieces/white-rook.svg";
          rookElement.id = "white-rook-1";

          const kingElement = document.createElement("img");
          kingElement.src = "./img/chess-pieces/white-king.svg";
          kingElement.id = "white-king";

          startCell.removeChild(firstKingElement);
          checkRookCell.removeChild(checkRookElement);

          const putRook = document.querySelector(
            `.box[data-letter="f"][data-row="1"]`
          );
          putRook.appendChild(rookElement);

          const putKing = document.querySelector(
            `.box[data-letter="g"][data-row="1"]`
          );
          putKing.appendChild(kingElement);

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
  } else if (blackKingIsMoved === false && blackRookIsMoved === false) {
    if (pieceColor === "black") {
      for (let i = 1; i <= 3; i++) {
        checkCell = document.querySelector(
          `.box[data-letter="${getLetterFromCoordinate(
            startCellColumnToNumber + i
          )}"][data-row="${startCellRow}"]`
        );
        isCellOccupied = !!checkCell.firstChild;
        if (i === 3) {
          checkRookCell = checkCell;
          checkRookElement = checkCell.firstChild;
        }
        listOccupied.push(isCellOccupied);
      }
      if (
        listOccupied.length === checkListOccupied.length &&
        listOccupied.every((value, index) => value === checkListOccupied[index])
      ) {
        if (checkRookElement === rookElement) {
          const firstKingElement = startCell.firstChild;

          const rookElement = document.createElement("img");
          rookElement.src = "./img/chess-pieces/black-rook.svg";
          rookElement.id = "black-rook-1";

          const kingElement = document.createElement("img");
          kingElement.src = "./img/chess-pieces/black-king.svg";
          kingElement.id = "black-king";

          startCell.removeChild(firstKingElement);
          checkRookCell.removeChild(checkRookElement);

          const putRook = document.querySelector(
            `.box[data-letter="f"][data-row="8"]`
          );
          putRook.appendChild(rookElement);

          const putKing = document.querySelector(
            `.box[data-letter="g"][data-row="8"]`
          );
          putKing.appendChild(kingElement);

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
  } else {
    return;
  }
}

export { shortCastling };
