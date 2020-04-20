$(document).ready(function(){
  var start=0;
 
 // $("#male").slideUp(4000).slideDown(2000);


  $(".rightarrow").click(

     function()
     {
      if(start==2)
      {
        start=-1;
      }
      start++;
        /*alert("START "+start);*/
     

     switch(start)
     {
      case 0:
      {
        $(".item").attr("src", "Images/Burger.PNG");
        break;
      }

      case 1:
      {
        $(".item").attr("src", "Images/food1.PNG");
        break;
      }

      case 2:
      {
        $(".item").attr("src", "Images/eat.jpg");
        break;
      }
     }
    }
  	);


   //left arrow
    $(".leftarrow").click(

     function()
     {
      if(start==0)
      {
        start=2;
      }
      start=start-1;
        /*alert("START "+start);*/
     

     switch(start)
     {
      case 0:
      {
        $(".item").attr("src", "Images/Burger.PNG");
        break;
      }

      case 1:
      {
        $(".item").attr("src", "Images/food1.PNG");
        break;
      }

      case 2:
      {
        $(".item").attr("src", "Images/eat.jpg");
        break;
      }
     }
    }
    );

});