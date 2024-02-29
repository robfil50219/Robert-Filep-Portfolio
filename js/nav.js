document.addEventListener('DOMContentLoaded', function() {
    // Toggle visibility for projects section
    document.getElementById('showProjects').addEventListener('click', function() {
        var projectsSection = document.getElementById('projects');
        projectsSection.classList.toggle('hidden');
    });

    // Smooth scroll to contact section
    document.getElementById('scrollToContact').addEventListener('click', function(e) {
        e.preventDefault(); 
        var contactSection = document.getElementById('contact');
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Smooth scroll to the top of the page for the "Home" button
    document.getElementById('scrollToHome').addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

