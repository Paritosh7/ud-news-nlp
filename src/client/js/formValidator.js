function isValid(inputText) {
  console.log("checking input");
  if (inputText == "" || inputText == null) {
    return false;
  } else if (/^\d+$/.test(inputText)) {
    return false;
  }
  return true;
}

export { isValid };
