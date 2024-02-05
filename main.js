let pieceType = null;
let pieceColor = null;
let selectedPiece = null;
let startCell = null;
let letterToNumber = null;
let lastMovePawn = null;
let whiteKingIsMoved = false;
let blackKingIsMoved = false;
let whiteRookIsMoved = false;
let blackRookIsMoved = false;
let checkToWhiteKing = false;
let checkToBlackKing = false;
let currentPlayer = "white";
document.getElementById("turn").innerHTML = currentPlayer;

document.querySelectorAll(".box").forEach(function (cell) {
  cell.addEventListener("click", function (event) {
    const clickedCell = event.currentTarget;
    const clickedRow = event.currentTarget.dataset.row;
    const clickedColumn = event.currentTarget.dataset.letter;
    console.log(lastMovePawn);

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
      console.log(clickedColumn, clickedRow);

      // MUOVO il pezzo
      if (pieceType === "pawn") {
        pawnMove(selectedPiece, startCell, destinationCell);
      } else if (pieceType === "rook") {
        rookMove(selectedPiece, startCell, destinationCell);
      } else if (pieceType === "bishop") {
        bishopMove(selectedPiece, startCell, destinationCell);
      } else if (pieceType === "knight") {
        knightMove(selectedPiece, startCell, destinationCell);
      } else if (pieceType === "queen") {
        queenMove(selectedPiece, startCell, destinationCell);
      } else if (pieceType === "king") {
        kingMove(selectedPiece, startCell, destinationCell);
      }

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

  const selectedPiece = pieceElement.id;
  if (!selectedPiece.includes("pawn")) {
    lastMovePawn = null;
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
function getPieceColor(selectedPiece) {
  if (!selectedPiece) return null;

  const pieceId = selectedPiece.id;
  return pieceId.includes("white") ? "white" : "black";
}

// funzione che IDENTIFICA IL PEZZO selezionato
function getPieceType(selectedPiece) {
  if (!selectedPiece) return null;

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

function getLetterFromCoordinate(number) {
  let numberToLetter = null;

  if (number === 10) {
    numberToLetter = "a";
  } else if (number === 11) {
    numberToLetter = "b";
  } else if (number === 12) {
    numberToLetter = "c";
  } else if (number === 13) {
    numberToLetter = "d";
  } else if (number === 14) {
    numberToLetter = "e";
  } else if (number === 15) {
    numberToLetter = "f";
  } else if (number === 16) {
    numberToLetter = "g";
  } else if (number === 17) {
    numberToLetter = "h";
  }
  return numberToLetter;
}

function pawnMove(selectedPiece, startCell, destinationCell) {
  const pieceColor = selectedPiece.id.includes("white") ? "white" : "black";
  const startCellRow = parseInt(startCell.dataset.row);
  const startCellColumn = startCell.dataset.letter;
  let startCellColumnToNumber = getCoordinateLetter(startCell);
  const destinationCellRow = parseInt(destinationCell.dataset.row);
  const destinationCellColumn = destinationCell.dataset.letter;
  let destinationCellColumnToNumber = getCoordinateLetter(destinationCell);
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

function rookMove(selectedPiece, startCell, destinationCell) {
  const startCellRow = parseInt(startCell.dataset.row);
  const startCellColumn = startCell.dataset.letter;
  let startCellColumnToNumber = getCoordinateLetter(startCell);
  const destinationCellRow = parseInt(destinationCell.dataset.row);
  const destinationCellColumn = destinationCell.dataset.letter;
  let destinationCellColumnToNumber = getCoordinateLetter(destinationCell);
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

  if (startCellColumn === destinationCellColumn) {
    //controllo le colonne
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
        pieceColor === "white"
          ? (whiteRookIsMoved = true)
          : (blackRookIsMoved = true);
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
        pieceColor === "white"
          ? (whiteRookIsMoved = true)
          : (blackRookIsMoved = true);
      }
    } else {
      return;
    }
  } else if (startCellRow === destinationCellRow) {
    //controllo le righe
    if (stepDirectionX === "right") {
      for (let i = 1; i < countCellX; i++) {
        checkCell = document.querySelector(
          `.box[data-letter="${getLetterFromCoordinate(
            startCellColumnToNumber + i
          )}"][data-row="${startCellRow}"]`
        );
        isCellOccupied = !!checkCell.firstChild;
        listOccupied.push(isCellOccupied);
      }
      if (listOccupied.includes(true)) {
        return;
      } else {
        movePiece(selectedPiece, destinationCell);
        pieceColor === "white"
          ? (whiteRookIsMoved = true)
          : (blackRookIsMoved = true);
      }
    } else if (stepDirectionX === "left") {
      for (let i = 1; i < countCellX; i++) {
        checkCell = document.querySelector(
          `.box[data-letter="${getLetterFromCoordinate(
            startCellColumnToNumber - i
          )}"][data-row="${startCellRow}"]`
        );
        isCellOccupied = !!checkCell.firstChild;
        listOccupied.push(isCellOccupied);
      }
      if (listOccupied.includes(true)) {
        return;
      } else {
        movePiece(selectedPiece, destinationCell);
        pieceColor === "white"
          ? (whiteRookIsMoved = true)
          : (blackRookIsMoved = true);
      }
    } else {
      return;
    }
  } else {
    return;
  }
}

function bishopMove(selectedPiece, startCell, destinationCell) {
  const startCellRow = parseInt(startCell.dataset.row);
  const startCellColumn = startCell.dataset.letter;
  let startCellColumnToNumber = getCoordinateLetter(startCell);
  const destinationCellRow = parseInt(destinationCell.dataset.row);
  const destinationCellColumn = destinationCell.dataset.letter;
  let destinationCellColumnToNumber = getCoordinateLetter(destinationCell);
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

function knightMove(selectedPiece, startCell, destinationCell) {
  const startCellRow = parseInt(startCell.dataset.row);
  const startCellColumn = startCell.dataset.letter;
  let startCellColumnToNumber = getCoordinateLetter(startCell);
  const destinationCellRow = parseInt(destinationCell.dataset.row);
  const destinationCellColumn = destinationCell.dataset.letter;
  let destinationCellColumnToNumber = getCoordinateLetter(destinationCell);
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

function queenMove(selectedPiece, startCell, destinationCell) {
  const startCellRow = parseInt(startCell.dataset.row);
  const startCellColumn = startCell.dataset.letter;
  let startCellColumnToNumber = getCoordinateLetter(startCell);
  const destinationCellRow = parseInt(destinationCell.dataset.row);
  const destinationCellColumn = destinationCell.dataset.letter;
  let destinationCellColumnToNumber = getCoordinateLetter(destinationCell);
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

function kingMove(selectedPiece, startCell, destinationCell) {
  const pieceColor = selectedPiece.id.includes("white") ? "white" : "black";
  const startCellRow = parseInt(startCell.dataset.row);
  const startCellColumn = startCell.dataset.letter;
  let startCellColumnToNumber = getCoordinateLetter(startCell);
  const destinationCellRow = parseInt(destinationCell.dataset.row);
  const destinationCellColumn = destinationCell.dataset.letter;
  let destinationCellColumnToNumber = getCoordinateLetter(destinationCell);
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

  if (
    (pieceColor === "white" &&
      destinationCellRow === 1 &&
      destinationCellColumn === "g") ||
    (pieceColor === "black" &&
      destinationCellRow === 8 &&
      destinationCellColumn === "g")
  ) {
    shortCastling(
      selectedPiece,
      startCell,
      destinationCell,
      blackKingIsMoved,
      whiteKingIsMoved,
      blackRookIsMoved,
      whiteRookIsMoved
    );
  }

  if (
    (pieceColor === "white" &&
      destinationCellRow === 1 &&
      destinationCellColumn === "c") ||
    (pieceColor === "black" &&
      destinationCellRow === 8 &&
      destinationCellColumn === "c")
  ) {
    longCastling(
      selectedPiece,
      startCell,
      destinationCell,
      blackKingIsMoved,
      whiteKingIsMoved,
      blackRookIsMoved,
      whiteRookIsMoved
    );
  }

  if (startCellRow === destinationCellRow) {
    if (destinationCellColumnToNumber === startCellColumnToNumber - 1) {
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
          pieceColor === "white"
            ? (whiteKingIsMoved = true)
            : (blackKingIsMoved = true);
        }
      } else {
        return;
      }
    } else if (destinationCellColumnToNumber === startCellColumnToNumber + 1) {
      if (stepDirectionX === "right") {
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
          pieceColor === "white"
            ? (whiteKingIsMoved = true)
            : (blackKingIsMoved = true);
        }
      } else {
        return;
      }
    } else {
      return;
    }
  } else if (startCellColumnToNumber === destinationCellColumnToNumber) {
    if (destinationCellRow === startCellRow + 1) {
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
          pieceColor === "white"
            ? (whiteKingIsMoved = true)
            : (blackKingIsMoved = true);
        }
      } else {
        return;
      }
    } else if (destinationCellRow === startCellRow - 1) {
      if (stepDirectionY === "down") {
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
          pieceColor === "white"
            ? (whiteKingIsMoved = true)
            : (blackKingIsMoved = true);
        }
      } else {
        return;
      }
    } else {
      return;
    }
  } else if (stepDirectionY === "up" && stepDirectionX === "left") {
    if (
      destinationCellRow === startCellRow + 1 &&
      destinationCellColumnToNumber === startCellColumnToNumber - 1
    ) {
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
          pieceColor === "white"
            ? (whiteKingIsMoved = true)
            : (blackKingIsMoved = true);
        }
      } else {
        return;
      }
    } else {
      return;
    }
  } else if (stepDirectionY === "up" && stepDirectionX === "right") {
    if (
      destinationCellRow === startCellRow + 1 &&
      destinationCellColumnToNumber === startCellColumnToNumber + 1
    ) {
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
          pieceColor === "white"
            ? (whiteKingIsMoved = true)
            : (blackKingIsMoved = true);
        }
      } else {
        return;
      }
    } else {
      return;
    }
  } else if (stepDirectionY === "down" && stepDirectionX === "right") {
    if (
      destinationCellRow === startCellRow - 1 &&
      destinationCellColumnToNumber === startCellColumnToNumber + 1
    ) {
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
          pieceColor === "white"
            ? (whiteKingIsMoved = true)
            : (blackKingIsMoved = true);
        }
      } else {
        return;
      }
    } else {
      return;
    }
  } else if (stepDirectionY === "down" && stepDirectionX === "left") {
    if (
      destinationCellRow === startCellRow - 1 &&
      destinationCellColumnToNumber === startCellColumnToNumber - 1
    ) {
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
          pieceColor === "white"
            ? (whiteKingIsMoved = true)
            : (blackKingIsMoved = true);
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

function shortCastling(
  selectedPiece,
  startCell,
  destinationCell,
  whiteKingIsMoved,
  blackKingIsMoved,
  whiteRookIsMoved,
  blackRookIsMoved
) {
  const pieceColor = selectedPiece.id.includes("white") ? "white" : "black";
  const startCellRow = parseInt(startCell.dataset.row);
  const startCellColumn = startCell.dataset.letter;
  let startCellColumnToNumber = getCoordinateLetter(startCell);
  const destinationCellRow = parseInt(destinationCell.dataset.row);
  const destinationCellColumn = destinationCell.dataset.letter;
  let destinationCellColumnToNumber = getCoordinateLetter(destinationCell);
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

function longCastling(
  selectedPiece,
  startCell,
  destinationCell,
  whiteKingIsMoved,
  blackKingIsMoved,
  whiteRookIsMoved,
  blackRookIsMoved
) {
  const pieceColor = selectedPiece.id.includes("white") ? "white" : "black";
  const startCellRow = parseInt(startCell.dataset.row);
  const startCellColumn = startCell.dataset.letter;
  let startCellColumnToNumber = getCoordinateLetter(startCell);
  const destinationCellRow = parseInt(destinationCell.dataset.row);
  const destinationCellColumn = destinationCell.dataset.letter;
  let destinationCellColumnToNumber = getCoordinateLetter(destinationCell);
  const rookElement = document.getElementById(`${pieceColor}-rook-0`);
  let checkCell;
  let isCellOccupied;
  let listOccupied = [];
  let checkRookCell;
  let checkRookElement;
  const checkListOccupied = [false, false, false, true];

  if (whiteKingIsMoved === false && whiteRookIsMoved === false) {
    if (pieceColor === "white") {
      for (let i = 1; i <= 4; i++) {
        checkCell = document.querySelector(
          `.box[data-letter="${getLetterFromCoordinate(
            startCellColumnToNumber - i
          )}"][data-row="${startCellRow}"]`
        );
        isCellOccupied = !!checkCell.firstChild;
        if (i === 4) {
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
          rookElement.id = "white-rook-0";

          const kingElement = document.createElement("img");
          kingElement.src = "./img/chess-pieces/white-king.svg";
          kingElement.id = "white-king";

          startCell.removeChild(firstKingElement);
          checkRookCell.removeChild(checkRookElement);

          const putRook = document.querySelector(
            `.box[data-letter="d"][data-row="1"]`
          );
          putRook.appendChild(rookElement);

          const putKing = document.querySelector(
            `.box[data-letter="c"][data-row="1"]`
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
      for (let i = 1; i <= 4; i++) {
        checkCell = document.querySelector(
          `.box[data-letter="${getLetterFromCoordinate(
            startCellColumnToNumber - i
          )}"][data-row="${startCellRow}"]`
        );
        isCellOccupied = !!checkCell.firstChild;
        if (i === 4) {
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
          rookElement.id = "black-rook-0";

          const kingElement = document.createElement("img");
          kingElement.src = "./img/chess-pieces/black-king.svg";
          kingElement.id = "black-king";

          startCell.removeChild(firstKingElement);
          checkRookCell.removeChild(checkRookElement);

          const putRook = document.querySelector(
            `.box[data-letter="d"][data-row="8"]`
          );
          putRook.appendChild(rookElement);

          const putKing = document.querySelector(
            `.box[data-letter="c"][data-row="8"]`
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

function enPasantMoveRight(selectedPiece, startCell, destinationCell) {
  const pieceColor = selectedPiece.id.includes("white") ? "white" : "black";
  const startCellRow = parseInt(startCell.dataset.row);
  const startCellColumn = startCell.dataset.letter;
  let startCellColumnToNumber = getCoordinateLetter(startCell);
  const destinationCellRow = parseInt(destinationCell.dataset.row);
  const destinationCellColumn = destinationCell.dataset.letter;
  let destinationCellColumnToNumber = getCoordinateLetter(destinationCell);

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

function enPasantMoveLeft(selectedPiece, startCell, destinationCell) {
  const pieceColor = selectedPiece.id.includes("white") ? "white" : "black";
  const startCellRow = parseInt(startCell.dataset.row);
  const startCellColumn = startCell.dataset.letter;
  let startCellColumnToNumber = getCoordinateLetter(startCell);
  const destinationCellRow = parseInt(destinationCell.dataset.row);
  const destinationCellColumn = destinationCell.dataset.letter;
  let destinationCellColumnToNumber = getCoordinateLetter(destinationCell);

  if (pieceColor === "white") {
    if (startCellRow === 5) {
      const pawnMoveElement = startCell.firstChild;
      const opponentCell = document.querySelector(
        `.box[data-letter="${getLetterFromCoordinate(
          startCellColumnToNumber - 1
        )}"][data-row="${startCellRow}"]`
      );
      if (
        destinationCellColumnToNumber === startCellColumnToNumber - 1 &&
        destinationCellRow === startCellRow + 1
      ) {
        const opponentPawnElement = opponentCell.firstChild;
        const putPawn = document.querySelector(
          `.box[data-letter="${getLetterFromCoordinate(
            startCellColumnToNumber - 1
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
          startCellColumnToNumber - 1
        )}"][data-row="${startCellRow}"]`
      );
      if (
        destinationCellColumnToNumber === startCellColumnToNumber - 1 &&
        destinationCellRow === startCellRow - 1
      ) {
        const opponentPawnElement = opponentCell.firstChild;
        const putPawn = document.querySelector(
          `.box[data-letter="${getLetterFromCoordinate(
            startCellColumnToNumber - 1
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

function checkCellKing(possibleCell, checkToKing) {
  let possibleCellElement;

  if (possibleCell.firstChild) {
    possibleCellElement = possibleCell.firstChild.id;
    if (possibleCellElement.includes("king")) {
      checkToKing = true;
      return checkToKing;
    } else {
      return;
    }
  } else {
    return;
  }
}

function possibleMove(
  selectedPiece,
  startCell,
  checkToBlackKing,
  checkToWhiteKing
) {
  const pieceType = getPieceType(selectedPiece);
  const startCellRow = startCell.dataset.row;
  const startCellColumn = startCell.dataset.letter;
  let startCellColumnToNumber = getCoordinateLetter(startCellColumn);
  let countMoveCell;
  let possibleCell;
  const moveList = [];

  if (pieceType === "pawn") {
    if (startCellColumn === "a") {
      if (pieceColor === "white") {
        possibleCell = document.querySelector(
          `.box[data-letter="${getLetterFromCoordinate(
            startCellColumnToNumber + 1
          )}"][data-row="${startCellRow + 1}"]`
        );

        checkCellKing(possibleCell, checkToBlackKing);
      } else if (pieceColor === "black") {
        possibleCell = document.querySelector(
          `.box[data-letter="${getLetterFromCoordinate(
            startCellColumnToNumber + 1
          )}"][data-row="${startCellRow - 1}"]`
        );

        checkCellKing(possibleCell, checkToWhiteKing);
      } else {
        return;
      }
    } else if (startCellColumn === "h") {
      if (pieceColor === "white") {
        possibleCell = document.querySelector(
          `.box[data-letter="${getLetterFromCoordinate(
            startCellColumnToNumber - 1
          )}"][data-row="${startCellRow + 1}"]`
        );

        checkCellKing(possibleCell, checkToBlackKing);
      } else if (pieceColor === "black") {
        possibleCell = document.querySelector(
          `.box[data-letter="${getLetterFromCoordinate(
            startCellColumnToNumber - 1
          )}"][data-row="${startCellRow - 1}"]`
        );

        checkCellKing(possibleCell, checkToWhiteKing);
      } else {
        return;
      }
    } else {
      if (pieceColor === "white") {
        possibleCell = document.querySelector(
          `.box[data-letter="${getLetterFromCoordinate(
            startCellColumnToNumber - 1
          )}"][data-row="${startCellRow + 1}"]`
        );
      } else if (pieceColor === "black") {
      } else {
        return;
      }
    }
  } else if (pieceType === "rook") {
  }
}
