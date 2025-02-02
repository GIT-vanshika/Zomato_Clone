// Toggle password visibility
function togglePasswordVisibility() {
  const passwordInput = document.getElementById('password');
  const toggleIcon = document.querySelector('.toggle-password i');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleIcon.classList.remove('fa-eye');
    toggleIcon.classList.add('fa-eye-slash');
  } else {
    passwordInput.type = 'password';
    toggleIcon.classList.remove('fa-eye-slash');
    toggleIcon.classList.add('fa-eye');
  }
}

// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form from submitting

  // Get input values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Basic validation
  if (username.trim() === '' || password.trim() === '') {
    alert('Please fill in all fields.');
    return;
  }

  // Simulate login (replace with actual API call)
  console.log('Logging in with:', { username, password });

  // Show loading animation
  const loginBtn = document.querySelector('.login-btn');
  loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';
  loginBtn.disabled = true;

  setTimeout(() => {
    alert('Login successful! Redirecting...');
    loginBtn.innerHTML = 'Login';
    loginBtn.disabled = false;

    // Redirect to another page (example)
    window.location.href = 'dashboard.html';
  }, 2000); // Simulate a 2-second delay for API call
});