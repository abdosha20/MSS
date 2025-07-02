function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    const hamburger = document.querySelector('.hamburger');
    navList.classList.toggle('active'); // Toggle the menu visibility
    hamburger.classList.toggle('active'); // Animate the hamburger icon
}

// Back to Top Arrow functionality
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
  function handleBackToTopVisibility() {
    if (window.scrollY > 100) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  }
  window.addEventListener('scroll', handleBackToTopVisibility);
  // Run on load in case page is not at top
  handleBackToTopVisibility();
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}