var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("main-nav").style.top = "-100px";
  } else {
    document.getElementById("main-nav").style.top = "0";
  }
  prevScrollpos = currentScrollPos;
}

new WOW().init();
$( ".wow" ).addClass( "fadeInUp" );