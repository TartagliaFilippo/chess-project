const cell = document.getElementById("e1");
const cell2 = document.getElementById("d1");
const cell3 = document.getElementById("d8");
const cell4 = document.getElementById("a8");
const cell5 = document.getElementById("f8");
const cell6 = document.getElementById("b1");
const cell7 = document.getElementById("b2");

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

const blackRook = document.createElement("img");
blackRook.src = "./img/chess-pieces/black-rook.svg";
blackRook.id = "black-rook";
cell4.classList.add("black");
cell4.appendChild(blackRook);

const bishopRook = document.createElement("img");
bishopRook.src = "./img/chess-pieces/black-bishop.svg";
bishopRook.id = "black-bishop";
cell5.classList.add("black");
cell5.appendChild(bishopRook);

const whiteKnight = document.createElement("img");
whiteKnight.src = "./img/chess-pieces/white-knight.svg";
whiteKnight.id = "white-knight";
cell6.classList.add("white");
cell6.appendChild(whiteKnight);

const whitePawn = document.createElement("img");
whitePawn.src = "./img/chess-pieces/white-pawn.svg";
whitePawn.id = "white-pawn";
cell7.classList.add("white");
cell7.appendChild(whitePawn);
