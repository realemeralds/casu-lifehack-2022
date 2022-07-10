// url = "https://lifehack-flask-auth.herokuapp.com";
url = "http://192.168.1.16:5000";

responseString = fetch(`${url}/tutor`, {
  mode: "cors",
})
  .then((response) => response.json())
  .then((data) => {
    json = data;
    json2 = [
      {
        username: "Tutor",
        interest: [4, 5],
        quali: 3,
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum minus quibusdam necessitatibus neque. Odit aut maxime beatae eos quas praesentium?",
        prestige: 3.2,
      },
      {
        username: "Tutor",
        interest: [4, 5],
        quali: 3,
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum minus quibusdam necessitatibus neque. Odit aut maxime beatae eos quas praesentium?",
        prestige: 3.2,
      },
      {
        username: "Tutor",
        interest: [4, 5],
        quali: 3,
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum minus quibusdam necessitatibus neque. Odit aut maxime beatae eos quas praesentium?",
        prestige: 3.2,
      },
      {
        username: "Tutor",
        interest: [4, 5],
        quali: 3,
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum minus quibusdam necessitatibus neque. Odit aut maxime beatae eos quas praesentium?",
        prestige: 3.2,
      },
      {
        username: "John Lee",
        interest: [1, 2, 3],
        quali: 3,
        bio: "hello world!",
        prestige: 3.2,
      },
      {
        username: "Susie Tay",
        interest: [4, 5, 6],
        quali: 3,
        bio: "hello world!sdadasasd",
        prestige: 4.0,
      },
    ];
    render_tutors("all", tutorCards);
    render_tutors("random", randomCards);
  });

const subjectsList = [
  "English",
  "Foreign Language",
  "Economics",
  "History",
  "Geography",
  "Business",
  "Physics",
  "Chemistry",
  "Mathematics",
];
const qualiList = [
  "PSLE",
  "O-Level",
  "A-Level",
  "IBDP",
  "Bachelor's Degree",
  "Graduate or Post-Graduate Degree",
];

tutorCards = document.getElementsByClassName("tutorCards")[1];
randomCards = document.getElementsByClassName("tutorCards")[0];
console.log(document.getElementsByClassName("tutorCards"));

function render_tutors(key, elName) {
  if (localStorage.getItem("loggedIn") == null) {
    return;
  }

  console.log(key, elName);
  tutorCards.innerHTML = "";
  instJson = json[0][key];
  console.log(instJson);
  var selectedSubject = $("#subject").val();
  var selectedQualis = $("#qualis").val();
  for (var i = 0; i < selectedSubject.length; i++) {
    selectedSubject[i] = parseInt(selectedSubject[i]);
  }
  for (var i = 0; i < selectedQualis.length; i++) {
    selectedQualis[i] = parseInt(selectedQualis[i]);
  }
  if (selectedQualis.length == 0) {
    selectedQualis = [0, 1, 2, 3, 4, 5, 6];
  }

  for (var i = 0; i < json.length; i++) {
    if (typeof instJson[i].interest == "number") {
      instJson[i].interest = [instJson[i].interest];
    }
    if (
      selectedSubject.every((val) => instJson[i].interest.includes(val)) &&
      selectedQualis.includes(instJson[i].quali)
    ) {
      indivJson = instJson[i];
      console.log(indivJson);
      indivCardBody = document.createElement("div");
      indivCardBody.classList.add("card-body");
      tutorName = document.createElement("h5");
      tutorName.classList.add("card-title");
      tutorName.innerHTML = indivJson.username;
      bio = document.createElement("p");
      bio.classList.add("bio");
      bio.innerHTML = indivJson.bio;
      subjects = document.createElement("p");
      subjects.classList.add("subjects");
      subjects.innerHTML = `<span>Subjects:</span> ${indivJson.interest.map(
        (element) => {
          return " " + subjectsList[element];
        }
      )}`;
      qualis = document.createElement("p");
      qualis.classList.add("subjects");
      qualis.innerHTML = `<span>Current Prestige:</span> ${indivJson.prestige}`;
      indivCardBody.appendChild(tutorName);
      indivCardBody.appendChild(bio);
      indivCardBody.appendChild(subjects);
      indivCardBody.appendChild(qualis);

      firstInline = document.createElement("div");
      firstInline.classList.add("card-tutor");
      firstInline.appendChild(indivCardBody);
      indivCard = document.createElement("button");
      indivCard.classList.add("ms-4");
      indivCard.classList.add("mb-5");
      indivCard.classList.add("col-5");
      indivCard.setAttribute("onclick", `open_popup(${i})`);
      indivCard.appendChild(firstInline);
      console.log(indivCard);
      elName.appendChild(indivCard);
    }
  }
}

popup_window = document.querySelector(".popupMenu");
popup_background = document.querySelector(".popUpBackground");

function open_popup(i) {
  popup_background.classList.remove("d-none");
  popup_window.classList.remove("d-none");
  indivJson = json[0]["all"][i];
  popup_window.querySelector("h5").innerHTML = indivJson.username;
  popup_window.querySelector(".bio").innerHTML = indivJson.bio;
  popup_window.getElementsByClassName(
    "subjects"
  )[0].innerHTML = `<span>Subjects:</span> ${indivJson.interest.map(
    (element) => {
      return " " + subjectsList[element];
    }
  )}`;
  popup_window.getElementsByClassName(
    "subjects"
  )[1].innerHTML = `<span>Qualification:</span> ${qualiList[indivJson.quali]}`;
  popup_window.getElementsByClassName(
    "subjects"
  )[2].innerHTML = `<span>Current Prestige:</span> ${indivJson.prestige} / 5.0`;
  emailEl = popup_window.querySelector(".emailContact");
  emailEl.setAttribute("onclick", `submitInterest(${i})`);
}

function close_popup() {
  popup_background.classList.add("d-none");
  popup_window.classList.add("d-none");
}
window.addEventListener("click", () => {
  render_tutors("all", tutorCards);
  render_tutors("random", randomCards);
});
document.querySelector(".close").addEventListener("click", close_popup);

popup_signin_window = document.querySelector(".popupSignin");

function open_signIn_popup() {
  popup_background.classList.remove("d-none");
  popup_signin_window.classList.remove("d-none");
}

if (localStorage.getItem("loggedIn") == null) {
  open_signIn_popup();
}

function submitInterest(i) {
  indivJson = json[i];
  fetch(
    `${url}/email/${localStorage.getItem("username")}/${indivJson.email}`
  ).then((response) => {
    if (response.ok) {
      alertEl = document.querySelector(".elStatus");
      alertEl.classList.add("alert");
      alertEl.classList.add("alert-success");
      alertEl.setAttribute("role", "alert");
      alertEl.innerHTML = "email successfully sent!";
    } else {
      alertEl = document.querySelector(".elStatus");
      alertEl.classList.add("alert");
      alertEl.classList.add("alert-danger");
      alertEl.setAttribute("role", "alert");
      alertEl.innerHTML =
        "email error, make sure your email address is correct.";
    }
  });
}
