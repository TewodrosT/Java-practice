var main = function() {
  $('img').click(function(){
    $(this).next().toggle();
  });
};
 
$(document).ready(main);