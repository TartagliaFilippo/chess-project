function checkToTheKing(list, checkCell, boolean) {
  if (!checkCell.firstChild) {
    return boolean;
  }

  if (list.includes(checkCell)) {
    boolean = true;
  } else {
    boolean = false;
  }

  const cellElement = checkCell.firstChild;

  if (boolean === true) {
    cellElement.style.backgroundColor = "red";
  } else if (boolean === false) {
    cellElement.style.backgroundColor = "";
  }

  return boolean;
}

export { checkToTheKing };
