// mywork.js

document.addEventListener('DOMContentLoaded', function() {
    var flower = document.querySelector('.flower');

    // Attach a click event listener to each petal
    var petals = document.querySelectorAll('.petal');
    petals.forEach(function(petal) {
        petal.addEventListener('click', function() {
            // Change the color of the clicked petal
            petal.style.backgroundColor = getRandomColor();
        });
    });

    // Function to generate a random color
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
