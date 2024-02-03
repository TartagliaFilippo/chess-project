import { getPieceColor } from "../getLogic.js";

function movePiece(pieceElement, destinationCell, currentPlayer) {
  // posizione di partenza del pezzo
  const startPosition = pieceElement.parentElement;
  // controllo se la cella di destinazione ha un elemento
  const hasPiece = destinationCell.firstElementChild;

  // CATTURA del pezzo se nella casella di destinazione c'è un elemento
  if (hasPiece) {
    const pieceColor = getPieceColor(pieceElement);
    const opponentPieceColor = getPieceColor(hasPiece);

    if (pieceColor !== opponentPieceColor) {
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

  console.log(currentPlayer);

  // controllo per il CAMBIO TURNO
  if (startPosition !== destinationCell) {
    currentPlayer = currentPlayer === "white" ? "black" : "white";
    document.getElementById("turn").innerHTML = currentPlayer;
  }

  return currentPlayer;
}

export { movePiece };
