/*-------------TOGGLE ICON NAVBAR--------------*/


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navLinks = document.querySelectorAll('.navbar a');
menuIcon.onclick=()=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');

}
// Close the navbar when any nav link is clicked
navLinks.forEach(link => {
    link.onclick = () => {
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    };
});

/*-------------SCROLL SECTIONS ACTIVE LINKS--------------
let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');

window.onscroll=()=> {
    sections.forEach(sec => {
         let top = window.scrollY;
         let offset = sec.offsetTop -150;
         let height = sec.offsetHeight;
         let id = sec.getAttribute('id');

         if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
         };
        
    });
    };
*/
    
/*-------------STICKY NAVBAR--------------*/
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY>100);


/*-------------REMOVE TOGGLE ICON AND NAVBAR--------------*/
menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');



/*--------------SCROLL REVEAL---------------------------- */
document.addEventListener("DOMContentLoaded", function() {
    ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200,
    });
ScrollReveal().reveal('.home-content, heading', {origin:'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin:'buttom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});
});
/*------------------------TYPED.JS--------------------- */
var typed = new Typed('.multiple-text',{
    strings : ['Backend Developer', 'YouTuber','Java Developer'],
    typedSpeed:60,
    backSpeed:60,
    BackDelay:1000,
    loop:true,

});








