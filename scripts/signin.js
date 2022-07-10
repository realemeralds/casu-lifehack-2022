url = "https://lifehack-flask-auth.herokuapp.com/";
formElem = document.querySelector("#loginForm");
console.log(formElem);
formElem.addEventListener("submit", function (e) {
  e.preventDefault(); //to prevent form submission
  const formData = new FormData(formElem);
  console.log(formData.get("username")); // foo
  console.log(formData.get("password")); // bar

  data = JSON.stringify({
    username: formData.get("username"),
    password: formData.get("password"),
  });
  responseString = fetch(`${url}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: data,
  })
    .then((response) => {
      if (response.ok) {
        alertEl = document.querySelector(".elStatus");
        alertEl.classList.add("alert");
        alertEl.classList.add("alert-success");
        alertEl.setAttribute("role", "alert");
        alertEl.innerHTML = "successfully logged in!";
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("username", formData.get("username"));
        console.log(localStorage.getItem("loggedIn"));
        setTimeout(() => {
          window.location.href = "../../pages/tutor.html";
        }, 2000);
      } else {
        alertEl = document.querySelector(".elStatus");
        alertEl.classList.add("alert");
        alertEl.classList.add("alert-danger");
        alertEl.setAttribute("role", "alert");
        alertEl.innerHTML = "incorrect credentials";
        document.querySelector(".loginForm").appendChild(alertEl);
      }
    })
    .catch((error) => {
      console.error("Error:", "sad");
      alertEl = document.querySelector(".elStatus");
      console.log(alertEl);
      alertEl.classList.add("alert");
      alertEl.classList.add("alert-danger");
      alertEl.setAttribute("role", "alert");
      alertEl.innerHTML = "incorrect credentials";
      document.querySelector(".loginForm").appendChild(alertEl);
    });
});
