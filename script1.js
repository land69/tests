document.getElementById('buttonA').addEventListener('click', function() {
    localStorage.setItem('selectedButton', 'A');
    window.location.href = 'page2.html';
});

document.getElementById('buttonB').addEventListener('click', function() {
    localStorage.setItem('selectedButton', 'B');
    window.location.href = 'page2.html';
});

document.getElementById('buttonC').addEventListener('click', function() {
    localStorage.setItem('selectedButton', 'C');
    window.location.href = 'page2.html';
});

document.getElementById('buttonD').addEventListener('click', function() {
    localStorage.setItem('selectedButton', 'D');
    window.location.href = 'page2.html';
});