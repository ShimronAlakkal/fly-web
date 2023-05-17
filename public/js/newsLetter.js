const newsLetter = document.querySelector(".newsLetter");
newsLetter.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = {
    email: email.value,
  };
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/newsLetter");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = function () {
    console.log(xhr.responseText);
    if (xhr.responseText == "success") {
      alert("Signed up for newsletter!");
      email.value = "";
    } else {
      alert("Something went wrong!");
    }
  };
  xhr.send(JSON.stringify(formData));
});
