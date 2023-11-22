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
