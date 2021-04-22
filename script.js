const showBtn = document.querySelector('.navBtn');
const topNav = document.querySelector('.top-nav');
const aboutMoved = document.querySelector('.about');
const row = document.querySelector('.row');
const inputs = document.getElementsByTagName('input');
const submitButton = document.getElementById('Submitter');



showBtn.addEventListener('click', function() {
    if (topNav.classList.contains('showNav')) {
        topNav.classList.remove('showNav');
        showBtn.innerHTML = '<i class = "fas fa-bars"></i>';
        aboutMoved.classList.remove('navShown');
        row.classList.remove('navShown')
    } else {
        topNav.classList.add('showNav');
        showBtn.innerHTML = '<i class="fas fa-times"></i>';
        aboutMoved.classList.add('navShown');
        row.classList.add('navShown')
    }
});

/* Lightbox */
var lightbox = new SimpleLightbox('.gallery a', { /* options */ });