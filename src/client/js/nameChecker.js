function checkForName(res, flag) {
  let results = document.getElementById("results");
  if (flag) {
    results.innerHTML = `
    score tag : ${res.score_tag},  
    subjectivity : ${res.subjectivity}, 
    confidence : ${res.confidence}`;
  } else
    results.innerHTML = `${res} : Just numbers | empty fields are not valid`;
}

export { checkForName };
