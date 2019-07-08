//select HTML tags and store references
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

//functions for building the quiz and showing results

function buildQuiz(){}

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);

//displaying questions
const myQuestions = [
  {
    question: "Which of the 3 colors do you like the most?",
    answers: {
      a: "Yellow",
      b: "Red",
      c: "Blue",
      d: "White"
    },
    possibleAnswer: "a, b, c, d"
},
  {
    question: "What's music genre do you like the most?",
    answers: {
      a: "Jazz",
      b: "Blues",
      c: "Rock & Roll",
      d: "Heavy metal",
      e: "R&B"
    },
    possibleAnswer: "a, b, c, d"
  },
  {
    question: "Who's your favorite actor",
    answers: {
      a: "Keanu Reeves",
      b: "Denzel Washington",
      c: "Bruce Willis",
      d: "Johhny Depp"
    },
    possibleAnswer: "a, b, c, d"
  }
];



/*function buildQuiz(){
  // we'll need a place to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}
*/