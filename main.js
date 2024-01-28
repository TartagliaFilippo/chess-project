let selectedPiece = null;
let currentPlayer = "white";

document.querySelectorAll(".box").forEach(function (cell) {
  cell.addEventListener("click", function (event) {
    clickedCell = event.currentTarget;

    if (!selectedPiece) {
      // Seleziona il pezzo cliccato
      selectedPiece = clickedCell.firstElementChild;
      if (selectedPiece) {
        selectedPiece.style.backgroundColor = "#d2ed4a";
        console.log("Pezzo selezionato:", selectedPiece);
      }
    } else {
      // Gestisci il clic sulla casella di destinazione solo se un pezzo è stato selezionato
      const destinationCell = clickedCell;
      movePiece(selectedPiece, destinationCell);
      selectedPiece.style.backgroundColor = "";
      selectedPiece = null;
    }
  });
});

// funzione che permette ai pezzi di muoversi
function movePiece(pieceElement, destinationCell) {
  destinationCell.appendChild(pieceElement);
}
