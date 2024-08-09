document.addEventListener("DOMContentLoaded", function() {
    // Select all anchor links with href starting with #
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default anchor click behavior
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth' // Smooth scrolling
            });
        });
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const panel = document.querySelector('.about-panel');

    function checkScroll() {
        const panelPosition = panel.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (panelPosition < viewportHeight - 100) { // Adjust 100px as needed
            panel.classList.add('panel-visible');
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check scroll position on page load
});
