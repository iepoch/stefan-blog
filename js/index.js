/*https://www.sitepoint.com/simple-javascript-quiz/
view-source:http://webbness.net/index.html
*/

const quizContainer = document.getElementById('quiz');
const resultsContainer= document.getElementById('results');
function(){
const questions = [{
    question: "Do you have cash in your pocket?",
    options: {1: "Yes", 2: "Kind Of",3: "No",4: "You must be kidding?"},
    answer: [1,2,3,4]
}

]}

function buildQuiz(){
const output =[]; 
const options = [];
questions.forEach((currentQuestion, questionNumber)=>{
 
    for(number in currentQuestion.options)
    options.push(
       ` <label>
            <input type="radio" name="question${questionNumber}" value="${number}">
                ${number} :
              ${currentQuestion.options[number]}
           </label>`
     );
 })
 
 
}