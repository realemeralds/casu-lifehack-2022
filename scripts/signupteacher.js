formElem = document.querySelector(".loginForm");
console.log(formElem);

formElem.addEventListener("submit", function (e) {
  e.preventDefault(); //to prevent form submission
  const formData = new FormData(formElem);
  console.log(formData.get("qualis")); // foo
  console.log(formData.get("age")); // bar
  console.log(formData.getAll("subjects"));
  console.log(formData.get("bio"));

  alertEl = document.createElement("div");
  alertEl.classList.add("alert");
  alertEl.classList.add("alert-success");
  alertEl.setAttribute("role", "alert");
  alertEl.innerHTML = 'successfully created account! go to "account" to login!';
  console.log(alertEl);
  document.querySelector(".loginForm").appendChild(alertEl);
});
