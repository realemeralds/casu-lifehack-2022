// url = "https://lifehack-flask-auth.herokuapp.com";
url = "http://192.168.1.16:5000";
formElem = document.querySelector(".loginForm");
console.log(formElem);

formElem.addEventListener("submit", function (e) {
  e.preventDefault(); //to prevent form submission
  const formData = new FormData(formElem);
  console.log(formData.get("email"));
  console.log(formData.get("username")); // foo
  console.log(formData.get("password")); // bar
  console.log(formData.get("teach"));

  if (formData.get("teach") == "on") {
    localStorage.setItem(
      "creds",
      JSON.stringify({
        email: formData.get("email"),
        username: formData.get("username"),
        password: formData.get("password"),
        teacher: "true",
      })
    );
    window.location.href = "signUpTeacher.html";
  } else {
    data = JSON.stringify({
      teacher: "false",
      email: formData.get("email"),
      username: formData.get("username"),
      password: formData.get("password"),
    });
    console.log(data);
    responseString = fetch(`${url}/signup`, {
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
          alertEl.innerHTML =
            "successfully created account! redirecting to login!";
          setTimeout(() => {
            window.location.href = "../../pages/signin.html";
          }, 2000);
        } else {
          alertEl = document.querySelector(".elStatus");
          alertEl.classList.add("alert");
          alertEl.classList.add("alert-danger");
          alertEl.setAttribute("role", "alert");
          alertEl.innerHTML = "incorrect credentials";
        }
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", "sad");
      });
  }
});
