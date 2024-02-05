function getPieceType(piece) {
  const pieceId = piece.id;
  let pieceType;

  if (pieceId.includes("pawn")) {
    pieceType = "pawn";
  } else if (pieceId.includes("rook")) {
    pieceType = "rook";
  } else if (pieceId.includes("bishop")) {
    pieceType = "bishop";
  } else if (pieceId.includes("knight")) {
    pieceType = "knight";
  } else if (pieceId.includes("queen")) {
    pieceType = "queen";
  } else if (pieceId.includes("king")) {
    pieceType = "king";
  }

  return pieceType;
}

function getPieceColor(piece) {
  const pieceId = piece.id;
  let pieceColor;

  pieceColor = pieceId.includes("white") ? "white" : "black";

  return pieceColor;
}

function getCoordinateLetter(letter) {
  const letterToNumberMap = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
  };

  const numberFromLetter = letterToNumberMap[letter];

  return numberFromLetter;
}

function getLetterCoordinate(coordinate) {
  const coordinateToLetterMap = {
    1: "a",
    2: "b",
    3: "c",
    4: "d",
    5: "e",
    6: "f",
    7: "g",
    8: "h",
  };

  const letterFromCoordinate = coordinateToLetterMap[coordinate];

  return letterFromCoordinate;
}

function toggleColor(color) {
  let oppositeColor;

  color === "white" ? (oppositeColor = "black") : (oppositeColor = "white");

  return oppositeColor;
}

export {
  getPieceColor,
  getPieceType,
  getCoordinateLetter,
  getLetterCoordinate,
  toggleColor,
};
