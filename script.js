
$(function(){

   $('.start-show').click(function(){
     $('#start-modal').fadeIn();
   });

   $('.close-modal').click(function(){
     $('#start-modal').fadeOut();
   });

   $(function(){
       setOperate();
   });
   function setOperate(){
       setView();
       var agent = navigator.userAgent;
       if(agent.search(/iPhone/) != -1){
           $("body").addClass("iphone");
           window.onorientationchange = setView;
       }else if(agent.search(/iPad/) != -1){
           $("body").addClass("ipad");
           window.onorientationchange = setView;
       }else if(agent.search(/Android/) != -1){
           $("body").addClass("android")
           window.onresize = setView;
       }else{
           $("body").addClass("other"); 
           window.onorientationchange = setView;
       }
   }
   function setView(){
       var orientation = window.orientation;
       if(orientation === 0){
           $("body").addClass("portrait")
           $("body").removeClass("landscape");
       }else{
           $("body").addClass("landscape");
           $("body").removeClass("portrait");
       }
   }


});
