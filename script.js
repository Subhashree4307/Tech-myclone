document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');

    // Get elements
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');

    console.log('Toggle element:', mobileMenuToggle);
    console.log('Nav links element:', navLinks);

    if (!mobileMenuToggle || !navLinks) {
        console.error('Elements not found!');
        return;
    }

    // Toggle mobile menu
    mobileMenuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Hamburger clicked');

        // Toggle classes
        mobileMenuToggle.classList.toggle('active');
        navLinks.classList.toggle('mobile-open');

        console.log('Active class:', mobileMenuToggle.classList.contains('active'));
        console.log('Mobile-open class:', navLinks.classList.contains('mobile-open'));
    });

    // Close menu when clicking on links
    navLinks.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            console.log('Link clicked, closing menu');
            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('mobile-open');
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileMenuToggle.contains(e.target) && !navLinks.contains(e.target)) {
            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('mobile-open');
        }
    });
});
