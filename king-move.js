import { getCoordinateLetter, toggleColor } from "./get-functions.js";
import { addPossibleMove } from "./move.js";
import { futureMoves } from "./piece-position.js";

function kingMoves(startRow, startColumn, color) {
  let listPossibleMove = [];
  const oppositeColor = toggleColor(color);
  const startColumnNumber = getCoordinateLetter(startColumn);

  const elementRight = addPossibleMove(startRow, startColumnNumber + 1);
  const elementLeft = addPossibleMove(startRow, startColumnNumber - 1);
  const elementTop = addPossibleMove(startRow + 1, startColumnNumber);
  const elementDown = addPossibleMove(startRow - 1, startColumnNumber);
  const elementDownRight = addPossibleMove(startRow - 1, startColumnNumber + 1);
  const elementDownLeft = addPossibleMove(startRow - 1, startColumnNumber - 1);
  const elementTopRight = addPossibleMove(startRow + 1, startColumnNumber + 1);
  const elementTopLeft = addPossibleMove(startRow + 1, startColumnNumber - 1);

  const checkKingRight = addPossibleMove(startRow, startColumnNumber + 2);
  const checkKingLeft = addPossibleMove(startRow, startColumnNumber - 2);
  const checkKingTop = addPossibleMove(startRow + 2, startColumnNumber);
  const checkKingDown = addPossibleMove(startRow - 2, startColumnNumber);
  const checkKingTopLeft = addPossibleMove(startRow + 2, startColumnNumber - 1);
  const checkKingTopRight = addPossibleMove(
    startRow + 2,
    startColumnNumber + 1
  );
  const checkKingDownLeft = addPossibleMove(
    startRow - 2,
    startColumnNumber - 1
  );
  const checkKingDownRight = addPossibleMove(
    startRow - 2,
    startColumnNumber + 1
  );
  const checkKingLeftTop = addPossibleMove(startRow + 1, startColumnNumber - 2);
  const checkKingLeftDown = addPossibleMove(
    startRow - 1,
    startColumnNumber - 2
  );
  const checkKingRightTop = addPossibleMove(
    startRow + 1,
    startColumnNumber + 2
  );
  const checkKingRightDown = addPossibleMove(
    startRow - 1,
    startColumnNumber + 2
  );
  const checkKingObliqueDownRight = addPossibleMove(
    startRow - 2,
    startColumnNumber + 2
  );
  const checkKingObliqueDownLeft = addPossibleMove(
    startRow - 2,
    startColumnNumber - 2
  );
  const checkKingObliqueTopRight = addPossibleMove(
    startRow + 2,
    startColumnNumber + 2
  );
  const checkKingObliqueTopLeft = addPossibleMove(
    startRow + 2,
    startColumnNumber - 2
  );

  const listOppositeMoves = futureMoves(oppositeColor);
  if (elementRight !== null && !elementRight.classList.contains(color)) {
    if (!listOppositeMoves.includes(elementRight)) {
      listPossibleMove.push(elementRight);
    }
  }
  if (elementLeft !== null && !elementLeft.classList.contains(color)) {
    if (!listOppositeMoves.includes(elementLeft)) {
      listPossibleMove.push(elementLeft);
    }
  }

  if (elementTop !== null && !elementTop.classList.contains(color)) {
    if (!listOppositeMoves.includes(elementTop)) {
      listPossibleMove.push(elementTop);
    }
  }
  if (elementDown !== null && !elementDown.classList.contains(color)) {
    if (!listOppositeMoves.includes(elementDown)) {
      listPossibleMove.push(elementDown);
    }
  }
  if (
    elementDownRight !== null &&
    !elementDownRight.classList.contains(color)
  ) {
    if (!listOppositeMoves.includes(elementDownRight)) {
      listPossibleMove.push(elementDownRight);
    }
  }
  if (elementDownLeft !== null && !elementDownLeft.classList.contains(color)) {
    if (!listOppositeMoves.includes(elementDownLeft)) {
      listPossibleMove.push(elementDownLeft);
    }
  }
  if (elementTopRight !== null && !elementTopRight.classList.contains(color)) {
    if (!listOppositeMoves.includes(elementTopRight)) {
      listPossibleMove.push(elementTopRight);
    }
  }
  if (elementTopLeft !== null && !elementTopLeft.classList.contains(color)) {
    if (!listOppositeMoves.includes(elementTopLeft)) {
      listPossibleMove.push(elementTopLeft);
    }
  }

  // elementi da rimuovere se c'è il re
  if (checkKingObliqueTopRight !== null) {
    if (checkKingObliqueTopRight.firstElementChild !== null) {
      if (checkKingObliqueTopRight.firstElementChild.id.includes("king")) {
        let indexToRemove = listPossibleMove.indexOf(elementTopRight);
        listPossibleMove.splice(indexToRemove, 1);
      }
    }
  }
  if (checkKingObliqueTopLeft !== null) {
    if (checkKingObliqueTopLeft.firstElementChild !== null) {
      if (checkKingObliqueTopLeft.firstElementChild.id.includes("king")) {
        let indexToRemove = listPossibleMove.indexOf(elementTopLeft);
        listPossibleMove.splice(indexToRemove, 1);
      }
    }
  }
  if (checkKingObliqueDownRight !== null) {
    if (checkKingObliqueDownRight.firstElementChild !== null) {
      if (checkKingObliqueDownRight.firstElementChild.id.includes("king")) {
        let indexToRemove = listPossibleMove.indexOf(elementDownRight);
        listPossibleMove.splice(indexToRemove, 1);
      }
    }
  }
  if (checkKingObliqueDownLeft !== null) {
    if (checkKingObliqueDownLeft.firstElementChild !== null) {
      if (checkKingObliqueDownLeft.firstElementChild.id.includes("king")) {
        let indexToRemove = listPossibleMove.indexOf(elementDownLeft);
        listPossibleMove.splice(indexToRemove, 1);
      }
    }
  }
  if (checkKingTopRight !== null) {
    if (checkKingTopRight.firstElementChild !== null) {
      if (checkKingTopRight.firstElementChild.id.includes("king")) {
        let indexToRemove1 = listPossibleMove.indexOf(elementTopRight);
        listPossibleMove.splice(indexToRemove1, 1);
        let indexToRemove2 = listPossibleMove.indexOf(elementTop);
        listPossibleMove.splice(indexToRemove2, 1);
      }
    }
  }
  if (checkKingTopLeft !== null) {
    if (checkKingTopLeft.firstElementChild !== null) {
      if (checkKingTopLeft.firstElementChild.id.includes("king")) {
        let indexToRemove1 = listPossibleMove.indexOf(elementTopLeft);
        listPossibleMove.splice(indexToRemove1, 1);
        let indexToRemove2 = listPossibleMove.indexOf(elementTop);
        listPossibleMove.splice(indexToRemove2, 1);
      }
    }
  }
  if (checkKingLeftTop !== null) {
    if (checkKingLeftTop.firstElementChild !== null) {
      if (checkKingLeftTop.firstElementChild.id.includes("king")) {
        let indexToRemove1 = listPossibleMove.indexOf(elementTopLeft);
        listPossibleMove.splice(indexToRemove1, 1);
        let indexToRemove2 = listPossibleMove.indexOf(elementLeft);
        listPossibleMove.splice(indexToRemove2, 1);
      }
    }
  }
  if (checkKingLeftDown !== null) {
    if (checkKingLeftDown.firstElementChild !== null) {
      if (checkKingLeftDown.firstElementChild.id.includes("king")) {
        let indexToRemove1 = listPossibleMove.indexOf(elementDownLeft);
        listPossibleMove.splice(indexToRemove1, 1);
        let indexToRemove2 = listPossibleMove.indexOf(elementLeft);
        listPossibleMove.splice(indexToRemove2, 1);
      }
    }
  }
  if (checkKingDownLeft !== null) {
    if (checkKingDownLeft.firstElementChild !== null) {
      if (checkKingDownLeft.firstElementChild.id.includes("king")) {
        let indexToRemove1 = listPossibleMove.indexOf(elementDown);
        listPossibleMove.splice(indexToRemove1, 1);
        let indexToRemove2 = listPossibleMove.indexOf(elementDownLeft);
        listPossibleMove.splice(indexToRemove2, 1);
      }
    }
  }
  if (checkKingDownRight !== null) {
    if (checkKingDownRight.firstElementChild !== null) {
      if (checkKingDownRight.firstElementChild.id.includes("king")) {
        let indexToRemove1 = listPossibleMove.indexOf(elementDown);
        listPossibleMove.splice(indexToRemove1, 1);
        let indexToRemove2 = listPossibleMove.indexOf(elementDownRight);
        listPossibleMove.splice(indexToRemove2, 1);
      }
    }
  }
  if (checkKingRightDown !== null) {
    if (checkKingRightDown.firstElementChild !== null) {
      if (checkKingRightDown.firstElementChild.id.includes("king")) {
        let indexToRemove1 = listPossibleMove.indexOf(elementRight);
        listPossibleMove.splice(indexToRemove1, 1);
        let indexToRemove2 = listPossibleMove.indexOf(elementDownRight);
        listPossibleMove.splice(indexToRemove2, 1);
      }
    }
  }
  if (checkKingRightTop !== null) {
    if (checkKingRightTop.firstElementChild !== null) {
      if (checkKingRightTop.firstElementChild.id.includes("king")) {
        let indexToRemove1 = listPossibleMove.indexOf(elementRight);
        listPossibleMove.splice(indexToRemove1, 1);
        let indexToRemove2 = listPossibleMove.indexOf(elementTopRight);
        listPossibleMove.splice(indexToRemove2, 1);
      }
    }
  }
  if (checkKingRight !== null) {
    if (checkKingRight.firstElementChild !== null) {
      if (checkKingRight.firstElementChild.id.includes("king")) {
        let indexToRemove1 = listPossibleMove.indexOf(elementRight);
        listPossibleMove.splice(indexToRemove1, 1);
        let indexToRemove2 = listPossibleMove.indexOf(elementTopRight);
        listPossibleMove.splice(indexToRemove2, 1);
        let indexToRemove3 = listPossibleMove.indexOf(elementDownRight);
        listPossibleMove.splice(indexToRemove3, 1);
      }
    }
  }
  if (checkKingLeft !== null) {
    if (checkKingLeft.firstElementChild !== null) {
      if (checkKingLeft.firstElementChild.id.includes("king")) {
        let indexToRemove1 = listPossibleMove.indexOf(elementLeft);
        listPossibleMove.splice(indexToRemove1, 1);
        let indexToRemove2 = listPossibleMove.indexOf(elementTopLeft);
        listPossibleMove.splice(indexToRemove2, 1);
        let indexToRemove3 = listPossibleMove.indexOf(elementDownLeft);
        listPossibleMove.splice(indexToRemove3, 1);
      }
    }
  }
  if (checkKingTop !== null) {
    if (checkKingTop.firstElementChild !== null) {
      if (checkKingTop.firstElementChild.id.includes("king")) {
        let indexToRemove1 = listPossibleMove.indexOf(elementTop);
        listPossibleMove.splice(indexToRemove1, 1);
        let indexToRemove2 = listPossibleMove.indexOf(elementTopLeft);
        listPossibleMove.splice(indexToRemove2, 1);
        let indexToRemove3 = listPossibleMove.indexOf(elementTopRight);
        listPossibleMove.splice(indexToRemove3, 1);
      }
    }
  }
  if (checkKingDown !== null) {
    if (checkKingDown.firstElementChild !== null) {
      if (checkKingDown.firstElementChild.id.includes("king")) {
        let indexToRemove1 = listPossibleMove.indexOf(elementDown);
        listPossibleMove.splice(indexToRemove1, 1);
        let indexToRemove2 = listPossibleMove.indexOf(elementDownLeft);
        listPossibleMove.splice(indexToRemove2, 1);
        let indexToRemove3 = listPossibleMove.indexOf(elementDownRight);
        listPossibleMove.splice(indexToRemove3, 1);
      }
    }
  }

  return listPossibleMove;
}

export { kingMoves };
