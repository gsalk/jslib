var navbar = document.getElementById('nav');

var sticky = navbar.offsetTop;

console.log(sticky);

function scrollHandler(){
    // jei scroll ekrano daugiau
    // uz 0 pridedam klase sticky
    if(window.pageYOffset > sticky){
      navbar.classList.add('sticky');
    }else{ //jei lygu = arba maziau  istrinam kalse sticky
      navbar.classList.remove('sticky')
    }
}