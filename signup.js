function openModal(mode = 'signup') {
    document.getElementById("authModal").style.display = "flex";
    toggleAuth(mode);
  }

  function closeModal() {
    document.getElementById("authModal").style.display = "none";
  }

  function toggleAuth(mode) {
    const right = document.getElementById('rightPane');
    const left = document.getElementById('leftPane');
    const nameField = document.getElementById('nameField');
    if (mode === 'signin') {
      document.getElementById('rightHeading').innerText = 'Sign In 👋';
      document.getElementById('rightDesc').innerText = 'or use your account';
      nameField.style.display = 'none';
      document.getElementById('emailField').placeholder = '🔍 Email';
      document.getElementById('passwordField').placeholder = '🔐 Password';
      document.getElementById('submitBtn').innerText = 'SIGN IN';
      document.getElementById('leftHeading').innerText = 'Hello, Friend! ✨';
      document.getElementById('leftDesc').innerText = 'Enter your personal details and start your journey with us';
      document.getElementById('leftButton').innerText = 'SIGN UP';
      document.getElementById('leftButton').onclick = () => toggleAuth('signup');
    } else {
      document.getElementById('rightHeading').innerText = 'Create Account 🚀';
      document.getElementById('rightDesc').innerText = 'or use your email for registration';
      nameField.style.display = 'block';
      document.getElementById('emailField').placeholder = '👁️ Email';
      document.getElementById('passwordField').placeholder = '🔐 Password';
      document.getElementById('submitBtn').innerText = 'SIGN UP';
      document.getElementById('leftHeading').innerText = 'Welcome Back! 🎉';
      document.getElementById('leftDesc').innerText = 'To keep connected with us please login with your personal info';
      document.getElementById('leftButton').innerText = 'SIGN IN';
      document.getElementById('leftButton').onclick = () => toggleAuth('signin');
    }
  }

  function handleAuth() {
    const isSignup = document.getElementById('submitBtn').innerText.includes('UP');
    const email = document.getElementById('emailField').value.trim();
    const name = document.getElementById('nameField').value.trim();
    if (!email) return;
    const shortEmail = email.substring(0, 8);
    document.getElementById('userInitial').innerText = shortEmail;

    Toastify({
      text: isSignup ? "You have successfully signed up and logged in!" : "You have successfully logged in!",
      duration: 3000,
      gravity: "top",
      position: "right",
      backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
      stopOnFocus: true
    }).showToast();

    if (!isSignup) {
      closeModal();
    }
  }

  document.getElementById("authModal").addEventListener("click", function (e) {
    if (e.target.id === "authModal") closeModal();
  });