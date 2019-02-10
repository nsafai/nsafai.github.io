/* eslint-disable no-console */
/* eslint-disable no-undef */
// Get the navbar
const navbar = document.getElementById('navbar');

// Get the offset position of the navbar
let stickyNavBarYPosition = navbar.offsetTop;

// to correct stickynavbarYposition on window resize
window.onresize = function resizingWindow() {
  // check if navbar is already sticky or still fixed at bottom of screen
  if (navbar.classList.contains('fixed-nav-container')) {
    // grab new Y coordinate
    stickyNavBarYPosition = navbar.offsetTop;
  }
};

function freezeNavBar() {
  console.log('pageYOffset is ', window.pageYOffset);
  console.log('stickyNavBarYPosition is ', stickyNavBarYPosition);
  // Once window has scrolled as far as the navbar's original Y coordinate
  if (window.pageYOffset >= stickyNavBarYPosition) {
    // Add the sticky-nav-container class to the navbar when you reach its scroll position.
    navbar.classList.replace('fixed-nav-container', 'sticky-nav-container');
  } else {
    // Remove "sticky-nav-container" when you leave the scroll position
    navbar.classList.replace('sticky-nav-container', 'fixed-nav-container');
  }
}

// When the user scrolls the page, execute myFunction
window.onscroll = function scrollTracker() {
  freezeNavBar();
};
