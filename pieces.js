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

// PEZZI NERI

blackPawn.forEach(function (pawn, index) {
  const pawnElement = document.createElement("img");
  pawnElement.src = "./img/chess-pieces/black-pawn.svg";
  pawnElement.id = "black-pawn-" + index;
  pawn.appendChild(pawnElement);
});

blackRook.forEach(function (rook, index) {
  const rookElement = document.createElement("img");
  rookElement.src = "./img/chess-pieces/black-rook.svg";
  rookElement.id = "black-rook-" + index;
  rook.appendChild(rookElement);
});

blackKnight.forEach(function (knight, index) {
  const knightElement = document.createElement("img");
  knightElement.src = "./img/chess-pieces/black-knight.svg";
  knightElement.id = "black-knight-" + index;
  knight.appendChild(knightElement);
});

blackBishop.forEach(function (bishop, index) {
  const bishopElement = document.createElement("img");
  bishopElement.src = "./img/chess-pieces/black-bishop.svg";
  bishopElement.id = "black-bishop-" + index;
  bishop.appendChild(bishopElement);
});

const blackQueenElement = document.createElement("img");
blackQueenElement.src = "./img/chess-pieces/black-queen.svg";
blackQueenElement.id = "black-queen";
blackQueen.appendChild(blackQueenElement);

const blackKingElement = document.createElement("img");
blackKingElement.src = "./img/chess-pieces/black-king.svg";
blackKingElement.id = "black-king";
blackKing.appendChild(blackKingElement);

// PEZZI BIANCHI

whitePawn.forEach(function (pawn, index) {
  const pawnElement = document.createElement("img");
  pawnElement.src = "./img/chess-pieces/white-pawn.svg";
  pawnElement.id = "white-pawn-" + index;
  pawn.appendChild(pawnElement);
});

whiteRook.forEach(function (rook, index) {
  const rookElement = document.createElement("img");
  rookElement.src = "./img/chess-pieces/white-rook.svg";
  rookElement.id = "white-rook-" + index;
  rook.appendChild(rookElement);
});

whiteKnight.forEach(function (knight, index) {
  const knightElement = document.createElement("img");
  knightElement.src = "./img/chess-pieces/white-knight.svg";
  knightElement.id = "white-knight-" + index;
  knight.appendChild(knightElement);
});

whiteBishop.forEach(function (bishop, index) {
  const bishopElement = document.createElement("img");
  bishopElement.src = "./img/chess-pieces/white-bishop.svg";
  bishopElement.id = "white-bishop-" + index;
  bishop.appendChild(bishopElement);
});

const whiteQueenElement = document.createElement("img");
whiteQueenElement.src = "./img/chess-pieces/white-queen.svg";
whiteQueenElement.id = "white-queen";
whiteQueen.appendChild(whiteQueenElement);

const whiteKingElement = document.createElement("img");
whiteKingElement.src = "./img/chess-pieces/white-king.svg";
whiteKingElement.id = "white-king";
whiteKing.appendChild(whiteKingElement);
