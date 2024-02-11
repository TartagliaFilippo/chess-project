function checkToTheKing(list, checkCell, boolean) {
  list.includes(checkCell) ? (boolean = true) : (boolean = false);

  return boolean;
}

function getColorCheck(checkCell, boolean) {
  const cellElement = checkCell.firstChild;

  if (boolean === true) {
    cellElement.style.backgroundColor = "red";
  } else if (boolean === false) {
    cellElement.style.backgroundColor = "";
  }
}

export { checkToTheKing, getColorCheck };
