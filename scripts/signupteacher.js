// url = "https://lifehack-flask-auth.herokuapp.com";
url = "http://192.168.1.16:5000";
formElem = document.querySelector(".loginForm");
console.log(formElem);

pastCreds = JSON.parse(localStorage.getItem("creds"));
console.log(pastCreds);

formElem.addEventListener("submit", function (e) {
  e.preventDefault(); //to prevent form submission
  const formData = new FormData(formElem);
  console.log(formData.get("qualis")); // foo
  console.log(formData.get("age")); // bar
  console.log(formData.getAll("subjects"));
  console.log(formData.get("bio"));

  newCreds = {
    qualis: formData.get("qualis"),
    age: formData.get("age"),
    subjects: formData.get("subjects"),
    bio: formData.get("bio"),
  };

  finalCreds = Object.assign({}, pastCreds, newCreds);
  console.log(finalCreds);
  localStorage.removeItem("creds");

  responseString = fetch(`${url}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify(finalCreds),
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
      console.error("Error:", error);
    });
});
