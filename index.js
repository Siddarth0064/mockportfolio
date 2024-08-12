/*-------------TOGGLE ICON NAVBAR--------------*/


let nemuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick=()=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');

}

/*-------------SCROLL SECTIONS ACTIVE LINKS--------------*/
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

    
/*-------------STICKY NAVBAR--------------*/
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY>100);


/*-------------REMOVE TOGGLE ICON AND NAVBAR--------------*/
menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');

};

/*--------------SCROLL REVEAL---------------------------- */
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});
ScrollReveal().reveal('.home-content, heading', {origin:'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin:'buttom'});
ScrollReveal().reveal('.home-contact h1, .about-img', {origin:'left'});
ScrollReveal().reveal('.home-contact p, .about-content', {origin: 'right'});

/*------------------------TYPED.JS--------------------- */
var typed = new Typed('.multiple-text',{
    strings : ['Foot Baller', 'Captain', 'Fußballerin'],
    typedSpeed:70,
    backSpeed:70,
    BackDelay:1000,
    loop:true,

});







