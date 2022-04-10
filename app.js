const toggleBtn = document.getElementById('toggle-btn')
const sideNav = document.getElementById('side-nav');
const sideNavLinks = document.querySelector('side-nav-links');
const body = document.querySelector('body');
let menuOpen = false;

//Open and Close of Side NavBar
toggleBtn.addEventListener('click', () => {
  sideNav.classList.toggle('active')
});

body.addEventListener('click', () => {
  if (event.target.tagName !== 'a') {
    return
  }
    sideNav.classList.remove('active')

})

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