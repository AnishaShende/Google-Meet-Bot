let questionCount = 1;

document
  .getElementById("add-question-btn")
  .addEventListener("click", function () {
    questionCount++;

    // Create a new question field
    const newQuestionField = document.createElement("div");
    newQuestionField.classList.add("question-field");

    const newLabel = document.createElement("label");
    newLabel.setAttribute("for", `question-${questionCount}`);
    newLabel.textContent = `Question ${questionCount}`;

    const newInput = document.createElement("input");
    newInput.setAttribute("type", "text");
    newInput.setAttribute("id", `question-${questionCount}`);
    newInput.setAttribute("name", `question-${questionCount}`);
    newInput.setAttribute("placeholder", "Enter your question");
    newInput.required = true;

    newQuestionField.appendChild(newLabel);
    newQuestionField.appendChild(newInput);

    // Append the new question field to the form
    document
      .getElementById("questions-container")
      .appendChild(newQuestionField);
  });

document
  .getElementById("questions-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect all the questions
    const questions = [];
    for (let i = 1; i <= questionCount; i++) {
      const questionValue = document.getElementById(`question-${i}`).value;
      questions.push(`Q${i}: ${questionValue}`);
    }

    // Output questions to console
    console.log("Saved Questions:", questions);
  });
