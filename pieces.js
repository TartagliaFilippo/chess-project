const blackPawn = document.querySelectorAll(".black-pawn");
const blackRook = document.querySelectorAll(".black-rook");
const blackKnight = document.querySelectorAll(".black-knight");
const blackBishop = document.querySelectorAll(".black-bishop");
const blackQueen = document.querySelector(".black-queen");
const blackKing = document.querySelector(".black-king");
const whitePawn = document.querySelectorAll(".white-pawn");
const whiteRook = document.querySelectorAll(".white-rook");
const whiteKnight = document.querySelectorAll(".white-knight");
const whiteBishop = document.querySelectorAll(".white-bishop");
const whiteQueen = document.querySelector(".white-queen");
const whiteKing = document.querySelector(".white-king");

blackPawn.forEach(function (pawn) {
  const pawnElement = document.createElement("img");
  pawnElement.src = "./img/chess-pieces/black-pawn.svg";
  pawn.appendChild(pawnElement);
});

blackRook.forEach(function (rook) {
  const rookElement = document.createElement("img");
  rookElement.src = "./img/chess-pieces/black-rook.svg";
  rook.appendChild(rookElement);
});

blackKnight.forEach(function (knight) {
  const knightElement = document.createElement("img");
  knightElement.src = "./img/chess-pieces/black-knight.svg";
  knight.appendChild(knightElement);
});

blackBishop.forEach(function (bishop) {
  const bishopElement = document.createElement("img");
  bishopElement.src = "./img/chess-pieces/black-bishop.svg";
  bishop.appendChild(bishopElement);
});

const blackQueenElement = document.createElement("img");
blackQueenElement.src = "./img/chess-pieces/black-queen.svg";
blackQueen.appendChild(blackQueenElement);

const blackKingElement = document.createElement("img");
blackKingElement.src = "./img/chess-pieces/black-king.svg";
blackKing.appendChild(blackKingElement);

whitePawn.forEach(function (pawn) {
  const pawnElement = document.createElement("img");
  pawnElement.src = "./img/chess-pieces/white-pawn.svg";
  pawn.appendChild(pawnElement);
});

whiteRook.forEach(function (rook) {
  const rookElement = document.createElement("img");
  rookElement.src = "./img/chess-pieces/white-rook.svg";
  rook.appendChild(rookElement);
});

whiteKnight.forEach(function (knight) {
  const knightElement = document.createElement("img");
  knightElement.src = "./img/chess-pieces/white-knight.svg";
  knight.appendChild(knightElement);
});

whiteBishop.forEach(function (bishop) {
  const bishopElement = document.createElement("img");
  bishopElement.src = "./img/chess-pieces/white-bishop.svg";
  bishop.appendChild(bishopElement);
});

const whiteQueenElement = document.createElement("img");
whiteQueenElement.src = "./img/chess-pieces/white-queen.svg";
whiteQueen.appendChild(whiteQueenElement);

const whiteKingElement = document.createElement("img");
whiteKingElement.src = "./img/chess-pieces/white-king.svg";
whiteKing.appendChild(whiteKingElement);
