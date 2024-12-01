document.addEventListener('DOMContentLoaded', () => {
    const API_URL = "https://psychologist-finder-backend-production.up.railway.app";

    document.getElementById('registerBtn').addEventListener('click', async () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch(`${API_URL}/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password }),
            });

            if (!response.ok) {
                const error = await response.json();
                alert(error.error || 'Registration failed');
                return;
            }

            alert('Registration successful');
        } catch (err) {
            console.error('Error:', err);
            alert('Failed to connect to the server');
        }
    });
});
