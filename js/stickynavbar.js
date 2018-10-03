// When the user scrolls the page, execute myFunction
window.onscroll = function() {
    freezeNavBar()
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var stickyNavBarYPosition = navbar.offsetTop;

window.onresize = function () {
    if (navbar.classList.contains("nav-container")) {
        stickyNavBarYPosition = navbar.offsetTop;
        console.log("stickyNavBarYPosition has changed to ", stickyNavBarYPosition);
    }
};

function freezeNavBar() {

    console.log("pageYOffset is ", pageYOffset);
    console.log("stickyNavBarYPosition is ", stickyNavBarYPosition);
    // Once window has scrolled as far as the navbar's original Y coordinate
    if (window.pageYOffset >= stickyNavBarYPosition) {
        // Add the sticky class to the navbar when you reach its scroll position.
        navbar.classList.replace("nav-container", "sticky")
    } else {
        // Remove "sticky" when you leave the scroll position
        navbar.classList.replace("sticky", "nav-container");
    }
}
