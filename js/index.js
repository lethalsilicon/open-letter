$(document).ready(function() {

  /*This is the sticky navigation plugin working*/
  $("#sticky").sticky({topSpacing:0});

  //jQuery Smooth Scrolling https://css-tricks.com/snippets/jquery/smooth-scrolling/
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

//jQuery detect scroll position http://stackoverflow.com/questions/18930758/jquery-detecting-scroll-position
$(window).scroll(function () {
  if ($(window).scrollTop() + $(window).height() > $('#uxteam').offset().top) {
    $( "nav" ).addClass( "change" ), $( "nav ul" ).addClass( "change" );
  } else {
    $( "nav" ).removeClass( "change" ), $( "nav ul" ).removeClass( "change" );
  }
});

});//end doc
