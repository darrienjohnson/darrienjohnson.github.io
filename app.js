const toggleBtn = document.getElementById('toggle-btn')
const sideNav = document.getElementById('side-nav');
const sideNavLinks = document.querySelector('side-nav-links');
const body = document.querySelector('body');
let menuOpen = false;


document.addEventListener('click', (e) => {
  if (e.target.id !== 'toggle-btn' && e.target.id !== 'side-nav') {
    sideNav.classList.remove('active');
    toggleBtn.classList.remove('active-toggle');
    toggleBtn.classList.remove('open')
    menuOpen = false;
  }
});

//Open and Close of Side NavBar
toggleBtn.addEventListener('click', () => {
  sideNav.classList.toggle('active');
  toggleBtn.classList.toggle('active-toggle');
});

//Hamburger button animation
toggleBtn.addEventListener('click', () => {
  if (!menuOpen) {
    toggleBtn.classList.add('open');
    menuOpen = true;
  } else {
    toggleBtn.classList.remove('open')
    menuOpen = false;
  }
});