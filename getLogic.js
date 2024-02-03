function getPieceColor(selectedPiece) {
  if (!selectedPiece) return null;

  const pieceId = selectedPiece.id;
  return pieceId.includes("white") ? "white" : "black";
}

// funzione che IDENTIFICA IL PEZZO selezionato
function getPieceType(selectedPiece) {
  let pieceType;
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
  let letterToNumber;

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

export {
  getPieceColor,
  getPieceType,
  getCoordinateLetter,
  getLetterFromCoordinate,
};
