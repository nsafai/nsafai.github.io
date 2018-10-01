// When the user scrolls the page, execute myFunction
window.onscroll = function() {
    freezeNavBar()
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var stickyNavBarYPosition = navbar.offsetTop;


function freezeNavBar() {
    // Once window has scrolled as far as the navbar's original Y coordinate
    if (window.pageYOffset >= stickyNavBarYPosition) {
        // Add the sticky class to the navbar when you reach its scroll position.
        navbar.classList.replace("nav-container", "sticky")
    } else {
        // Remove "sticky" when you leave the scroll position
        navbar.classList.replace("sticky", "nav-container");
    }
}
