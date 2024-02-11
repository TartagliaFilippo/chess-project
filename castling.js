function shortCastleMove(
  color,
  whiteKingIsMoved,
  blackKingIsMoved,
  whiteHRookIsMoved,
  blackHRookIsMoved,
  listOppositeMoves
) {
  const cellG1 = document.querySelector(`.cell[data-letter="g"][data-row="1"]`);
  const cellG8 = document.querySelector(`.cell[data-letter="g"][data-row="8"]`);
  const cellF1 = document.querySelector(`.cell[data-letter="f"][data-row="1"]`);
  const cellF8 = document.querySelector(`.cell[data-letter="f"][data-row="8"]`);

  if (color === "white") {
    if (whiteKingIsMoved === false && whiteHRookIsMoved === false) {
      if (
        !listOppositeMoves.includes(cellF1) &&
        !listOppositeMoves.includes(cellG1)
      ) {
        if (
          cellG1.firstElementChild === null &&
          cellF1.firstElementChild === null
        ) {
          const shortCastle = document.querySelector(
            `.cell[data-letter="g"][data-row="1"]`
          );

          return shortCastle;
        }
      }
    } else {
      return;
    }
  } else if (color === "black") {
    if (blackKingIsMoved === false && blackHRookIsMoved === false) {
      if (
        !listOppositeMoves.includes(cellF8) &&
        !listOppositeMoves.includes(cellG8)
      ) {
        if (
          cellF8.firstElementChild === null &&
          cellG8.firstElementChild === null
        ) {
          const shortCastle = document.querySelector(
            `.cell[data-letter="g"][data-row="8"]`
          );

          return shortCastle;
        }
      }
    }
  } else {
    return;
  }
}

function longCastleMove(
  color,
  whiteKingIsMoved,
  blackKingIsMoved,
  whiteARookIsMoved,
  blackARookIsMoved,
  listOppositeMoves
) {
  const cellD1 = document.querySelector(`.cell[data-letter="d"][data-row="1"]`);
  const cellD8 = document.querySelector(`.cell[data-letter="d"][data-row="8"]`);
  const cellC1 = document.querySelector(`.cell[data-letter="c"][data-row="1"]`);
  const cellC8 = document.querySelector(`.cell[data-letter="c"][data-row="8"]`);
  const cellB1 = document.querySelector(`.cell[data-letter="b"][data-row="1"]`);
  const cellB8 = document.querySelector(`.cell[data-letter="b"][data-row="8"]`);

  if (color === "white") {
    if (whiteKingIsMoved === false && whiteARookIsMoved === false) {
      if (
        !listOppositeMoves.includes(cellC1) &&
        !listOppositeMoves.includes(cellD1)
      ) {
        if (
          cellC1.firstElementChild === null &&
          cellD1.firstElementChild === null &&
          cellB1.firstElementChild === null
        ) {
          const longCastle = document.querySelector(
            `.cell[data-letter="c"][data-row="1"]`
          );

          return longCastle;
        }
      }
    }
  } else if (color === "black") {
    if (blackKingIsMoved === false && blackARookIsMoved === false) {
      if (
        !listOppositeMoves.includes(cellC8) &&
        !listOppositeMoves.includes(cellD8)
      ) {
        if (
          cellC8.firstElementChild === null &&
          cellB8.firstElementChild === null &&
          cellD8.firstElementChild === null
        ) {
          const longCastle = document.querySelector(
            `.cell[data-letter="c"][data-row="8"]`
          );

          return longCastle;
        }
      }
    }
  }
}

export { shortCastleMove, longCastleMove };
