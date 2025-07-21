document.querySelector('form').addEventListener('submit', function(e) {
      e.preventDefault();
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value;
      if (!username || !password) {
        alert('Please enter both username and password.');
        return;
      }
      if (username === 'admin' && password === 'admin') {
        alert('Login successful!');
        window.location.href = 'main.html';
      } else {
        alert('Invalid username or password.');
      }
    });