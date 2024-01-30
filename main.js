let pieceType = null;
let pieceColor = null;
let selectedPiece = null;
let startCell = null;
let letterToNumber = null;
let currentPlayer = "white";
document.getElementById("turn").innerHTML = currentPlayer;

document.querySelectorAll(".box").forEach(function (cell) {
  cell.addEventListener("click", function (event) {
    const clickedCell = event.currentTarget;
    const clickedRow = event.currentTarget.dataset.row;
    const clickedColumn = event.currentTarget.dataset.letter;
    console.log(clickedColumn, clickedRow);

    if (!selectedPiece) {
      // seleziona il pezzo cliccato
      startCell = clickedCell;
      selectedPiece = clickedCell.firstElementChild;
      pieceType = getPieceType(selectedPiece);
      pieceColor = getPieceColor(selectedPiece);
      console.log(pieceColor + "-" + pieceType);

      if (pieceColor === currentPlayer) {
        selectedPiece.style.backgroundColor = "#d2ed4a";
      } else {
        selectedPiece = null;
      }
    } else {
      // gestisco il clic sulla casella di destinazione solo se un pezzo è stato selezionato
      const destinationCell = clickedCell;

      // MUOVO il pezzo

      pawnMove(selectedPiece, startCell, destinationCell);

      selectedPiece.style.backgroundColor = "";
      selectedPiece = null;
    }
  });
});

// funzione per MUOVERE I PEZZI e gestire la CATTURA
function movePiece(pieceElement, destinationCell) {
  // posizione di partenza del pezzo
  const startPosition = pieceElement.parentElement;
  // controllo se la cella di destinazione ha un elemento
  const hasPiece = destinationCell.firstElementChild;

  // CATTURA del pezzo se nella casella di destinazione c'è un elemento
  if (hasPiece) {
    const pieceColor = getPieceColor(pieceElement);
    const removePieceColor = getPieceColor(hasPiece);

    if (pieceColor !== removePieceColor) {
      hasPiece.parentNode.removeChild(hasPiece);
    } else {
      return;
    }
  }

  // muovo il pezzo nella casella di destinazione
  destinationCell.appendChild(pieceElement);

  // controllo per il CAMBIO TURNO
  if (startPosition !== destinationCell) {
    currentPlayer = currentPlayer === "white" ? "black" : "white";
    document.getElementById("turn").innerHTML = currentPlayer;
  }
}

// funzione che controlla il COLORE DEL PEZZO
function getPieceColor(pieceElement) {
  if (!pieceElement) return null;

  const pieceId = pieceElement.id;
  return pieceId.includes("white") ? "white" : "black";
}

// funzione che IDENTIFICA IL PEZZO selezionato
function getPieceType(selectedPiece) {
  const selectedPieceId = selectedPiece.id;
  if (selectedPieceId.includes("pawn")) {
    pieceType = "pawn";
  } else if (selectedPieceId.includes("rook")) {
    pieceType = "rook";
  } else if (selectedPieceId.includes("knight")) {
    pieceType = "knight";
  } else if (selectedPieceId.includes("bishop")) {
    pieceType = "bishop";
  } else if (selectedPieceId.includes("queen")) {
    pieceType = "queen";
  } else if (selectedPieceId.includes("king")) {
    pieceType = "king";
  }
  return pieceType;
}

function getCoordinateLetter(cell) {
  const letter = cell.dataset.letter;

  if (letter === "a") {
    letterToNumber = 10;
  } else if (letter === "b") {
    letterToNumber = 11;
  } else if (letter === "c") {
    letterToNumber = 12;
  } else if (letter === "d") {
    letterToNumber = 13;
  } else if (letter === "e") {
    letterToNumber = 14;
  } else if (letter === "f") {
    letterToNumber = 15;
  } else if (letter === "g") {
    letterToNumber = 16;
  } else if (letter === "h") {
    letterToNumber = 17;
  }
  return letterToNumber;
}

function pawnMove(selectedPiece, startCell, destinationCell) {
  const pieceColor = selectedPiece.id.includes("white") ? "white" : "black";
  const pieceType = getPieceType(selectedPiece);
  const startCellRow = parseInt(startCell.dataset.row);
  const startCellColumn = startCell.dataset.letter;
  let startCellColumnToNumber = getCoordinateLetter(startCell);
  const destinationCellRow = parseInt(destinationCell.dataset.row);
  const destinationCellColumn = destinationCell.dataset.letter;
  let checkDestionationRow = parseInt(startCell.dataset.row);
  let checkDestinationRowElement = destinationCell.firstElementChild; // controllo se c'è un pezzo di fronte
  let isDestinationOccupied = !!checkDestinationRowElement;

  if (startCellColumn === destinationCellColumn) {
    //movimento pedoni
    if (pieceColor === "white") {
      if (destinationCellRow > startCellRow) {
        if (startCellRow === 2) {
          checkDestionationRow += 2;
          if (destinationCellRow <= checkDestionationRow) {
            if (isDestinationOccupied === true) {
              return;
            } else {
              movePiece(selectedPiece, destinationCell);
            }
          }
        } else if (startCellRow > 2) {
          checkDestionationRow++;
          if (destinationCellRow === checkDestionationRow) {
            if (isDestinationOccupied === true) {
              return;
            } else {
              movePiece(selectedPiece, destinationCell);
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
            if (isDestinationOccupied === true) {
              return;
            } else {
              movePiece(selectedPiece, destinationCell);
            }
          }
        } else if (startCellRow < 7) {
          checkDestionationRow--;
          if (destinationCellRow === checkDestionationRow) {
            if (isDestinationOccupied === true) {
              return;
            } else {
              movePiece(selectedPiece, destinationCell);
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
