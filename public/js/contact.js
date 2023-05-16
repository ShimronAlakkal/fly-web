const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = {
    fname: fname.value,
    lname: lname.value,
    emaily: emaily.value,
    message: message.value,
    subject: subject.value,
  };
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/contact.html");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = function () {
    console.log(xhr.responseText);
    if (xhr.responseText == "success") {
      alert("Email sent");
      fname.value = "";
      lname.value = "";
      emaily.value = "";
      message.value = "";
      subject.value = "";
    } else {
      alert("Something went wrong!");
    }
  };

  xhr.send(JSON.stringify(formData));
});
