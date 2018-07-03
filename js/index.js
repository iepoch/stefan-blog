/*https://www.sitepoint.com/simple-javascript-quiz/
view-source:http://webbness.net/index.html
*/
(function() {
  

  function buildQuiz() {
    const  output = [];
    question.forEach((currentQuestion, questionNumber) => {
       
        const options = [];

      for (number in currentQuestion.options) {
        options.push(` <label>
            <input type="radio" name="question${questionNumber}" value="${number}">
                ${number} :
              ${currentQuestion.options[number]}
           </label>`);
      }
      -+number;

      output.push(
        `<div class= "question"> ${currentQuestion.question} </div>
     <div class="options">${options.join("")}</div>
     `
      );
    });
      quizContainer.innerHTML = output.join("");
  }


  function showResults() {
    const answerContainers = quizContainer.querySelectorAll(".options");

    let totalNum = 0;

    question.forEach((currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = "input [type=radio" + totalNum + "]:checked";
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

   totalNum += userAnswer;

    });
  }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
  const question = [
    {
      question: "Do you have cash in your pocket?",
      options: { 1: "Yes", 2: "Kind Of", 3: "No", 4: "You must be kidding?" }
    },
    {
      question: "Do you have cash in your pocket?",
      options: { 1: "Yes", 2: "Kind Of", 3: "No", 4: "You must be kidding?" }
    }
  ];

  buildQuiz();
})();