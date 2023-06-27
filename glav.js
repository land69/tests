const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuItems = document.querySelector('.burger-menu-items');

burgerMenu.addEventListener('click', function() {
  burgerMenu.classList.toggle('open');
  burgerMenuItems.classList.toggle('show');
});



// Получаем кнопки "Перейти к тестам"
var testButtons = document.querySelectorAll('.pereiti_k_testam');

// Обрабатываем клик по кнопкам
testButtons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    // Отменяем переход по ссылке по умолчанию
    event.preventDefault();

    // Получаем ссылку на тесты
    var testLink = button.getAttribute('href');

    // Открываем страницу с тестами
    openTestPage(testLink);
  });
});

// Функция для открытия страницы с тестами
function openTestPage(url) {
  // Открываем новую страницу с выбором из трех тестов
  window.open(url, '_blank');
}
