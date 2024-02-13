import {
  toggleColor,
  getPieceColor,
  getLetterCoordinate,
  getCoordinateLetter,
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
  const startRow = startCell.dataset.row;
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

    if (piece.id.includes("pawn")) {
      destinationEnPasantRight(piece, startCell, destinationCell, color);
      destinationEnPasantLeft(piece, startCell, destinationCell, color);
    }

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

function getLastMove(piece, startCell, destinationCell, lastMove) {
  const startRow = startCell.dataset.row;
  const startColumn = startCell.dataset.letter;

  const destinationRow = destinationCell.dataset.row;
  const destinationColumn = destinationCell.dataset.letter;

  lastMove.pieceName = piece.id;
  lastMove.startCell = startCell;
  lastMove.destinationCell = destinationCell;
  lastMove.startRow = startRow;
  lastMove.destinationRow = destinationRow;
  lastMove.startColumn = startColumn;
  lastMove.destinationColumn = destinationColumn;
}

function destinationEnPasantRight(piece, startCell, destinationCell, color) {
  const startRow = parseInt(startCell.dataset.row);
  const startColumn = startCell.dataset.letter;
  const startColumnNumber = getCoordinateLetter(startColumn);
  const oppositeColor = toggleColor(color);

  if (piece.id.includes("pawn")) {
    if (color === "white") {
      const destinationEnPasant = document.querySelector(
        `.cell[data-letter="${getLetterCoordinate(
          startColumnNumber + 1
        )}"][data-row="${startRow + 1}"]`
      );

      if (destinationCell === destinationEnPasant) {
        const oppositePawn = document.querySelector(
          `.cell[data-letter="${getLetterCoordinate(
            startColumnNumber + 1
          )}"][data-row="${startRow}"]`
        );

        if (oppositePawn.firstElementChild) {
          const oppositeElement = oppositePawn.firstElementChild;
          oppositePawn.removeChild(oppositeElement);
          oppositePawn.classList.remove(oppositeColor);
        }
      }
    } else if (color === "black") {
      const destinationEnPasant = document.querySelector(
        `.cell[data-letter="${getLetterCoordinate(
          startColumnNumber + 1
        )}"][data-row="${startRow - 1}"]`
      );

      if (destinationCell === destinationEnPasant) {
        const oppositePawn = document.querySelector(
          `.cell[data-letter="${getLetterCoordinate(
            startColumnNumber + 1
          )}"][data-row="${startRow}"]`
        );

        if (oppositePawn.firstElementChild) {
          const oppositeElement = oppositePawn.firstElementChild;
          oppositePawn.removeChild(oppositeElement);
          oppositePawn.classList.remove(oppositeColor);
        }
      }
    }
  }
}

function destinationEnPasantLeft(piece, startCell, destinationCell, color) {
  const startRow = parseInt(startCell.dataset.row);
  const startColumn = startCell.dataset.letter;
  const startColumnNumber = getCoordinateLetter(startColumn);
  const oppositeColor = toggleColor(color);

  if (piece.id.includes("pawn")) {
    if (color === "white") {
      const destinationEnPasant = document.querySelector(
        `.cell[data-letter="${getLetterCoordinate(
          startColumnNumber - 1
        )}"][data-row="${startRow + 1}"]`
      );

      if (destinationCell === destinationEnPasant) {
        const oppositePawn = document.querySelector(
          `.cell[data-letter="${getLetterCoordinate(
            startColumnNumber - 1
          )}"][data-row="${startRow}"]`
        );

        if (oppositePawn.firstElementChild) {
          const oppositeElement = oppositePawn.firstElementChild;
          oppositePawn.removeChild(oppositeElement);
          oppositePawn.classList.remove(oppositeColor);
        }
      }
    } else if (color === "black") {
      const destinationEnPasant = document.querySelector(
        `.cell[data-letter="${getLetterCoordinate(
          startColumnNumber - 1
        )}"][data-row="${startRow - 1}"]`
      );

      if (destinationCell === destinationEnPasant) {
        const oppositePawn = document.querySelector(
          `.cell[data-letter="${getLetterCoordinate(
            startColumnNumber - 1
          )}"][data-row="${startRow}"]`
        );

        if (oppositePawn.firstElementChild) {
          const oppositeElement = oppositePawn.firstElementChild;
          oppositePawn.removeChild(oppositeElement);
          oppositePawn.classList.remove(oppositeColor);
        }
      }
    }
  }
}

export { movePiece, addPossibleMove, controlMove, getLastMove };
