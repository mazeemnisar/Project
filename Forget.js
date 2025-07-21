document.addEventListener("DOMContentLoaded", function() {
      const form = document.querySelector('.bodycenter form');
      if (form) {
        form.addEventListener('submit', function(e) {
          e.preventDefault();
          const email = document.getElementById('email').value.trim();
          if (!email) {
            alert('Please enter your email address.');
            return;
          }
          alert('If this email is registered, a password reset link will be sent.');
          form.reset();
        });
      }
    });