// script.js

// Example: Change flower color when clicked
document.addEventListener('DOMContentLoaded', function() {
    var flower = document.querySelector('.flower');

    flower.addEventListener('click', function() {
        flower.style.backgroundColor = getRandomColor();
    });

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
