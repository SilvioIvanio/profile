// Mode toggle functionality
const button = document.getElementById('mode');
button.addEventListener('click', () => {
        document.body.classList.toggle('dark'); 
        // Change button text depending on mode
        if (document.body.classList.contains('dark')) {
            button.textContent = "☀️ Light Mode";
        } else {
            button.textContent = "🌙 Dark Mode";
        }
    });