 document.addEventListener('DOMContentLoaded', function() {
        const contactForm = document.querySelector('.formFill');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                const name = document.getElementById('data_enter_name').value.trim();
                const email = document.getElementById('data_enter_email').value.trim();
                const contact = document.getElementById('data_enter_contact').value.trim();
                const subject = document.getElementById('select').value;
                const message = document.getElementById('message').value.trim();

                if (!name || !email || !contact || !subject || !message) {
                    alert('Please fill in all fields.');
                    e.preventDefault();
                    return false;
                }
            
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email)) {
                    alert('Please enter a valid email address.');
                    e.preventDefault();
                    return false;
                }
            });
        }
    });