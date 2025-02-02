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
document.getElementById('signupForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form from submitting

  // Get input values
  const fullName = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirmPassword').value.trim();

  // Basic validation
  if (fullName === '' || email === '' || password === '' || confirmPassword === '') {
    alert('Please fill in all fields.');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  // Simulate signup (replace with actual API call)
  console.log('Signing up with:', { fullName, email, password });

  // Show loading animation
  const signupBtn = document.querySelector('.signup-btn');
  signupBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing up...';
  signupBtn.disabled = true;

  setTimeout(() => {
    alert('Signup successful! Redirecting...');
    signupBtn.innerHTML = 'Sign Up';
    signupBtn.disabled = false;

    // Redirect to another page (example)
    window.location.href = 'dashboard.html';
  }, 2000); // Simulate a 2-second delay for API call
});