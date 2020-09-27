function isValid(inputText) {
  console.log("inside isValid");
  if (inputText == "" || inputText == null) {
    return false;
  } else if (/^\d+$/.test(inputText)) {
    return false;
  }

  return true;
}

export { isValid };
