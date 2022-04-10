const toggleBtn = document.querySelector('toggle-btn')

const sideNav = document.querySelector('side-nav-container')

const sideNavLinks = document.querySelectorAll('side-nav-link')

toggleBtn.addEventListener('click', () => {
  sideNav.classList.toggle('active')
});