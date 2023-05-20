const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {
  console.log("clicked");
  e.preventDefault();
  let formData = {
    fname: fname.value,
    lname: lname.value,
    emaily: emaily.value,
    message: message.value,
    subject: subject.value,
  };
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/contact");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = function () {
    console.log(xhr.responseText);
    if (xhr.responseText == "success") {
      alert("Your message has been sent 🎉!");
      fname.value = "";
      lname.value = "";
      emaily.value = "";
      message.value = "";
      subject.value = "";
    } else {
      alert("Yowza!! Something went wrong 😖");
    }
  };

  xhr.send(JSON.stringify(formData));
});
