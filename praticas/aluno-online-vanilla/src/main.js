import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  if (form) {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Function to clear error messages
    const clearErrors = () => {
      emailError.style.display = 'none';
      passwordError.style.display = 'none';
    };

    // Add input event listeners to clear errors when user starts typing
    emailInput.addEventListener('input', () => {
      emailError.style.display = 'none';
    });
    passwordInput.addEventListener('input', () => {
      passwordError.style.display = 'none';
    });

    // Form submit event
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      clearErrors(); // Clear previous errors
      
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      
      let hasErrors = false;
      
      if (!email) {
        emailError.textContent = 'Email é obrigatório.';
        emailError.style.display = 'block';
        hasErrors = true;
      }
      
      if (!password) {
        passwordError.textContent = 'Senha é obrigatória.';
        passwordError.style.display = 'block';
        hasErrors = true;
      }
      
      if (!hasErrors) {
        // If validation passes, redirect to dashboard
        window.location.href = 'index.html';
      }
    });
  }
});
