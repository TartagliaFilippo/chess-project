import {
  toggleColor,
  getPieceColor,
  getLetterCoordinate,
} from "./get-functions.js";

function movePiece(piece, startCell, destinationCell, color, listPossibleMove) {
  const hasPiece = destinationCell.firstElementChild;
  const oppositeColor = toggleColor(color);

  if (listPossibleMove.includes(destinationCell)) {
    if (hasPiece) {
      const pieceColor = getPieceColor(hasPiece);
      if (pieceColor !== color) {
        hasPiece.parentNode.removeChild(hasPiece);
        destinationCell.classList.remove(oppositeColor);
      } else {
        return;
      }
    }

    document.querySelectorAll(".cell .move").forEach(function (elementMove) {
      elementMove.parentNode.removeChild(elementMove);
    });

    startCell.classList.remove(color);
    destinationCell.classList.add(color);
    destinationCell.appendChild(piece);
  } else {
    return;
  }
}

function addPossibleMove(row, column, color) {
  const element = document.querySelector(
    `.cell[data-letter="${getLetterCoordinate(column)}"][data-row="${row}"]`
  );

  return element;
}

export { movePiece, addPossibleMove };
