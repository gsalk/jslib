var navbar = document.getElementById('nav');

console.log(sticky);


function toTop(){
  window.scrollTo(0,0);
  return false;
}



function scrollHandler(){
    // jei scroll ekrano daugiau
    // uz 200 
    if(window.pageYOffset > navbar.offsetTop + 200){
      document.getElementById('scrollTop')
      .style.display ="block";
    }else{ //jei lygu = arba maziau  istrinam kalse sticky
      document.getElementById('scrollTop')
      .style.display ="none";
    }
}