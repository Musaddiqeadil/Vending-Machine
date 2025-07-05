const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const mobileCloseBtn = document.getElementById("mobile-close");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.add("active");
});

mobileCloseBtn.addEventListener("click", () => {
  navLinks.classList.remove("active");
});

// Close menu when clicking on a link (optional)
document.querySelectorAll('.navbar-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove("active");
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Get all quote buttons
  const quoteBtns = document.querySelectorAll('.quote-btn');
  const formPopup = document.querySelector('.form-popup');
  const closeBtn = document.querySelector('.close-btn');
  const contactForm = document.querySelector('.contact-form');
  
  // Open form when any quote button is clicked
  quoteBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      formPopup.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
  });
  
  // Close form
  closeBtn.addEventListener('click', function() {
    formPopup.classList.remove('active');
    document.body.style.overflow = ''; // Re-enable scrolling
  });
  
  // Close when clicking outside form
  formPopup.addEventListener('click', function(e) {
    if (e.target === formPopup) {
      formPopup.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
  
  // Close with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && formPopup.classList.contains('active')) {
      formPopup.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
  
  // Form submission
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you would add your form submission logic
    alert('Thank you for your message! We will contact you soon.');
    formPopup.classList.remove('active');
    document.body.style.overflow = '';
    this.reset();
  });
});


