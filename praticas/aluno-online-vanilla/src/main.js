import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  if (form) {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');

    // Function to clear error message
    const clearError = () => {
      errorMessage.style.display = 'none';
      errorMessage.textContent = '';
    };

    // Add input event listeners to clear errors when user starts typing
    emailInput.addEventListener('input', clearError);
    passwordInput.addEventListener('input', clearError);

    // Form submit event
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();

      if (!email || !password) {
        errorMessage.textContent = 'Por favor, preencha todos os campos.';
        errorMessage.style.display = 'block';
        return;
      }

      // If validation passes, redirect to dashboard
      window.location.href = 'index.html';
    });
  }
});
