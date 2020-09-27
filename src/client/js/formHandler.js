function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;

  console.log("::: Form Submitted :::");

  if (Client.isValid(formText)) {
    fetch(`http://localhost:8081/get/${formText}`)
      .then((res) => res.json())
      .then(function (res) {
        console.log(res);
        Client.checkForName(res, true);
      });
  } else Client.checkForName("Please enter a valid input field", false);
}

export { handleSubmit };
