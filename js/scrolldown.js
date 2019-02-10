/* eslint-disable no-undef */
$('#scroll-down').click(() => {
  $('html,body').animate({
    scrollTop: $('#navbar').offset().top,
  }, 'slow');
});
