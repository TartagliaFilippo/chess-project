let selectedPiece = null;
let currentPlayer = "white";
document.getElementById("turn").innerHTML = currentPlayer;

document.querySelectorAll(".box").forEach(function (cell) {
  cell.addEventListener("click", function (event) {
    const clickedCell = event.currentTarget;

    if (!selectedPiece) {
      // seleziona il pezzo cliccato
      selectedPiece = clickedCell.firstElementChild;
      const pieceColor = getPieceColor(clickedCell.firstElementChild);
      if (pieceColor === currentPlayer) {
        selectedPiece.style.backgroundColor = "#d2ed4a";
      } else {
        selectedPiece = null;
      }
    } else {
      // gestisco il clic sulla casella di destinazione solo se un pezzo è stato selezionato
      const destinationCell = clickedCell;

      // MUOVO il pezzo
      movePiece(selectedPiece, destinationCell);
      selectedPiece.style.backgroundColor = "";
      selectedPiece = null;
    }
  });
});

// funzione per MUOVERE I PEZZI
function movePiece(pieceElement, destinationCell) {
  const startPosition = pieceElement.parentElement;
  const hasPiece = destinationCell.firstElementChild;
  const pieceId = pieceElement.id;
  let pieceType;
  let removePieceType;

  // CATTURA del pezzo se nella casella di destinazione c'è un elemento
  if (hasPiece) {
    const removePieceId = hasPiece.id;

    pieceId.includes("white") ? (pieceType = "white") : (pieceType = "black");
    removePieceId.includes("white")
      ? (removePieceType = "white")
      : (removePieceType = "black");

    if (pieceType !== removePieceType) {
      hasPiece.parentNode.removeChild(hasPiece);
    } else {
      return;
    }
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
function getPieceColor(pieceElement) {
  if (!pieceElement) return null;

  const pieceId = pieceElement.id;
  if (pieceId.includes("white")) {
    return "white";
  } else if (pieceId.includes("black")) {
    return "black";
  }
  return null;
}
