// const testForm = document.getElementById('test-form');
// const selectedTest = localStorage.getItem('selectedTest');
// const testData = {
//     A: [
//         { question: 'Вопрос 1A', options: ['Ответ 1', 'Ответ 2', 'Ответ 3'], correct: 0 },
//         { question: 'Вопрос 2A', options: ['Ответ 1', 'Ответ 2', 'Ответ 3'], correct: 1},
//         { question: 'Вопрос 3A', options: ['Ответ 1', 'Ответ 2', 'Ответ 3'], correct: 1}
//     ],
   
//     // ... добавьте данные для остальных тестов (B, C, D, E, F, G, H)
// };

// const testQuestions = testData[selectedTest];

// const questionWrapper = document.getElementById('question-wrapper');
// testQuestions.forEach(function(questionData, index) {
//     const questionSlide = document.createElement('div');
//     questionSlide.classList.add('swiper-slide', 'question-slide');
//     questionSlide.innerHTML = `
//         <h3>${questionData.question}</h3>
//         <div>
//             ${questionData.options
//                 .map((option, optionIndex) => `
//                     <label>
//                         <input type="radio" name="question-${index}" value="${optionIndex}">
//                         ${option}
//                     </label>
//                 `)
//                 .join('')}
//         </div>
//         ${index === testQuestions.length - 1 ? '<button id="submit-button">Проверить</button>' : ''}
//     `;
//     questionWrapper.appendChild(questionSlide);
// });

// const prevButton = document.getElementById('prev-button');
// const nextButton = document.getElementById('next-button');
// const submitButton = document.getElementById('submit-button');
// const pagination = document.querySelector('.swiper-pagination');

// const swiper = new Swiper('.swiper-container', {
//     navigation: {
//         prevEl: prevButton,
//         nextEl: nextButton
//     },
//     pagination: {
//         el: pagination,
//         clickable: true
//     }
// });

// swiper.on('slideChange', function() {
//     const activeSlideIndex = swiper.activeIndex;
//     updateButtons(activeSlideIndex);
// });

// function updateButtons(activeSlideIndex) {
//     if (activeSlideIndex === 0) {
//         prevButton.style.display = 'none';
//         nextButton.style.display = 'block';
//         submitButton.classList.add('hidden');
//     } else if (activeSlideIndex === swiper.slides.length - 1) {
//         prevButton.style.display = 'block';
//         nextButton.style.display = 'none';
//         submitButton.classList.remove('hidden');
//     } else {
//         prevButton.style.display = 'block';
//         nextButton.style.display = 'block';
//         submitButton.classList.add('hidden');
//     }
// }

// prevButton.addEventListener('click', function() {
//     swiper.slidePrev();
// });

// nextButton.addEventListener('click', function() {
//     swiper.slideNext();
// });

// submitButton.addEventListener('click', function() {
//     const userAnswers = [];
//     testQuestions.forEach(function(_, index) {
//         const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
//         if (selectedOption) {
//             userAnswers.push(parseInt(selectedOption.value));
//         }
//     });

//     localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
//     window.location.href = 'page4.html';
// });

// updateButtons(0);
const testForm = document.getElementById('test-form');
const selectedTest = localStorage.getItem('selectedTest');
const testData = {
    A: [
        { question: 'Вопрос 1A', options: ['Ответ 1', 'Ответ 2', 'Ответ 3'], correct: 0 },
        { question: 'Вопрос 2A', options: ['Ответ 1', 'Ответ 2', 'Ответ 3'], correct: 1 },
        { question: 'Вопрос 3A', options: ['Ответ 1', 'Ответ 2', 'Ответ 3'], correct: 2 },
        { question: 'Вопрос 3A', options: ['Ответ 1', 'Ответ 2', 'Ответ 3'], correct: 2 }
    ],
    B: [
        { question: 'Вопрос 1A', options: ['Ответ 1', 'Ответ 2', 'Ответ 3'], correct: 0 },
        { question: 'Вопрос 2A', options: ['Ответ 1', 'Ответ 2', 'Ответ 3'], correct: 1 },
        { question: 'Вопрос 3A', options: ['Ответ 1', 'Ответ 2', 'Ответ 3'], correct: 2 },
        { question: 'Вопрос 3A', options: ['Ответ 1', 'Ответ 2', 'Ответ 3'], correct: 2 }
    ],
    // ... добавьте данные для остальных тестов (B, C, D, E, F, G, H)
};

const testQuestions = testData[selectedTest];
const questionWrapper = document.getElementById('question-wrapper');
testQuestions.forEach(function(questionData, index) {
    const questionSlide = document.createElement('div');
    questionSlide.classList.add('question-slide');
    questionSlide.innerHTML = `
        <h3>${questionData.question}</h3>
        <div>
            ${questionData.options
                .map((option, optionIndex) => `
                    <label>
                        <input type="radio" name="question-${index}" value="${optionIndex}">
                        ${option}
                    </label>
                `)
                .join('')}
        </div>
    `;
    questionWrapper.appendChild(questionSlide);
});

const submitButton = document.createElement('button');
submitButton.id = 'submit-button';
submitButton.textContent = 'Проверить';
questionWrapper.appendChild(submitButton);

submitButton.addEventListener('click', function() {
    const userAnswers = [];
    testQuestions.forEach(function(_, index) {
        const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
        if (selectedOption) {
            userAnswers.push(parseInt(selectedOption.value));
        }
    });

    localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
    window.location.href = 'page4.html';
});
