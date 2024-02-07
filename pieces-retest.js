const cell = document.getElementById("e1");
const cell2 = document.getElementById("d1");
const cell3 = document.getElementById("d8");
// const cell4 = document.getElementById("a8");
// const cell5 = document.getElementById("f8");
const cell6 = document.getElementById("b1");
// const cell7 = document.getElementById("b2");
const cellA1 = document.getElementById("a1");
const cellH1 = document.getElementById("h1");
const cellC1 = document.getElementById("c1");

const whiteKing = document.createElement("img");
whiteKing.src = "./img/chess-pieces/white-king.svg";
whiteKing.id = "white-king";
cell.classList.add("white");
cell.appendChild(whiteKing);

const whiteQueen = document.createElement("img");
whiteQueen.src = "./img/chess-pieces/white-queen.svg";
whiteQueen.id = "white-queen";
cell2.classList.add("white");
cell2.appendChild(whiteQueen);

const blackQueen = document.createElement("img");
blackQueen.src = "./img/chess-pieces/black-queen.svg";
blackQueen.id = "black-queen";
cell3.classList.add("black");
cell3.appendChild(blackQueen);

// const blackRook = document.createElement("img");
// blackRook.src = "./img/chess-pieces/black-rook.svg";
// blackRook.id = "black-rook";
// cell4.classList.add("black");
// cell4.appendChild(blackRook);

// const blackBishop = document.createElement("img");
// blackBishop.src = "./img/chess-pieces/black-bishop.svg";
// blackBishop.id = "black-bishop";
// cell5.classList.add("black");
// cell5.appendChild(blackBishop);

const whiteKnight = document.createElement("img");
whiteKnight.src = "./img/chess-pieces/white-knight.svg";
whiteKnight.id = "white-knight";
cell6.classList.add("white");
cell6.appendChild(whiteKnight);

// const whitePawn = document.createElement("img");
// whitePawn.src = "./img/chess-pieces/white-pawn.svg";
// whitePawn.id = "white-pawn";
// cell7.classList.add("white");
// cell7.appendChild(whitePawn);

const whiteRook = document.createElement("img");
whiteRook.src = "./img/chess-pieces/white-rook.svg";
whiteRook.id = "white-rook";
cellA1.classList.add("white");
cellA1.appendChild(whiteRook);

const whiteBishop = document.createElement("img");
whiteBishop.src = "./img/chess-pieces/white-bishop.svg";
whiteBishop.id = "white-bishop";
cellC1.classList.add("white");
cellC1.appendChild(whiteBishop);
