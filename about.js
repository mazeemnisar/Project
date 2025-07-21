  document.addEventListener('DOMContentLoaded', function() {
        const form = document.querySelector('.searcharea form');
        if (form) {
            form.addEventListener('submit', function(e) {
                const city = document.getElementById('city').value;
                const bloodgroup = document.getElementById('bloodgroup').value;
                if (!city || !bloodgroup) {
                    alert('Please select both your city and blood group.');
                    e.preventDefault();
                }
            });
        }
    });