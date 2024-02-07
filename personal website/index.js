
$(document).ready(function() {
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('#header-hidden').outerHeight();

  $(window).scroll(function() {
      var st = $(this).scrollTop();
      
      if (Math.abs(lastScrollTop - st) <= delta)
          return;

      if (st > lastScrollTop && st > navbarHeight){
        
          $('#header-hidden').removeClass('nav-down').addClass('nav-up');
      } else {
          
          if(st + $(window).height() < $(document).height()) {
              $('#header-hidden').removeClass('nav-up').addClass('nav-down');
          }
      }
      
      lastScrollTop = st;
  });
});


document.addEventListener('DOMContentLoaded', function() {

  var downloadBtn = document.getElementById('downloadBtn');
  

  downloadBtn.addEventListener('click', function() {
 
    var pdfUrl = 'Mycv.pdf';
    
 
    window.open(pdfUrl, '_blank');
  });
});