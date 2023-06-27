const resultsContainer = document.getElementById('results');
const selectedTest = localStorage.getItem('selectedTest');
const userAnswers = JSON.parse(localStorage.getItem('userAnswers'));
const testData = {
    A: [
        { question: 'Вопрос 1A', options: ['Ответ 1', 'Ответ 2', 'Ответ 3'], correct: 0 },
        { question: 'Вопрос 2A', options: ['Ответ 1', 'Ответ 2', 'Ответ 3'], correct: 1 },
        { question: 'Вопрос 3A', options: ['Ответ 1', 'Ответ 2', 'Ответ 3'], correct: 2 },
        { question: 'Вопрос 4A', options: ['Ответ 1', 'Ответ 2', 'Ответ 3'], correct: 2 }
    ],
    // ... добавьте данные для остальных тестов (B, C, D, E, F, G, H)
};

const testQuestions = testData[selectedTest];

let correctAnswers = 0;
let incorrectAnswers = [];

testQuestions.forEach(function(questionData, index) {
    const userAnswer = userAnswers[index];
    if (userAnswer === questionData.correct) {
        correctAnswers++;
    } else {
        incorrectAnswers.push({ question: questionData.question, correctAnswer: questionData.options[questionData.correct], userAnswer: questionData.options[userAnswer] });
    }
});

const resultsTable = document.getElementById('results-table').getElementsByTagName('tbody')[0];

testQuestions.forEach(function(questionData, index) {
  const row = document.createElement('tr');

  const userAnswer = userAnswers[index];
  const userAnswerCell = document.createElement('td');
  userAnswerCell.textContent = questionData.options[userAnswer];
  if (userAnswer === questionData.correct) {
    userAnswerCell.classList.add('correct-answer');
  } else {
    userAnswerCell.classList.add('user-answer');
  }
  row.appendChild(userAnswerCell);

  const correctAnswerCell = document.createElement('td');
  correctAnswerCell.textContent = questionData.options[questionData.correct];
  correctAnswerCell.classList.add('correct-answer');
  row.appendChild(correctAnswerCell);

  resultsTable.appendChild(row);
});

