import {
  toggleColor,
  getPieceColor,
  getLetterCoordinate,
} from "./get-functions.js";

function movePiece(
  piece,
  startCell,
  destinationCell,
  color,
  listPossibleMove,
  whiteKingCell,
  blackKingCell
) {
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

    destinationShortCastle(piece, destinationCell, color);
    destinationLongCastle(piece, destinationCell, color);

    if (piece.id === "white-king") {
      whiteKingCell.row = destinationCell.dataset.row;
      whiteKingCell.column = destinationCell.dataset.letter;
    } else if (piece.id === "black-king") {
      blackKingCell.row = destinationCell.dataset.row;
      blackKingCell.column = destinationCell.dataset.letter;
    }
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

function destinationShortCastle(piece, destinationCell, color) {
  if (piece.id.includes("king")) {
    if (color === "white") {
      const destinationCastle = document.querySelector(
        `.cell[data-letter="g"][data-row="1"]`
      );
      if (destinationCell === destinationCastle) {
        const rookCell = document.querySelector(
          `.cell[data-letter="h"][data-row="1"]`
        );

        if (rookCell.firstElementChild) {
          const rookPice = rookCell.firstElementChild;
          const destinationRook = document.querySelector(
            `.cell[data-letter="f"][data-row="1"]`
          );
          rookCell.removeChild(rookPice);
          rookCell.classList.remove(color);
          destinationRook.classList.add(color);
          destinationRook.appendChild(rookPice);
        }
      }
    } else if (color === "black") {
      const destinationCastle = document.querySelector(
        `.cell[data-letter="g"][data-row="8"]`
      );
      if (destinationCell === destinationCastle) {
        const rookCell = document.querySelector(
          `.cell[data-letter="h"][data-row="8"]`
        );

        if (rookCell.firstElementChild) {
          const rookPice = rookCell.firstElementChild;
          const destinationRook = document.querySelector(
            `.cell[data-letter="f"][data-row="8"]`
          );
          rookCell.removeChild(rookPice);
          rookCell.classList.remove(color);
          destinationRook.classList.add(color);
          destinationRook.appendChild(rookPice);
        }
      }
    }
  }
}

function destinationLongCastle(piece, destinationCell, color) {
  if (piece.id.includes("king")) {
    if (color === "white") {
      const destinationCastle = document.querySelector(
        `.cell[data-letter="c"][data-row="1"]`
      );
      if (destinationCell === destinationCastle) {
        const rookCell = document.querySelector(
          `.cell[data-letter="a"][data-row="1"]`
        );

        if (rookCell.firstElementChild) {
          const rookPice = rookCell.firstElementChild;
          const destinationRook = document.querySelector(
            `.cell[data-letter="d"][data-row="1"]`
          );
          rookCell.removeChild(rookPice);
          rookCell.classList.remove(color);
          destinationRook.classList.add(color);
          destinationRook.appendChild(rookPice);
        }
      }
    } else if (color === "black") {
      const destinationCastle = document.querySelector(
        `.cell[data-letter="c"][data-row="8"]`
      );
      if (destinationCell === destinationCastle) {
        const rookCell = document.querySelector(
          `.cell[data-letter="a"][data-row="8"]`
        );

        if (rookCell.firstElementChild) {
          const rookPice = rookCell.firstElementChild;
          const destinationRook = document.querySelector(
            `.cell[data-letter="d"][data-row="8"]`
          );
          rookCell.removeChild(rookPice);
          rookCell.classList.remove(color);
          destinationRook.classList.add(color);
          destinationRook.appendChild(rookPice);
        }
      }
    }
  }
}

function controlMove(startCell, destinationCell, boolean) {
  if (startCell !== destinationCell) {
    return (boolean = true);
  }
}

export { movePiece, addPossibleMove, controlMove };
