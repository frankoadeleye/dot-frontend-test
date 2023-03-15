function elipsis(text = "", numOfCharacters = 25) {
  let arrayFromStr = [];
  let newStr = "";
  if (text.length < numOfCharacters) {
    newStr = text;

    return newStr;
  }

  for (let i = 0; i < numOfCharacters; i++) {
    arrayFromStr[i] = text[i];
  }

  for (let element of arrayFromStr) {
    newStr = newStr + element;
  }

  return newStr + " ...";
}

export default elipsis;
