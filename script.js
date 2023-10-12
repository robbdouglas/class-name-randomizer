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

function getRandomStudents(students, numberOfStudents) {
  const randomStudents = [];
  while (randomStudents.length < numberOfStudents) {
    const randomStudent = students[Math.floor(Math.random() * students.length)];
    if (!randomStudents.includes(randomStudent)) {
      randomStudents.push(randomStudent);
    }
  }
  return randomStudents;
}

document.getElementById("randomButton").addEventListener("click", function () {
  const numberOfStudents = parseInt(
    document.getElementById("numberOfStudents").value,
    10
  );
  const result = getRandomStudents(students, numberOfStudents);
  const resultList = document.getElementById("resultList");
  resultList.innerHTML = "";
  result.forEach((student) => {
    const listItem = document.createElement("li");
    listItem.textContent = student;
    resultList.appendChild(listItem);
  });
});



