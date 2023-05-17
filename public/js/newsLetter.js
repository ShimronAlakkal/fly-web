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
      alert("You'll hear from us SOON!!");
      email.value = "";
    } else {
      alert("Yowza!! Something went wrong 😖");
    }
  };
  xhr.send(JSON.stringify(formData));
});
