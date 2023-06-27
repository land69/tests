const favoritesButtonContainer = document.getElementById('favorites-container');
const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

favorites.forEach(function(favoriteHtml) {
    const favoriteButton = document.createElement('button');
    favoriteButton.innerHTML = favoriteHtml;
    favoritesButtonContainer.appendChild(favoriteButton);
});
