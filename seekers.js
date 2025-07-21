  document.querySelector('.searcharea form').addEventListener('submit', function(e) {
      e.preventDefault();
      const city = document.getElementById('city').value;
      const bloodGroup = document.getElementById('bloodgroup').value;
      if (!city || !bloodGroup) {
        alert('Please select both city and blood group.');
        return;
      }
      alert(`Searching for blood group ${bloodGroup} in ${city}.`);
    });