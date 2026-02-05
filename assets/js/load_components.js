document.addEventListener("DOMContentLoaded", function() {
    // Load Footer
    fetch('footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            const footerPlaceholder = document.getElementById('footer-placeholder');
            if (footerPlaceholder) {
                footerPlaceholder.innerHTML = data;
                
                // Re-initialize current year if needed (though the HTML has the span, we need to populate it)
                const yearSpans = footerPlaceholder.querySelectorAll('.current-year');
                const currentYear = new Date().getFullYear();
                yearSpans.forEach(span => {
                    span.textContent = currentYear;
                });
            }
        })
        .catch(error => console.error('Error loading footer:', error));
});
