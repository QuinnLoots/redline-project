$(document).ready(function() {
  $("#carouselExampleControls").swiperight(function() {
    $(this).carousel('prev');
  });
  $("#carouselExampleControls").swipeleft(function() {
    $(this).carousel('next');
  });
});