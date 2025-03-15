

var navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px"; 
}



document.addEventListener("DOMContentLoaded", function() {
let nav = document.querySelector("nav");
nav.style.opacity = "0";
nav.style.transition = "opacity 1s ease-in-out";

setTimeout(() => {
nav.style.opacity = "1";
}, 500);
});



/* -- Typing revealing effect -- */
var typingEffect = new Typed(".typedText",{
    strings : ["stories that stick","emotions that move","content that captivates","creativity that clicks"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000,
    typeSpeed: Math.floor(Math.random() * (120 - 50) + 50)

  })