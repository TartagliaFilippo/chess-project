const cell = document.getElementById("d4");
const cell2 = document.getElementById("e5");
const cell3 = document.getElementById("c4");

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
