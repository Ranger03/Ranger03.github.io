// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
  // Get a reference to the button element
  var downloadBtn = document.getElementById('downloadBtn');
  
  // Add a click event listener to the button
  downloadBtn.addEventListener('click', function() {
    // Location of the PDF file
    var pdfUrl = 'myResume.pdf';
    
    // Trigger the download
    window.open(pdfUrl, '_blank');
  });
});
