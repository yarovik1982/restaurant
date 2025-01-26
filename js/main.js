const swiper = new Swiper('.swiper', {
   // Optional parameters
   // direction: 'vertical',
   slidesPerView: 1,
   loop: true,
   spaceBetween:20,

   breakpoints:{
     769:{
      slidesPerView: 3,
     },
     577:{
       slidesPerView:2,
        spaceBetween:10,
     },
     426:{
       slidesPerView:2,
     }
   },
 
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
   },
 
   // Navigation arrows
   navigation: {
     nextEl: '.menu-swiper-button-next',
     prevEl: '.menu-swiper-button-prev',
   },
   
   // And if we need scrollbar
   scrollbar: {
     el: '.swiper-scrollbar',
   },
 });

 function initBurger (){
  const burger = document.querySelector(".header__burger");
  const body = document.querySelector("body");

  burger.addEventListener("click", function(event){
    //  const element = this.event.target;
    this.classList.toggle("active");
    body.classList.toggle("not-scroll");
  })
  console.log(burger);
 }
 initBurger();

 
