tutorCards = document.querySelector(".tutorCards");
json = [
  {
    username: "Tutor",
    interest: [4, 5],
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum minus quibusdam necessitatibus neque. Odit aut maxime beatae eos quas praesentium?",
    prestige: 3.2,
  },
  {
    username: "Tutor",
    interest: [4, 5],
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum minus quibusdam necessitatibus neque. Odit aut maxime beatae eos quas praesentium?",
    prestige: 3.2,
  },
  {
    username: "Tutor",
    interest: [4, 5],
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum minus quibusdam necessitatibus neque. Odit aut maxime beatae eos quas praesentium?",
    prestige: 3.2,
  },
  {
    username: "Tutor",
    interest: [4, 5],
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum minus quibusdam necessitatibus neque. Odit aut maxime beatae eos quas praesentium?",
    prestige: 3.2,
  },
  {
    username: "John Lee",
    interest: [1, 2, 3],
    bio: "hello world!",
    prestige: 3.2,
  },
  {
    username: "Susie Tay",
    interest: [4, 5, 6],
    bio: "hello world!sdadasasd",
    prestige: 4.0,
  },
];

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

for (var i = 0; i < json.length; i++) {
  indivJson = json[i];
  indivCardBody = document.createElement("div");
  indivCardBody.classList.add("card-body");
  console.log(indivCardBody);
  tutorName = document.createElement("h5");
  tutorName.classList.add("card-title");
  tutorName.innerHTML = indivJson.username;
  bio = document.createElement("p");
  bio.classList.add("bio");
  bio.innerHTML = indivJson.bio;
  subjects = document.createElement("p");
  subjects.classList.add("subjects");
  subjects.innerHTML = `<span>Subjects taught:</span> ${indivJson.interest.map(
    (element) => {
      return " " + subjectsList[element - 1];
    }
  )}`;
  indivCardBody.appendChild(tutorName);
  indivCardBody.appendChild(bio);
  indivCardBody.appendChild(subjects);

  console.log(indivCardBody);
  firstInline = document.createElement("div");
  firstInline.classList.add("card-tutor");
  firstInline.appendChild(indivCardBody);
  indivCard = document.createElement("div");
  indivCard.classList.add("ms-4");
  indivCard.classList.add("mb-5");
  indivCard.classList.add("col-5");
  indivCard.appendChild(firstInline);
  tutorCards.appendChild(indivCard);
}
