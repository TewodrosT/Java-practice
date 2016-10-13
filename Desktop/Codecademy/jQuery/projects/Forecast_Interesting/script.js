var main = function() {
  $('.day').click(function(){
    $(this).next().toggle('slow');
    $(this).children('.weekday').find("span").toggleClass(function(){
      if ( $( this ).is( ".glyphicon-plus" ) ) {
                   return "glyphicon-minus";
               } else {
                   return "glyphicon-plus";
               }
    });   

    
  });
};

$(document).ready(main);