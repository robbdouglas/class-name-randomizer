// Liste aller Studenten

const students = [
  "Axel",
  "Robb",
  "Kai",
  "Melisa",
  "Jan",
  "Melle",
  "Miriam",
  "Oli",
  "Norbert",
  "Marvin",
  "Bita",
  "Laila",
  "Emanuela",
  "Atef",
  "Hamze",
];

// Funktion, die zufällige Studenten auswählt

function getRandomStudents(students, numberOfStudents, excludedStudents) {
  const availableStudents = students.filter(
    (student) => !excludedStudents.includes(student)
  );

  const randomStudents = [];
  while (
    randomStudents.length < numberOfStudents &&
    availableStudents.length > 0
  ) {
    const randomIndex = Math.floor(Math.random() * availableStudents.length);
    const randomStudent = availableStudents.splice(randomIndex, 1)[0];
    randomStudents.push(randomStudent);
  }
  return randomStudents;
}

// Funktion, die die Liste der Studenten rendert, d.h. in HTML umwandelt

function renderStudentsList() {
  const studentsList = document.getElementById("studentsList");
  studentsList.innerHTML = "";

  students.forEach((student) => {
    const listItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = student;
    listItem.appendChild(checkbox);
    listItem.appendChild(document.createTextNode(student));
    studentsList.appendChild(listItem);
  });
}

// Event Listener, der auf den Button klickt und die Funktion ausführt

document.getElementById("randomButton").addEventListener("click", function () {
  const numberOfStudents = parseInt(
    document.getElementById("numberOfStudents").value,
    10
  ); 

  const excludedStudents = Array.from(
    document.querySelectorAll("#studentsList input:checked")
  ).map((checkbox) => checkbox.value);

  const result = getRandomStudents(
    students,
    numberOfStudents,
    excludedStudents
  );
  const resultList = document.getElementById("resultList");
  resultList.innerHTML = "";

  // Ergebnis soll in HTML gerendert werden

  result.forEach((student, index) => {
    const listItem = document.createElement("li");
    const strongElement = document.createElement("strong");
    strongElement.textContent = `Task ${index + 1}: `;
    listItem.appendChild(strongElement);
    listItem.appendChild(document.createTextNode(student));
    resultList.appendChild(listItem);
  });
});

// Student List soll beim Laden der Seite gerendert werden
renderStudentsList();

//_______________________________________________________________________________________

/* BONUS 

1. all students must appear in browser with a checkbox. if checkbox next to the student is clicked, the student is excluded from the random selection
2. wer dran kam wird nächste runde gesperrt
3. speichern, nach refresh soll fortschritt gespeichert werden (local storage)

*/
