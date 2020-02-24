$(document).ready(function(){
  $("#hide").click(function(){
    $("p").hide();
   });
  
  $(".col-md-4").click(function(){
    $("#desIgn").toggle();
    $("#hideP").toggle();
  });
})
