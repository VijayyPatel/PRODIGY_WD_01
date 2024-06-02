
document.addEventListener("DOMContentLoaded", function() {

  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.toggle("active");
  };


  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", toggleMobileMenu);
  }


  const closeMobileMenu = (event) => {
    const mobileMenu = document.getElementById("mobile-menu");
    if (!event.target.closest("#mobile-menu") && !event.target.closest("#mobile-menu-toggle")) {
      mobileMenu.classList.remove("active");
    }
  };


  document.addEventListener("click", closeMobileMenu);
});

document.addEventListener("DOMContentLoaded", function() {

  const toggleContactForm = () => {
    const contactForm = document.getElementById("contact-form");
    contactForm.classList.toggle("hidden");
  };


  const contactButton = document.getElementById("contact-button");
  if (contactButton) {
    contactButton.addEventListener("click", toggleContactForm);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    for (const [name, value] of formData) {
      console.log(`${name}: ${value}`);
    }
  };


  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", handleFormSubmit);
  }
});
document.getElementById('mobile-menu-toggle').addEventListener('click', function() {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('active');
});

document.querySelectorAll('.menu ul li a, #mobile-menu ul li a').forEach(link => {
  link.addEventListener('click', function() {
    document.querySelectorAll('.menu ul li a, #mobile-menu ul li a').forEach(item => {
      item.classList.remove('active');
    });
    this.classList.add('active');
  });
});
