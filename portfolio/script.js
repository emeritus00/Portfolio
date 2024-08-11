document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const newContact = {
      name: name,
      email: email,
      message: message,
      timestamp: new Date().toISOString(),
    };

    let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

    contacts.push(newContact);

    localStorage.setItem("contacts", JSON.stringify(contacts));

    contactForm.reset();

    alert("Your message has been sent successfully!");
  });
});
