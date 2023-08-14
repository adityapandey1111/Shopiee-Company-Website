//Sticky
$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 80) {
    $(".defaultscroll").addClass("scroll");
  } else {
    $(".defaultscroll").removeClass("scroll");
  }
});
