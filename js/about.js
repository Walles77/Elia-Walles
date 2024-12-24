document.addEventListener('DOMContentLoaded', function () {
    const skillsList = document.querySelector('.skills-list');
    const skillItems = document.querySelectorAll('.skill-item');
    
    let delay = 0;

    skillItems.forEach(function (skillItem, index) {
        setTimeout(function () {
            skillItem.classList.add('show'); // Add the 'show' class to make it visible
        }, delay);
        delay += 500; // Adjust this value to control the delay between each skill
    });

    // Make the skills section visible with a fade-in effect
    setTimeout(function () {
        skillsList.style.opacity = 1;
    }, delay);
});