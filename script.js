
$(function(){

   $('.start-show').click(function(){
     $('#start-modal').fadeIn();
   });

   $('.close-modal').click(function(){
     $('#start-modal').fadeOut();
   });

   $('.menu-icon').click(function(){
     $('#slide-menu').slideDown();
     });

   $('.close-menu-modal').click(function(){
     $('#slide-menu').slideUp();
   });
});
