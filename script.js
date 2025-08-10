const button = document.getElementById('theme');
button.addEventListener('click', () => {
        document.body.classList.toggle('dark'); 
        // Change button text depending on mode
        if (document.body.classList.contains('dark')) {
            button.textContent = "☀️ Light Mode";
        } else {
            button.textContent = "🌙 Dark Mode";
        }
    });