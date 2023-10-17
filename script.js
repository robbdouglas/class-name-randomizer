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
    (student) => !excludedStudents.includes(student) // Wir filtern erst alle Studenten aus, die nicht ausgewählt werden sollen
  );

  const randomStudents = [];
  while (
    randomStudents.length < numberOfStudents &&
    availableStudents.length > 0 // Wir wählen so lange zufällige Studenten aus, bis die gewünschte Anzahl erreicht ist
  ) {
    const randomIndex = Math.floor(Math.random() * availableStudents.length); // Wir wählen einen zufälligen Index aus
    const randomStudent = availableStudents.splice(randomIndex, 1)[0]; // Wir wählen den Studenten an der Stelle des Index aus und entfernen ihn aus dem Array
    randomStudents.push(randomStudent); // Wir fügen den Studenten dem Ergebnisarray der zufälligen Studenten hinzu
  }
  return randomStudents;
}

// Funktion, die die Liste der Studenten rendert, d.h. in HTML umwandelt

function renderStudentsList() {
  const studentsList = document.getElementById("studentsList");
  studentsList.innerHTML = ""; // Wir leeren die Liste, damit sie nicht doppelt gerendert wird

  students.forEach((student) => {
    const listItem = document.createElement("li"); // Wir erstellen ein Listenelement
    const checkbox = document.createElement("input"); // Wir erstellen ein Checkbox-Element
    checkbox.type = "checkbox";
    checkbox.value = student;
    listItem.appendChild(checkbox); // Wir fügen die Checkbox dem Listenelement hinzu
    listItem.appendChild(document.createTextNode(student)); // Wir fügen den Text dem Listenelement hinzu
    studentsList.appendChild(listItem); // Wir fügen das Listenelement der Liste hinzu
  });
}

// Event Listener, der auf den Button klickt und die Funktion ausführt

document.getElementById("randomButton").addEventListener("click", function () {
  const numberOfStudents = parseInt(
    document.getElementById("numberOfStudents").value,
    10
  ); // Wir holen uns die Anzahl der Studenten, die ausgewählt werden sollen

  const excludedStudents = Array.from(
    document.querySelectorAll("#studentsList input:checked")
  ).map((checkbox) => checkbox.value); // Wir holen uns die Studenten, die ausgeschlossen werden sollen

  const result = getRandomStudents(
    students,
    numberOfStudents,
    excludedStudents
  );
  const resultList = document.getElementById("resultList"); // Wir holen uns die Liste, in der das Ergebnis gerendert werden soll
  resultList.innerHTML = ""; 

  // Ergebnis soll in HTML gerendert werden

  result.forEach((student, index) => {
    const listItem = document.createElement("li");
    const strongElement = document.createElement("strong"); 
    strongElement.textContent = `Task ${index + 1}: `; // Wir fügen die Aufgabe hinzu und erhöhen den Index um 1 (Aufgabe 1: ... Aufgabe 2: ...)
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
