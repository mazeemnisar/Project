 document.querySelector('form').addEventListener('submit', function(event) {
      event.preventDefault(); 
      const name = document.getElementById('name').value.trim();
      const gender = document.querySelector('input[name="Gender"]:checked')?.value || '';
      const bloodGroup = document.getElementById('Blood Group').value;
      const day = document.getElementById('BirthDay').value;
      const month = document.getElementById('BirthMonth').value;
      const year = document.getElementById('BirthYear').value;
      const city = document.getElementById('city').value;
      const contact = document.getElementById('Contact').value.trim();
      const email = document.getElementById('Email').value.trim();
      const agree = document.getElementById('Agree').checked;

      if (!name || !gender || !bloodGroup || !day || !month || !year || !city || !contact || !email || !agree) {
        alert('Please fill in all required fields.');
        return;
      } 
      alert('Thank you for registering as a blood donor, ' + name + '!');
      event.target.reset();
    });