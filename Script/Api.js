

$(document).ready(function(){

 $("header").hide();

$(".content").children("img").fadeToggle(1000).fadeIn();
//first effect
$(".logo").mouseenter(

     function()
     {
     	$(".word").fadeTo("slow",0.01);
        $(".logo").fadeTo("slow",0.01).fadeOut();
        $("header").fadeIn("slow",25).slideDown();
     }

  	);

$(".divider").mouseenter(

     function()
     {
     	 $("header").show();
     }

  	);





 //end of effect

});