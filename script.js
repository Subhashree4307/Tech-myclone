document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');

    if (!mobileMenuToggle || !navLinks) return;

   
    mobileMenuToggle.addEventListener('click', function() {
        mobileMenuToggle.classList.toggle('active');
        navLinks.classList.toggle('mobile-open');
    });

   
    navLinks.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('mobile-open');
            
        }
    });

   
    document.addEventListener('click', function(e) {
        if (!mobileMenuToggle.contains(e.target) && !navLinks.contains(e.target)) {
            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('mobile-open');
        }
    });
});
