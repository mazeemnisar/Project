 document.getElementById('btnlogin').addEventListener('click', function() {
      const username = document.getElementById('uname').value.trim();
      const password = document.getElementById('password').value;

      if (!username || !password) {
        alert('Please enter both username and password.');
        return;
      }
      if (username === 'admin' && password === 'admin123') {
        alert('Login successful!');
    
      } else {
        alert('Invalid username or password.');
      }
    });