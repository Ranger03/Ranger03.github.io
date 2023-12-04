// function scrollToDiv(divId) {
//     console.log("Function is working");
//     var div = document.getElementById(divId);
//     if (div) {
//       div.scrollIntoView({ behavior: "smooth" });
//     }
// }


const navbar = document.getElementById("header-hidden");
let prevScrollPos = window.scrollY;

window.addEventListener("scroll", function() {
    let currentScrollPos = window.scrollY;

    if (prevScrollPos > currentScrollPos) {
        navbar.style.transform = "translateY(0)";
    } else {
        navbar.style.transform = "translateY(-100%)";
    }

    prevScrollPos = currentScrollPos;
});


// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
  // Get a reference to the button element
  var downloadBtn = document.getElementById('downloadBtn');
  
  // Add a click event listener to the button
  downloadBtn.addEventListener('click', function() {
    // Location of the PDF file
    var pdfUrl = 'MyResume_CV(1)(1).pdf';
    
    // Trigger the download
    window.open(pdfUrl, '_blank');
  });
});
