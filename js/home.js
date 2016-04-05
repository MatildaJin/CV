 var c=0;
  var t;
  function hideLoad(){
       if(c<8){
            c=c+1;
            t=setTimeout("hideLoad()",1000);
       } else {
            $("#loading").fadeOut(1000);
       }
  };
      var $title_width;
      if($(window).width()>640){
          $title_width=$(".slide_js").find("span:eq(0)").width();
         } else {
          $title_width=$(".slide_js").find("span:eq(0)").width()*1.5;
         };
      //adjusting the position of h1 and some parts of the content(certainly could be better)                         
      function position(){
           if($(window).width()>960){
                $("h1").css({"left":$(".slide_js").width()-$title_width,"top":"55%","font-size":"3em"})
                                 .parent().css({"width":"50%"})
                                 .parent().css({"width":"20%","height":"100%"});
                $("#flexbox").addClass("row");  
           };
           if($(window).width()>640&&$(window).width()<=960){    
                $("h1").css({"left":$(".slide_js").width()-$title_width,"top":"55%","font-size":"3em"})
                                 .parent().css({"width":"100%"})
                                 .parent().css({"width":"20%","height":"100%"});
                $("#flexbox").removeClass("column").addClass("row");                
           };
           if($(window).width()<=640){
                $("h1").css({"left":"5px","top":"0","font-size":"2em"})
                                 .parent().css({"width":"100%"})
                                 .parent().css({"width":"100%","height":"20%"});
                $("#flexbox").addClass("column").removeClass("row");   
           };   
      };    
