const buttonsContainer = document.getElementById('buttons-container');
const selectedButton = localStorage.getItem('selectedButton');
const buttonMapping = { A: ['A', 'B'], B: ['C', 'D'], C: ['E', 'F'], D: ['G', 'H'] };

buttonMapping[selectedButton].forEach(function(buttonId) {
    const buttonRow = document.createElement('div');
    buttonRow.classList.add('button-row');

    const testButton = document.createElement('button');
    testButton.textContent = buttonId;
    testButton.classList.add('test-button');
    testButton.addEventListener('click', function() {
        localStorage.setItem('selectedTest', buttonId);
        window.location.href = 'page3.html';
    });

    const favoriteButton = document.createElement('button');
    favoriteButton.textContent = '+';
    favoriteButton.classList.add('favorite-button');
    favoriteButton.addEventListener('click', function() {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (!favorites.includes(buttonId)) {
            favorites.push(buttonId);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            alert('Тест добавлен в избранное');
        } else {
            alert('Тест уже находится в избранном');
        }
    });

    buttonRow.appendChild(testButton);
    buttonRow.appendChild(favoriteButton);
    buttonsContainer.appendChild(buttonRow);
});
