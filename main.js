let selectedPiece = null;
let currentPlayer = "white";
document.getElementById("turn").innerHTML = currentPlayer;

document.querySelectorAll(".box").forEach(function (cell) {
  cell.addEventListener("click", function (event) {
    const clickedCell = event.currentTarget;

    if (!selectedPiece) {
      // Seleziona il pezzo cliccato
      selectedPiece = clickedCell.firstElementChild;
      const pieceColor = getPieceColor(clickedCell.firstElementChild);
      if (pieceColor === currentPlayer) {
        selectedPiece.style.backgroundColor = "#d2ed4a";
      } else {
        selectedPiece = null;
      }
    } else {
      // Gestisci il clic sulla casella di destinazione solo se un pezzo è stato selezionato
      const destinationCell = clickedCell;
      movePiece(selectedPiece, destinationCell);
      selectedPiece.style.backgroundColor = "";
      selectedPiece = null;
      currentPlayer = currentPlayer === "white" ? "black" : "white";
      document.getElementById("turn").innerHTML = currentPlayer;
    }
  });
});

// funzione che permette ai pezzi di muoversi
function movePiece(pieceElement, destinationCell) {
  destinationCell.appendChild(pieceElement);
}

// funzione che controlla il colore del pezzo
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
