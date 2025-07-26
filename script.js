const loginForm = document.getElementById('loginForm');
const errorMsg = document.getElementById('errorMsg');
const loveMessage = document.getElementById('loveMessage');
const loginContainer = document.querySelector('.login-container');

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const userId = document.getElementById('userId').value.trim();
  const password = document.getElementById('password').value.trim();

  if (userId === '1' && password === '1') {
    loginContainer.style.display = 'none';
    loveMessage.style.display = 'flex';
    errorMsg.textContent = '';

    // Popup message
    alert(
      "Dear Sumiya, in your eyes, I find the endless sky of my dreams.\n" +
      "Your smile lights my heart with a love that never fades.\n" +
      "Every moment of my life is written with your name — forever yours, HR."
    );
  } else {
    errorMsg.textContent = 'Invalid User ID or Password';
  }
});
