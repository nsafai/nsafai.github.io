/* eslint-disable no-undef */

// scroll down to timeline section when clicking down arrow
$('#scroll-down').click(() => {
  $('html,body').animate({
    scrollTop: $('#navbar').offset().top,
  }, 'slow');
});

function scrollToTop() {
  $('html, body').animate({ scrollTop: 0 }, 'slow');
  return false;
}

// scroll to top when clicking brand in navbar
$('#brand-logo').click(() => {
  scrollToTop();
});
