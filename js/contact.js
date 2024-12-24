// Get elements
const contactBtn = document.getElementById('contactBtn');
const contactModal = document.getElementById('contactModal');
const closeModal = document.getElementById('closeModal');

// Open modal on button click
contactBtn.addEventListener('click', () => {
    contactModal.style.display = 'flex'; // Show modal
});

// Close modal on close button click
closeModal.addEventListener('click', () => {
    contactModal.style.display = 'none'; // Hide modal
});

// Close modal if clicked outside content
window.addEventListener('click', (event) => {
    if (event.target === contactModal) {
        contactModal.style.display = 'none';
    }
});