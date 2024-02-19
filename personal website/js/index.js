document.addEventListener("DOMContentLoaded", function () {
  let downloadBtn = document.getElementById("downloadBtn");


  // downloadBtn.addEventListener("click", function () {
  //   let pdfUrl = "Mycv.pdf";

  //   window.open(pdfUrl, "_blank");
  // });
});

$(document).ready(function () {
  let lastScrollTop = 0;
  let delta = 5;
  let navbarHeight = $("#header-hidden").outerHeight();

  $(window).scroll(function () {
    let st = $(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta) return;

    if (st > lastScrollTop && st > navbarHeight) {
      $("#header-hidden").removeClass("nav-down").addClass("nav-up");
    } else {
      if (st + $(window).height() < $(document).height()) {
        $("#header-hidden").removeClass("nav-up").addClass("nav-down");
      }
    }

    lastScrollTop = st;
  });
});
