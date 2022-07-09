formElem = document.querySelector(".loginForm");
console.log(formElem);

formElem.addEventListener("submit", function (e) {
  e.preventDefault(); //to prevent form submission
  const formData = new FormData(formElem);
  console.log(formData.get("username")); // foo
  console.log(formData.get("password")); // bar
  console.log(formData.get("teach"));

  if (formData.get("teach") == "on") {
    window.location.href = "signUpTeacher.html";
  }
});
