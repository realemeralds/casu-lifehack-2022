console.log("hello");

container = document.querySelector(".accountContainer");
statusEl = document.createElement("h4");
statusEl.classList.add("status");

button1 = document.createElement("a");
button1.setAttribute("type", "button");
button1.setAttribute("id", "button1");
button1.setAttribute("href", "../pages/signin.html");
button1.classList.add("btn");
button1.classList.add("btn-primary");
button1.innerHTML = "Sign In";

buttonContainer = document.querySelector("#buttoncontainer");

button2 = document.createElement("a");
button2.setAttribute("type", "button");
button2.setAttribute("id", "button2");
button2.setAttribute("href", "../pages/signup.html");
button2.classList.add("btn");
button2.classList.add("btn-primary");
button2.innerHTML = "Register";

button3 = document.createElement("a");
button3.setAttribute("type", "button");
button3.setAttribute("id", "button3");
button3.classList.add("btn");
button3.classList.add("btn-primary");
button3.innerHTML = "Sign Out";

if (localStorage.getItem("loggedIn") != "true") {
  buttonContainer.appendChild(button1);
  buttonContainer.appendChild(button2);
} else {
  statusEl.innerHTML = `Logged in as ${localStorage.getItem("username")}`;
  container.insertBefore(statusEl, document.querySelector("#buttoncontainer"));
  buttonContainer.appendChild(button3);
}

button3.addEventListener("click", () => {
  localStorage.removeItem("loggedIn"),
    localStorage.removeItem("username"),
    location.reload();
});
