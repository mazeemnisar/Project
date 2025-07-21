document.querySelector('.container form').addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const locality = document.getElementById('locality').value.trim();
      const age = document.getElementById('age').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const bloodGroup = document.getElementById('blood-group').value.trim();

      if (!name || !email || !locality || !age || !phone || !bloodGroup) {
        alert('Please fill in all fields.');
        return;
      }

      alert('Form submitted successfully!\n' +
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n' +
        'Locality: ' + locality + '\n' +
        'Age: ' + age + '\n' +
        'Phone: ' + phone + '\n' +
        'Blood Group: ' + bloodGroup
      );

      this.reset();
    });
    document.getElementById('btn-signup').addEventListener('click', function() {
      window.location.href = 'signup.html'; 
    });
    document.getElementById('btn-login').addEventListener('click', function() {
      window.location.href = 'login.html'; 
    });