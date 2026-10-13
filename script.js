const form = document.getElementById("marksForm");
const result = document.getElementById("result");
const subjectIds = ["maths", "science", "english", "social", "computer"];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("studentName").value.trim();
  const marks = subjectIds.map(id => Number(document.getElementById(id).value));

  if (!name) {
    alert("Please enter the student's name.");
    return;
  }

  if (marks.some(mark => !Number.isFinite(mark) || mark < 0 || mark > 100)) {
    alert("Please enter marks from 0 to 100 for every subject.");
    return;
  }

  const total = marks.reduce((sum, mark) => sum + mark, 0);
  const percentage = total / 5;
  const passed = marks.every(mark => mark >= 35);

  let grade;
  if (!passed) grade = "F";
  else if (percentage >= 90) grade = "A+";
  else if (percentage >= 80) grade = "A";
  else if (percentage >= 70) grade = "B";
  else if (percentage >= 60) grade = "C";
  else if (percentage >= 50) grade = "D";
  else grade = "E";

  document.getElementById("resultName").textContent = `Student: ${name}`;
  document.getElementById("total").textContent = total;
  document.getElementById("percentage").textContent = percentage.toFixed(2);
  document.getElementById("grade").textContent = grade;
  document.getElementById("status").textContent = passed ? "Pass" : "Fail";
  result.hidden = false;
  result.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

form.addEventListener("reset", function () {
  result.hidden = true;
});
