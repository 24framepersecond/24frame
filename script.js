document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('header nav ul li a');

    navLinks.forEach(link => {
        // Check if the link's href includes the current page. 
        // For index.html, check if the path is / or /index.html
        if (link.getAttribute('href') === currentLocation.substring(currentLocation.lastIndexOf('/') + 1) || 
            (currentLocation.endsWith('/') || currentLocation.endsWith('index.html')) && link.getAttribute('href') === 'index.html') {
            link.classList.add('active');
        }
    });
}); 