$(document).ready(function(){
      hideLoad();                      
      position();                                         
    //here comes animations when hovering the mouse upon sections
    $("body").hover(function(){                
             $(".strech_js").mouseover(function(){
                  var $strech_size=$("#be_passionate").find("h1").width(); 
                  var $sibling_size=($(window).width()-$strech_size)/4;
                  var $slide_size=$sibling_size/2;                  
                  if($(window).width()>960){                                                      
                      if(!$(this).is(":animated")&&$(this).width()!=$(window).width()&&$(this).width()!=$strech_size){                                                
                               $(this).stop(true,true).animate({width:$strech_size},200)
                                      .children().animate({width:"110%"},200)
                                      .find("h1").animate({left:"0"},200);
                               $(this).siblings().stop(true,true).animate({width:$sibling_size},200)
                                      .children().animate({width:$slide_size},200)
                                      .find("h1").animate({left:$slide_size-$title_width},200);                                                                                                                                                 
                      };
                   };
                   if($(window).width()>640&&$(window).width()<=960){                      
                      if(!$(this).is(":animated")&&$(this).width()!=$(window).width()&&$(this).width()!=$strech_size){
                               $(this).stop(true,true).animate({width:$strech_size},200)                                     
                                      .find("h1").animate({left:"0"},200);
                               $(this).siblings().stop(true,true).animate({width:$sibling_size},200)                                     
                                      .find("h1").animate({left:$sibling_size-$title_width},200);
                      };         
                   };
                   if($(window).width()<=640){
                      if(!$(this).is(":animated")&&$(this).height()!=$(window).height()){
                               $(this).children().stop(true).animate({"opacity":"0.95"},200);
                               $(this).siblings().children().stop(true).animate({"opacity":"0.8"},200);
                      };
                   };                                                                       
             });
     },function(){
             if(!$(".icon_js").is(":visible")){
                   if($(window).width()>960){            
                       $(".strech_js").stop(true,false).animate({width:"20%"},200)
                                      .children().animate({width:"50%"},200,function(){
                                                $(this).find("h1").css({"left":$(".slide_js").width()-$title_width});
                                      });
                   };       
                   if($(window).width()>640&&$(window).width()<=960){
                       $(".strech_js").stop(true,false).animate({width:"20%"},200)
                                      .find("h1").css({"left":$(window).width()/5-$title_width});                                      
                   };        
                   if($(window).width()<=640){
                       $(".strech_js").children().stop(true).animate({"opacity":"0.8"},200);
                   };
             };                                          
     });      
    //sections expand when clicking on them...I hope              
      $(".strech_js").click(function(){
            if($(window).width()>960){
                if(!$(this).is(":animated")&&$(this).width()!=$(window).width()){
                        $(this).stop(true,true).animate({width:"100%"},500)
                               .children().animate({width:"100%",opacity:"0.95"})
                               .find("h1").stop(true,false).animate({fontSize:"1.8em",top:"20%"},500,function(){
                                            $(this).css({"position":"fixed"});                                               
                                            $(".icon_js").fadeIn().animate({top:"40%",left:$("h1").children("span:eq(0)").width()},200)
                                            .parent().find(".content_js").animate({top:$(window).height()*0.15},100);
                                            $(".slide_js").css({"overflow":"scroll"});                                   
                                   });
                        $(this).siblings().stop(true,true).animate({width:"0"},500); 
                };                
            };      
            if($(window).width()>640&&$(window).width()<=960){
                if(!$(this).is(":animated")&&$(this).width()!=$(window).width()){
                        $(this).stop(true,true).animate({width:"100%"},500)
                               .children().animate({opacity:"0.95"})
                               .find("h1").stop(true,false).animate({fontSize:"1.8em",top:"20%"},500,function(){                                               
                                            $(this).css({"position":"fixed"});
                                            $(".icon_js").fadeIn().animate({top:"40%",left:$("h1").children("span:eq(0)").width()},200)
                                            .parent().find(".content_js").animate({top:$(window).height()*0.15},100);
                                            $(".slide_js").css({"overflow":"scroll"});                                   
                                   });
                        $(this).siblings().stop(true,true).animate({width:"0"},500);                                   
                };
            };           
            if($(window).width()<=640){
                if(!$(this).is(":animated")&&$(this).height()!=$(window).height()){
                        $(this).stop(true,true).animate({height:"100%"},500)
                               .children().animate({opacity:"0.95"})
                               .find("h1").find("span:eq(0)").stop(true,false).animate({fontSize:"1em"},500,function(){                                                                                           
                                            $(".icon_js").fadeIn().animate({left:"20px",top:"80%"},400)
                                            .parent().find(".content_js").animate({top:$(window).height()*0.15},100);
                                            $(".slide_js").css({"overflow":"scroll"});                                                                              
                                   });        
                        $(this).siblings().stop(true,true).animate({height:"0"},500);                                 
                };
             };               
      });          
   //enjoy playing with the menu icon
      $(".menu_js").hover(function(menuon){                
                if(!$(this).is(":animated")){
                        $(this).parent().addClass("hasborder")
                               .find(".menu_js hr").stop(true,true).animate({width:"0"},100,function(){$(this).hide()})
                               .parent().siblings().show();
                };
                menuon.stopPropagation();
      },function(menuoff){
                if(!$(this).is(":animated")){
                       $(this).parent().removeClass("hasborder")
                              .find(".menu_js hr").stop(true,true).show().animate({width:"25px"},100)
                              .parent().siblings().hide();
                };
                menuoff.stopPropagation();
      });       
    //now we are heading back to home page         
      $(".icon_js").click(function(back){
           if($(window).width()>960){
                $(this).stop(true,true).fadeOut().css({"left":"-100px"});                
                $(".slide_js").css({"overflow":"hidden"}).animate({scrollTop:"0"},100)
                              .find(".content_js").stop(true,true).animate({top:"100%"},500);                
                $("h1").animate({fontSize:"3em",top:"55%"},500,function(){
                          $(this).css({"position":"absolute"});                                                    
                          $(".strech_js").animate({width:"20%"},500,function(){
                                                                  $(this).children().animate({width:"50%",opacity:"0.8"})
                                                                         .find("h1").css({"left":$(".slide_js").width()-$title_width});
                                                          });
                          position();                                                                                 
                });
                back.stopPropogation();
           };
           if($(window).width()>640&&$(window).width()<=960){
                $(this).stop(true,true).fadeOut().css({"left":"-100px"});                
                $(".slide_js").css({"overflow":"hidden"}).animate({scrollTop:"0"},100)
                              .find(".content_js").stop(true,true).animate({top:"100%"},500);
                $("h1").animate({fontSize:"3em",top:"55%"},500,function(){
                          $(this).css({"position":"absolute"});                          
                          $(".strech_js").animate({width:"20%"},500,function(){
                                                                  $(this).children().animate({width:"100%",opacity:"0.8"})
                                                                         .find("h1").css({"left":$(".slide_js").width()-$title_width});
                                                          });
                          position();                                                                                 
                });
                back.stopPropogation();
           };
           if($(window).width()<=640){
                $(this).stop(true,true).fadeOut().css({"left":"-100px"});               
                $(".slide_js").css({"overflow":"hidden"}).animate({scrollTop:"0"},100)
                              .find(".content_js").stop(true,true).animate({top:"100%"},500);
                $("h1").find("span:eq(0)").animate({fontSize:"3em"},500,function(){                          
                          $(".strech_js").animate({height:"20%"},500,function(){
                                                                  $(this).children().animate({opacity:"0.8"});;                                                                  
                                                          });
                          position();                                                                                 
                });
                back.stopPropogation();
           };
      });
      //more adaptation
      $(window).resize(function(){
           if(!$(".icon_js").is(":visible")){  
                position();
           } else if($(".icon_js").is(":visible")){
                if($(window).width()>960){
                       $(".icon_js").css({"left":$("h1").children("span:eq(0)").width(),"top":"40%"})
                              .next().find("h1").css({"position":"fixed","top":"20%","font-size":"1.8em"})
                              .find("span:eq(0)").css({"font-size":"3em"});                  
                };          
                if($(window).width()>640&&$(window).width()<=960){    
                       $(".icon_js").css({"left":$("h1").children("span:eq(0)").width(),"top":"40%"})
                             .next().find("h1").css({"position":"fixed","top":"20%","font-size":"1.8em"})
                             .find("span:eq(0)").css({"font-size":"3em"});                              
                };           
                if($(window).width()<=640){
                       $(".icon_js").css({"left":"20px","top":"80%"})
                             .next().find("h1").css({"position":"absolute","top":"0","font-size":"2em"})
                             .find("span:eq(0)").css({"font-size":"1em"});                  
                };
           };                                      
      });
      
                                
});
