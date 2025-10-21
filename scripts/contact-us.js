const form = document.getElementById("contact-form");
const successMsg = document.getElementById("success-message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
  successMsg.textContent = '';

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  const subject = form.subject.value.trim();

  let valid = true;

  if (name === "") {
    document.getElementById("error-name").textContent = "Full Name is required";
    valid = false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if(email === ""){
    document.getElementById("error-email").textContent = "Email is required";
    valid = false;
  }else if (!email.match(emailPattern)) {
    document.getElementById("error-email").textContent = "Please enter a valid email address";
    valid = false;
  }

  if (message === "") {
    document.getElementById("error-message").textContent = "Message is required";
    valid = false;
  } else if (message.length < 10){
    document.getElementById("error-message").textContent = "Message must be at least 10 characters long";
    valid = false;
  }

  if (subject === "") {
    document.getElementById("error-subject").textContent = "Subject is required";
    valid = false;
  }

   if (valid) {
    successMsg.textContent = '✅ Thank you! Your message has been successfully sent.';
    form.reset();
  }
});