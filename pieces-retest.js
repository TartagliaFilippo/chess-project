function createAndPlacePiece(cell, pieceSrc, pieceId, color) {
  const piece = document.createElement("img");
  piece.src = pieceSrc;
  piece.id = pieceId;
  cell.classList.add(color);
  cell.appendChild(piece);
}

const piecesInfo = [
  //pezzi bianchi
  {
    cell: "a1",
    src: "./img/chess-pieces/white-rook.svg",
    id: "white-rook-a",
    color: "white",
  },
  // {
  //   cell: "b1",
  //   src: "./img/chess-pieces/white-knight.svg",
  //   id: "white-knight-b",
  //   color: "white",
  // },
  // {
  //   cell: "c1",
  //   src: "./img/chess-pieces/white-bishop.svg",
  //   id: "white-bishop-c",
  //   color: "white",
  // },
  // {
  //   cell: "d1",
  //   src: "./img/chess-pieces/white-queen.svg",
  //   id: "white-queen",
  //   color: "white",
  // },
  {
    cell: "e1",
    src: "./img/chess-pieces/white-king.svg",
    id: "white-king",
    color: "white",
  },
  // {
  //   cell: "f1",
  //   src: "./img/chess-pieces/white-bishop.svg",
  //   id: "white-bishop-f",
  //   color: "white",
  // },
  // {
  //   cell: "g1",
  //   src: "./img/chess-pieces/white-knight.svg",
  //   id: "white-knight-g",
  //   color: "white",
  // },
  {
    cell: "h1",
    src: "./img/chess-pieces/white-rook.svg",
    id: "white-rook-h",
    color: "white",
  },
  //pedoni bianchi
  // {
  //   cell: "a2",
  //   src: "./img/chess-pieces/white-pawn.svg",
  //   id: "white-pawn-a",
  //   color: "white",
  // },
  // {
  //   cell: "b2",
  //   src: "./img/chess-pieces/white-pawn.svg",
  //   id: "white-pawn-b",
  //   color: "white",
  // },
  // {
  //   cell: "c2",
  //   src: "./img/chess-pieces/white-pawn.svg",
  //   id: "white-pawn-c",
  //   color: "white",
  // },
  // {
  //   cell: "d2",
  //   src: "./img/chess-pieces/white-pawn.svg",
  //   id: "white-pawn-d",
  //   color: "white",
  // },
  {
    cell: "e2",
    src: "./img/chess-pieces/white-pawn.svg",
    id: "white-pawn-e",
    color: "white",
  },
  {
    cell: "f2",
    src: "./img/chess-pieces/white-pawn.svg",
    id: "white-pawn-f",
    color: "white",
  },
  {
    cell: "g2",
    src: "./img/chess-pieces/white-pawn.svg",
    id: "white-pawn-g",
    color: "white",
  },
  {
    cell: "h2",
    src: "./img/chess-pieces/white-pawn.svg",
    id: "white-pawn-h",
    color: "white",
  },
  //pezzi neri
  {
    cell: "a8",
    src: "./img/chess-pieces/black-rook.svg",
    id: "black-rook-a",
    color: "black",
  },
  // {
  //   cell: "b8",
  //   src: "./img/chess-pieces/black-knight.svg",
  //   id: "black-knight-b",
  //   color: "black",
  // },
  // {
  //   cell: "c8",
  //   src: "./img/chess-pieces/black-bishop.svg",
  //   id: "black-bishop-c",
  //   color: "black",
  // },
  // {
  //   cell: "d8",
  //   src: "./img/chess-pieces/black-queen.svg",
  //   id: "black-queen",
  //   color: "black",
  // },
  {
    cell: "e8",
    src: "./img/chess-pieces/black-king.svg",
    id: "black-king",
    color: "black",
  },
  // {
  //   cell: "f8",
  //   src: "./img/chess-pieces/black-bishop.svg",
  //   id: "black-bishop-f",
  //   color: "black",
  // },
  // {
  //   cell: "g8",
  //   src: "./img/chess-pieces/black-knight.svg",
  //   id: "black-knight-g",
  //   color: "black",
  // },
  {
    cell: "h8",
    src: "./img/chess-pieces/black-rook.svg",
    id: "black-rook-h",
    color: "black",
  },
  //pedoni neri
  // {
  //   cell: "a7",
  //   src: "./img/chess-pieces/black-pawn.svg",
  //   id: "black-pawn-a",
  //   color: "black",
  // },
  // {
  //   cell: "b7",
  //   src: "./img/chess-pieces/black-pawn.svg",
  //   id: "black-pawn-b",
  //   color: "black",
  // },
  // {
  //   cell: "c7",
  //   src: "./img/chess-pieces/black-pawn.svg",
  //   id: "black-pawn-c",
  //   color: "black",
  // },
  // {
  //   cell: "d7",
  //   src: "./img/chess-pieces/black-pawn.svg",
  //   id: "black-pawn-d",
  //   color: "black",
  // },
  {
    cell: "e7",
    src: "./img/chess-pieces/black-pawn.svg",
    id: "black-pawn-e",
    color: "black",
  },
  {
    cell: "f7",
    src: "./img/chess-pieces/black-pawn.svg",
    id: "black-pawn-f",
    color: "black",
  },
  {
    cell: "g7",
    src: "./img/chess-pieces/black-pawn.svg",
    id: "black-pawn-g",
    color: "black",
  },
  {
    cell: "h7",
    src: "./img/chess-pieces/black-pawn.svg",
    id: "black-pawn-h",
    color: "black",
  },
];

// Ciclo per creare e posizionare tutti i pezzi
piecesInfo.forEach((pieceInfo) => {
  const cell = document.getElementById(pieceInfo.cell);
  createAndPlacePiece(cell, pieceInfo.src, pieceInfo.id, pieceInfo.color);
});
